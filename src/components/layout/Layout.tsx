// src/components/layout/Layout.tsx

import { ReactNode } from 'react';
import SEO from '@/components/SEO';
import Footer from '@/components/layout/Footer';

interface LayoutProps {
  children: ReactNode;
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    twitterCard: string;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  return (
    <>
      <SEO {...seo} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
