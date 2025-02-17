import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Batch Conversion Best Practices',
  description: 'Learn how to efficiently convert multiple CSV files to Excel format while maintaining data integrity.',
};

export default function BlogPost() {
  return <BlogContent />;
} 