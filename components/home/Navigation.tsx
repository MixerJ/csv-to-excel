'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Home, Globe } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import { i18n } from 'next-i18next';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleLanguageMenu = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

    const { t } = useTranslation('common');

    return (
        <>
            <header className="fixed top-0 left-0 right-0 flex h-16 items-center justify-between gap-4 border-b bg-secondary px-4 md:px-6 z-50">
                <Link href="#" className="flex items-center gap-2 text-secondary-foreground text-lg font-semibold md:text-base hidden md:flex">
                    <Home className="h-6 w-6 text-secondary-foreground" />
                    <span className="sr-only">{t('home')}</span>
                </Link>
                <button className="md:hidden text-secondary-foreground" onClick={toggleMenu}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
                <nav className="hidden md:flex flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link href="#" className="flex items-center gap-2 text-secondary-foreground text-lg font-semibold md:text-base">
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link href="#" className="text-secondary-foreground transition-colors hover:text-primary">
                        {t('blog')}
                    </Link>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                        {t('faq')}
                    </Link>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                        {t('updatelog')}
                    </Link>
                </nav>
                <div className="relative">
                    <button className="text-secondary-foreground" onClick={toggleLanguageMenu}>
                        <Globe className="h-6 w-6" />
                    </button>
                    {isLanguageOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                            <Link href="#" className="block px-4 py-2 text-secondary-foreground hover:bg-secondary hover:text-primary">English</Link>
                            <Link href="#" className="block px-4 py-2 text-secondary-foreground hover:bg-secondary hover:text-primary">中文</Link>
                            <Link href="#" className="block px-4 py-2 text-secondary-foreground hover:bg-secondary hover:text-primary">Español</Link>
                        </div>
                    )}
                </div>
            </header>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleMenu}></div>
            )}
            <aside className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <nav className="flex flex-col gap-6 p-4">
                    <Link href="#" className="text-foreground transition-colors hover:text-foreground">
                        {t('home')}
                    </Link>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                        {t('faq')}
                    </Link>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                        {t('updatelog')}
                    </Link>
                </nav>
            </aside>
        </>
    );
}