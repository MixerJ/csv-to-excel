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
    <div className="min-h-screen bg-gray-50">
      <div className="h-64"></div>
      <main className="mb-64">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedArticle>
              <article className="bg-white px-6 py-10 sm:px-8 lg:px-12 rounded-xl shadow-sm">
                {children}
              </article>
            </AnimatedArticle>
          </div>
        </div>
      </main>
    </div>
  );
} 