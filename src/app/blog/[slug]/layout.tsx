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
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-[60%]">
        <AnimatedArticle>
          <div className="px-6 py-10 sm:px-8 lg:px-12 flex justify-center">
            <div className="w-full max-w-2xl">
              {children}
            </div>
          </div>
        </AnimatedArticle>
      </div>
    </div>
  );
} 