import { Helmet } from 'react-helmet-async';

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  noindex?: boolean;
}

const BASE_URL = 'https://estate.aibyteconsult.com';
const DEFAULT_IMAGE = `${BASE_URL}/assets/og/nesebar-1200x630.jpg`;

export const PageSEO = ({
  title,
  description,
  path,
  type = 'website',
  image,
  article,
  breadcrumbs,
  noindex = false,
}: PageSEOProps) => {
  const fullUrl = `${BASE_URL}${path}`;
  const fullTitle = `${title} | BulgariaEstate`;
  const ogImage = image || DEFAULT_IMAGE;

  const breadcrumbLd = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${BASE_URL}${item.url}`,
        })),
      }
    : null;

  const articleLd =
    type === 'article' && article
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          image: ogImage,
          url: fullUrl,
          datePublished: article.publishedTime,
          dateModified: article.modifiedTime || article.publishedTime,
          author: {
            '@type': 'Organization',
            name: article.author || 'BulgariaEstate by AI Byte Consult',
          },
          publisher: {
            '@type': 'Organization',
            name: 'BulgariaEstate by AI Byte Consult',
            logo: {
              '@type': 'ImageObject',
              url: `${BASE_URL}/assets/brand/logo.png`,
            },
          },
        }
      : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="BulgariaEstate by AI Byte Consult" />

      {/* Article OG */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {breadcrumbLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      )}
      {articleLd && (
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
      )}
    </Helmet>
  );
};
