import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { faculties } from '../data/faculties';
import { newsArticles } from '../data/news';

const siteName = 'BELTEI International University';
const siteUrl = 'https://beltei-international-university.netlify.app';
const defaultDescription =
  'Discover BELTEI International University programs, faculties, admissions, campus life, and university news in Phnom Penh, Cambodia.';
const socialImage = `${siteUrl}/images/campus1_tuolsleng.png`;
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollegeOrUniversity',
  name: siteName,
  alternateName: 'BIU',
  url: siteUrl,
  logo: `${siteUrl}/logo/beltei_logo.png`,
  sameAs: [
    'https://beltei.edu.kh/biu',
    'https://www.facebook.com/belteiuniversity',
    'https://www.youtube.com/channel/UCV8pvuK4Wu0l-K1o38h5iag',
    'https://t.me/beltei_iu',
  ],
};

const staticPages = {
  '/': {
    title: siteName,
    description: defaultDescription,
  },
  '/about': {
    title: 'About BELTEI International University',
    description: 'Learn about BELTEI International University, its history, mission, campuses, and academic partnerships.',
  },
  '/faculties': {
    title: 'Faculties and Majors',
    description: 'Explore the 13 academic faculties, majors, and study options listed by BELTEI International University.',
  },
  '/programs': {
    title: 'Academic Programs and Degrees',
    description: 'Browse academic programs, degree levels, study shifts, and admission requirements at BELTEI International University.',
  },
  '/admissions': {
    title: 'Admissions and Enrollment',
    description: 'Review admissions steps, required documents, study options, and official enrollment contacts for BELTEI International University.',
  },
  '/campus-life': {
    title: 'Campus Life and Facilities',
    description: 'Explore campus facilities, libraries, classrooms, and student life at BELTEI International University.',
  },
  '/news': {
    title: 'University News and Events',
    description: 'Read news, announcements, and event updates published on the BELTEI International University website.',
  },
  '/contact': {
    title: 'Contact and Campus Locations',
    description: 'Find BELTEI International University campus locations, contact details, and directions in Phnom Penh, Cambodia.',
  },
};

function getPageMetadata(pathname) {
  const page = staticPages[pathname];
  if (page) return { ...page, type: 'website', noIndex: false };

  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'faculties' && segments[1]) {
    const faculty = faculties.find((item) => item.slug === segments[1]);
    if (faculty) {
      return {
        title: faculty.nameEn,
        description: faculty.descriptionEn,
        type: 'website',
        noIndex: false,
      };
    }
  }

  if (segments[0] === 'news' && segments[1]) {
    const article = newsArticles.find((item) => item.id === segments[1]);
    if (article) {
      return {
        title: article.titleEn,
        description: article.summaryEn,
        type: 'article',
        noIndex: false,
      };
    }
  }

  return {
    title: 'Page Not Found',
    description: 'The requested page could not be found on the BELTEI International University website.',
    type: 'website',
    noIndex: true,
  };
}

function RouteMetadata() {
  const { pathname } = useLocation();
  const page = useMemo(() => getPageMetadata(pathname), [pathname]);
  const canonicalPath = pathname === '/' ? '/' : `/${pathname.split('/').filter(Boolean).join('/')}`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const title = page.title === siteName ? siteName : `${page.title} | ${siteName}`;

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    document.querySelector('meta[name="robots"]')?.setAttribute('content', page.noIndex ? 'noindex,follow' : 'index,follow');
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);

    const metaValues = {
      'og:type': page.type,
      'og:title': page.title,
      'og:description': page.description,
      'og:url': canonicalUrl,
      'og:image': socialImage,
      'og:image:alt': 'BELTEI International University campus in Phnom Penh',
      'twitter:title': page.title,
      'twitter:description': page.description,
      'twitter:image': socialImage,
    };

    for (const [property, content] of Object.entries(metaValues)) {
      document.querySelector(`meta[property="${property}"], meta[name="${property}"]`)?.setAttribute('content', content);
    }

    document.getElementById('university-structured-data')?.remove();
    if (pathname === '/') {
      const schemaScript = document.createElement('script');
      schemaScript.id = 'university-structured-data';
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify(structuredData);
      document.head.append(schemaScript);
    }
  }, [canonicalUrl, page, pathname, title]);

  return null;
}

export default RouteMetadata;
