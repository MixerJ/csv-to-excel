import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Understanding CSV and Excel File Formats',
  description: 'Learn about the differences between CSV and Excel files, their advantages, and when to use each format.',
};

export default function BlogPost() {
  return <BlogContent />;
} 