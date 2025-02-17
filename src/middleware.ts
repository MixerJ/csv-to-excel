import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const defaultLocale = 'en'
const locales = ['en', 'zh']

// Check if the pathname starts with a locale
function pathnameStartsWithLocale(pathname: string) {
  return locales.some(locale => 
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
}

function getLocale(request: NextRequest) {
  // Check cookie first
  const cookieLocale = request.cookies.get('i18nextLng')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // Then check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase()
    
    if (locales.includes(preferredLocale)) {
      return preferredLocale
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if the pathname starts with a locale
  const hasLocale = pathnameStartsWithLocale(pathname)
  const locale = getLocale(request)

  // If URL has no locale
  if (!hasLocale) {
    // For default locale (en), don't add prefix
    if (locale === defaultLocale) {
      return NextResponse.next()
    }
    // For other locales, redirect to add the locale prefix
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }

  // If URL has a locale prefix
  const urlLocale = pathname.split('/')[1]
  
  // If it's the default locale (en), redirect to remove the prefix
  if (urlLocale === defaultLocale) {
    const newPathname = pathname.replace(`/${defaultLocale}`, '') || '/'
    return NextResponse.redirect(
      new URL(newPathname, request.url)
    )
  }

  // For other locales, keep the prefix
  if (locales.includes(urlLocale)) {
    return NextResponse.next()
  }

  // If locale is invalid, redirect based on user preference
  return NextResponse.redirect(
    new URL(
      locale === defaultLocale
        ? pathname
        : `/${locale}${pathname}`,
      request.url
    )
  )
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // Skip all API routes
    // Skip all files in the public folder
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 