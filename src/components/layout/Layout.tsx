import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "../SEO";

interface LayoutProps {
  children: React.ReactNode;
  seo?: {
    title: string;
    description: string;
    keywords: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterCard?: string;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, seo }) => {
  return (
    <>
      {seo && <SEO {...seo} />}
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
