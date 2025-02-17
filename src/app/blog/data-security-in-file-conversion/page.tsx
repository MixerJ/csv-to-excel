import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Data Security in File Conversion',
  description: 'Understanding the security implications of file conversion and how to protect your data.',
};

export default function BlogPost() {
  return <BlogContent />;
} 