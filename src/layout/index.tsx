import Head from "next/head";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const SITE_URL = "https://vikashkumhar.dev";
const SITE_NAME = "Vikash Kumhar | Frontend Developer";
const DEFAULT_DESCRIPTION =
  "Frontend developer specializing in React.js, Next.js, and TypeScript. Building fast, accessible, and visually stunning web experiences from India.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/vikash_portfolio.png`;

const PublicLayout: FC<PublicLayoutProps> = ({
  children,
  title = SITE_NAME,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
}) => {
  const { asPath } = useRouter();
  const canonical = `${SITE_URL}${asPath}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vikash Kumhar",
    url: SITE_URL,
    jobTitle: "Frontend Developer",
    description: DEFAULT_DESCRIPTION,
    sameAs: [
      "https://github.com/vkumhar12",
      "https://www.linkedin.com/in/vikash-kumhar-7a67b8216/",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Vikash Kumhar, Frontend Developer, React Developer, Next.js Developer, TypeScript, Tailwind CSS, Web Developer India, UI Developer"
        />
        <meta name="author" content="Vikash Kumhar" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@vikashkumhar" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default PublicLayout;

interface PublicLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}
