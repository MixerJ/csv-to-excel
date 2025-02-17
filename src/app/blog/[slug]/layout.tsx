import { Metadata } from 'next';
import AnimatedArticle from './AnimatedArticle';

export const metadata: Metadata = {
  title: 'Blog Post',
  description: 'Blog post page',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-32">
          <div className="w-[60%] mx-auto">
            <AnimatedArticle>
              <div className="px-6 py-10 sm:px-8 lg:px-12">
                {children}
              </div>
            </AnimatedArticle>
          </div>
        </div>
      </div>
    </main>
  );
} 