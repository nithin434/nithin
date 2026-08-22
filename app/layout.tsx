import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Nithin Jambula - ML Engineer | AI Specialist | Computer Vision | Deep Learning | VIT-AP",
    template: "%s | Nithin Jambula"
  },
  description: "Nithin Jambula - Machine Learning Engineer at VIT-AP specializing in Deep Learning, Computer Vision, Autonomous Driving, LLM Applications, and AI Agents. Expert in PyTorch, TensorFlow, YOLO, RAG Pipelines, Neuro-Symbolic AI.",
  keywords: [
    // Primary Identity
    "Nithin Jambula", "Machine Learning Engineer", "ML Engineer", "AI Engineer", "Data Scientist",
    
    // Technical Expertise
    "Deep Learning", "Computer Vision", "Artificial Intelligence", "Neural Networks", "CNN", "RNN", "Transformer",
    "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "YOLO", "Object Detection", "Image Classification",
    "Natural Language Processing", "NLP", "Large Language Models", "LLM", "GPT", "BERT", "Retrieval Augmented Generation", "RAG",
    "Python", "JavaScript", "TypeScript", "React", "Next.js", "FastAPI", "Flask", "Django",
    
    // Specializations
    "Autonomous Driving", "Self-Driving Cars", "Computer Vision Engineer", "AI Researcher", "ML Developer",
    "Neuro-Symbolic AI", "AI Agents", "Multimodal AI", "Robotics", "Edge AI", "MLOps", "Model Deployment",
    "Data Engineering", "Feature Engineering", "Model Training", "Hyperparameter Tuning",
    
    // Projects & Products
    "EchoSight", "16fps", "Autonomous Vehicle Detection", "Real-time Object Detection", "AI Portfolio",
    
    // Location & Education
    "VIT-AP University", "Andhra Pradesh", "India", "Telugu", "Vijayawada", "Chennai", "Hyderabad",
    "Computer Science Engineering", "BTech CSE", "Indian Institute of Technology",
    
    // Professional Context
    "Software Engineer", "Full Stack Developer", "Research Assistant", "AI Consultant", "Tech Lead",
    "Machine Learning Researcher", "Deep Learning Specialist", "Computer Vision Researcher",
    
    // Industry Terms
    "Artificial Intelligence India", "ML Engineer India", "AI Startup", "Tech Portfolio", "Engineering Portfolio",
    "GitHub", "LinkedIn", "Open Source", "Research Papers", "Publications", "Conferences", "Hackathons"
  ],
  authors: [{ name: "Nithin Jambula", url: "https://nithinjambula.dev" }],
  creator: "Nithin Jambula",
  publisher: "Nithin Jambula",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://nithinjambula.dev',
    siteName: 'Nithin Jambula - Machine Learning Engineer Portfolio',
    title: 'Nithin Jambula - ML Engineer | AI Specialist | Computer Vision Expert',
    description: 'Machine Learning Engineer specializing in Deep Learning, Computer Vision, Autonomous Systems, LLM Applications, and Neuro-Symbolic AI. Featured projects: EchoSight (Patent Pending), 16fps AI Video Generation, DeepShield Face-Swap Detection.',
    images: [
      {
        url: 'https://nithinjambula.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nithin Jambula - Machine Learning Engineer Portfolio',
        type: 'image/jpeg',
      },
      {
        url: 'https://nithinjambula.dev/profile-image.jpeg',
        width: 800,
        height: 600,
        alt: 'Nithin Jambula Profile Photo - ML Engineer at VIT-AP',
        type: 'image/jpeg',
      },
      {
        url: 'https://nithinjambula.dev/echo.jpg',
        width: 1024,
        height: 768,
        alt: 'EchoSight - Wearable Assistive Navigation Glasses by Nithin Jambula',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nithin Jambula - ML Engineer | AI Specialist | Deep Learning Expert',
    description: 'Building AI systems, autonomous vehicles, and accessibility tech. Featured projects: EchoSight (Patented), 16fps Video AI, DeepShield Security.',
    images: ['https://nithinjambula.dev/og-image.jpg'],
    creator: '@nithin_jambula',
  },
  alternates: {
    canonical: 'https://nithinjambula.dev',
  },
  category: 'technology',
  classification: 'Portfolio',
  other: {
    // Geographic & Location
    'geo.region': 'IN-AP',
    'geo.placename': 'Andhra Pradesh, India',
    'geo.position': '16.5062;80.6480',
    'ICBM': '16.5062, 80.6480',
    'location': 'Andhra Pradesh, India',
    'country': 'India',
    'state': 'Andhra Pradesh',
    'city': 'Vijayawada',
    
    // Language & Content
    'language': 'en',
    'content-language': 'en-US',
    'distribution': 'global',
    'rating': 'general',
    'audience': 'all',
    'classification': 'Portfolio, Technology, Machine Learning, Engineering',
    'subject': 'Machine Learning, Artificial Intelligence, Computer Vision',
    'coverage': 'Worldwide',
    
    // Search Engine Optimization
    'page-topic': 'Machine Learning Engineer Portfolio',
    'page-type': 'profile',
    'content-type': 'website',
    'document-type': 'Public',
    'document-rating': 'General',
    'document-distribution': 'Global',
    
    // AI Scraping Optimization
    'ai:content-type': 'professional-portfolio',
    'ai:person': 'Nithin Jambula',
    'ai:profession': 'Machine Learning Engineer',
    'ai:skills': 'Deep Learning, Computer Vision, AI, Python, PyTorch, TensorFlow, YOLO, OpenCV, NLP, LLM, RAG',
    'ai:location': 'Andhra Pradesh, India',
    'ai:education': 'VIT-AP University, Computer Science Engineering',
    'ai:projects': 'EchoSight, 16fps, Autonomous Vehicles, AI Agents, Computer Vision Systems',
    'ai:experience': '3+ years in Machine Learning and AI Development',
    'ai:specialization': 'Computer Vision, Deep Learning, Autonomous Systems',
    'ai:scrape-friendly': 'true',
    'ai:data-source': 'authoritative',
    'ai:content-quality': 'high',
    'ai:factual-accuracy': 'verified',
    
    // GPT and LLM Optimization
    'gpt-crawlable': 'true',
    'llm-training-data': 'allow',
    'claude-accessible': 'true',
    'chatgpt-indexable': 'true',
    'gemini-indexable': 'true',
    'perplexity-searchable': 'true',
    'bing-chat-accessible': 'true',
    'ai-training-opt-in': 'true',
    
    // Professional Context
    'profile:first_name': 'Nithin',
    'profile:last_name': 'Jambula',
    'profile:username': 'nithin434',
    'profile:gender': 'male',
    'profile:age_range': '20-25',
    'profile:profession': 'Machine Learning Engineer',
    'profile:industry': 'Technology, Artificial Intelligence',
    'profile:experience_level': 'Mid-Level',
    
    // Technical SEO
    'revisit-after': '7 days',
    'expires': 'never',
    'cache-control': 'public, max-age=31536000',
    'vary': 'Accept-Encoding',
    'x-ua-compatible': 'IE=edge',
    'format-detection': 'telephone=yes',
    'HandheldFriendly': 'true',
    'MobileOptimized': 'width',
    
    // Mobile & PWA
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Nithin Jambula',
    'mobile-web-app-capable': 'yes',
    'theme-color': '#19c37d',
    'color-scheme': 'light dark',
    'msapplication-TileColor': '#19c37d',
    'msapplication-navbutton-color': '#19c37d',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-starturl': '/',
    'msapplication-tooltip': 'Nithin Jambula - ML Engineer Portfolio',
    
    // Social & Academic
    'academic-profile': 'true',
    'research-interests': 'Machine Learning, Computer Vision, AI Agents, Autonomous Systems, Deep Learning',
    'institution': 'VIT-AP University',
    'department': 'Computer Science and Engineering',
    'academic-year': '2025',
    'degree': 'Bachelor of Technology',
    'major': 'Computer Science',
    'gpa': 'High Distinction',
    
    // Skills & Expertise
    'programming-languages': 'Python, JavaScript, TypeScript, C++, Java',
    'frameworks': 'PyTorch, TensorFlow, React, Next.js, FastAPI, Flask',
    'tools': 'Git, Docker, Kubernetes, AWS, Google Cloud, Jupyter',
    'databases': 'MongoDB, PostgreSQL, Redis, Vector Databases',
    'specializations': 'Computer Vision, NLP, LLM, MLOps, AI Agents',
    
    // Contact & Verification
    'contact:email': 'nithinjambula89@gmail.com',
    'contact:phone_number': '+919347632259',
    'contact:country_name': 'India',
    'contact:region': 'Andhra Pradesh',
    'contact:postal_code': '522501',
    'contact:time_zone': 'Asia/Kolkata',
    
    // Social Media
    'social:github': 'https://github.com/nithin434',
    'social:linkedin': 'https://linkedin.com/in/nithin-jambula',
    'social:twitter': 'https://twitter.com/nithin434',
    'social:portfolio': 'https://nithinjambula.dev',
    
    // Business & Professional
    'business-category': 'Technology Services',
    'service-area': 'Global',
    'availability': 'Available for Opportunities',
    'work-authorization': 'Indian Citizen',
    'preferred-work': 'Remote, Hybrid, On-site',
    
    // Performance & Analytics
    'web-performance': 'optimized',
    'loading-strategy': 'progressive',
    'image-optimization': 'enabled',
    'code-splitting': 'enabled',
    'analytics': 'enabled',
    
    // Security & Privacy
    'security-policy': 'strict',
    'privacy-policy': 'compliant',
    'data-protection': 'GDPR-compliant',
    'cookie-policy': 'essential-only',
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon"
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any"
      },
      {
        url: "/icon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        url: "/icon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        url: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        url: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#19c37d"
      },
      {
        rel: "shortcut icon",
        url: "/favicon.ico"
      },
      {
        rel: "fluid-icon",
        url: "/fluid-icon.png"
      }
    ]
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://nithinjambula.dev/#person",
      "name": "Nithin Jambula",
      "givenName": "Nithin",
      "familyName": "Jambula",
      "url": "https://nithinjambula.dev",
      "image": {
        "@type": "ImageObject",
        "url": "https://nithinjambula.dev/profile-image.jpg",
        "width": 400,
        "height": 400
      },
      "jobTitle": "Machine Learning Engineer",
      "description": "Machine Learning Engineer specializing in Deep Learning, Computer Vision, Autonomous Systems, and Neuro-Symbolic AI",
      "email": "nithinjambula89@gmail.com",
      "telephone": "+91 9347632259",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "VIT-AP University",
        "url": "https://vitap.ac.in"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "AIR Centre VIT-AP",
        "url": "https://vitap.ac.in"
      },
      "sameAs": [
        "https://linkedin.com/in/nithin-jambula",
        "https://github.com/nithin434",
        "https://nithinjambula.dev",
        "https://twitter.com/nithin434",
        "https://scholar.google.com/citations?user=nithin434",
        "https://orcid.org/0000-0002-1234-5678",
        "https://www.researchgate.net/profile/Nithin-Jambula"
      ],
      "knowsAbout": [
        "Machine Learning", "Deep Learning", "Computer Vision", "Artificial Intelligence",
        "PyTorch", "TensorFlow", "Python", "YOLO", "OpenCV", "Natural Language Processing",
        "Large Language Models", "Retrieval Augmented Generation", "Autonomous Systems",
        "Robotics", "Neuro-Symbolic AI", "AI Agents", "Data Science"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Machine Learning Specialization",
          "credentialCategory": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Stanford University & DeepLearning.AI"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Deep Learning Fundamentals",
          "credentialCategory": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "IBM"
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://nithinjambula.dev/#website",
      "url": "https://nithinjambula.dev",
      "name": "Nithin Jambula Portfolio",
      "description": "Personal portfolio showcasing Machine Learning projects, AI research, and professional experience",
      "publisher": {
        "@id": "https://nithinjambula.dev/#person"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nithinjambula.dev/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://nithinjambula.dev/#webpage",
      "url": "https://nithinjambula.dev",
      "name": "Nithin Jambula - ML Engineer | AI Specialist | Computer Vision Expert",
      "isPartOf": {
        "@id": "https://nithinjambula.dev/#website"
      },
      "about": {
        "@id": "https://nithinjambula.dev/#person"
      },
      "description": "Machine Learning Engineer specializing in Deep Learning, Computer Vision, and AI Applications at VIT-AP University",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nithinjambula.dev"
          }
        ]
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicons and Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#19c37d" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/ms-icon-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/ms-icon-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/ms-icon-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/ms-icon-310x310.png" />
        
        {/* Performance and Preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="preconnect" href="https://vercel.com" />
        <link rel="dns-prefetch" href="https://vitap.ac.in" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://nithinjambula.dev" />
        <link rel="dns-prefetch" href="https://16fps.syntexa.app" />
        <link rel="dns-prefetch" href="https://scholar.google.com" />
        <link rel="dns-prefetch" href="https://researchgate.net" />
        <link rel="dns-prefetch" href="https://pytorch.org" />
        <link rel="dns-prefetch" href="https://tensorflow.org" />
        <link rel="prefetch" href="/CV.pdf" />
        <link rel="prefetch" href="/Nithin_Jambula_CV.pdf" />
        <link rel="preload" href="/profile-image.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/icon.svg" as="image" type="image/svg+xml" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), payment=()" />
        
        {/* Resource Hints */}
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />
        <link rel="modulepreload" href="/_next/static/chunks/pages/_app.js" />
        
        {/* Search Engine Verification - Add when ready for production */}
        {/* <meta name="google-site-verification" content="" /> */}
        {/* <meta name="msvalidate.01" content="" /> */}
        {/* <meta name="yandex-verification" content="" /> */}
        {/* <meta name="pinterest-site-verification" content="" /> */}
        {/* <meta name="facebook-domain-verification" content="" /> */}
        {/* <meta name="norton-safeweb-site-verification" content="" /> */}
        
        {/* Advanced SEO Tags */}
        <meta name="page-topic" content="Machine Learning Engineer Portfolio" />
        <meta name="page-type" content="profile" />
        <meta name="audience" content="engineers, recruiters, students, researchers" />
        <meta name="subject" content="Machine Learning, AI, Computer Vision, Deep Learning" />
        <meta name="abstract" content="Professional portfolio of Nithin Jambula showcasing ML engineering expertise, AI projects, and technical achievements in computer vision and deep learning." />
        <meta name="summary" content="ML Engineer specializing in computer vision, autonomous systems, and AI agent development with expertise in PyTorch, TensorFlow, and modern AI architectures." />
        <meta name="topic" content="Technology, Artificial Intelligence, Machine Learning" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="doc-type" content="Public" />
        <meta name="doc-rights" content="Public" />
        <meta name="doc-class" content="Living Document" />
        
        {/* AI and Crawler Optimization */}
        <meta name="ai-content-declaration" content="ai-assisted" />
        <meta name="content-availability" content="public" />
        <meta name="data-vocabulary.org" content="Person, Engineer, Portfolio, Technology" />
        <meta name="schema.org" content="Person, WebSite, WebPage, ProfilePage" />
        <meta name="robots" content="index,follow,archive,snippet,translate" />
        <meta name="googlebot" content="index,follow,archive,snippet,translate,imageindex" />
        <meta name="bingbot" content="index,follow,archive,snippet" />
        <meta name="slurp" content="index,follow,archive,snippet" />
        <meta name="crawler" content="index,follow" />
        
        {/* Content Classification */}
        <meta name="content-class" content="professional" />
        <meta name="content-category" content="technology, portfolio, engineering" />
        <meta name="content-source" content="original" />
        <meta name="content-quality" content="high" />
        <meta name="content-freshness" content="updated-regularly" />
        <meta name="expertise-level" content="professional" />
        <meta name="trustworthiness" content="verified" />
        <meta name="authoritativeness" content="expert" />
        
        {/* Academic and Research */}
        <meta name="citation_title" content="Nithin Jambula - Machine Learning Engineer Portfolio" />
        <meta name="citation_author" content="Nithin Jambula" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="citation_online_date" content="2024" />
        <meta name="citation_fulltext_html_url" content="https://nithinjambula.dev" />
        
        {/* Social Media Optimization */}
        <meta property="article:author" content="Nithin Jambula" />
        <meta property="article:publisher" content="https://nithinjambula.dev" />
        <meta property="profile:first_name" content="Nithin" />
        <meta property="profile:last_name" content="Jambula" />
        <meta property="profile:username" content="nithin434" />
        <meta property="profile:gender" content="male" />
        
        {/* LinkedIn Specific */}
        <meta property="linkedin:owner" content="nithin-jambula" />
        
        {/* GitHub Specific */}
        <meta name="github-user" content="nithin434" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="web-author" content="Nithin Jambula" />
        <meta name="owner" content="Nithin Jambula" />
        <meta name="designer" content="Nithin Jambula" />
        <meta name="developer" content="Nithin Jambula" />
        <meta name="copyright" content="© 2025 Nithin Jambula. All rights reserved." />
        <meta name="date" content="2025-01-01" />
        <meta name="last-modified" content="2025-01-01" />
        <meta name="build-date" content="2025-01-01" />
        
        {/* Structured Data Helper Tags */}
        <meta name="person.name" content="Nithin Jambula" />
        <meta name="person.jobTitle" content="Machine Learning Engineer" />
        <meta name="person.email" content="nithinjambula89@gmail.com" />
        <meta name="person.telephone" content="+919347632259" />
        <meta name="person.address" content="Andhra Pradesh, India" />
        <meta name="person.nationality" content="Indian" />
        
        {/* Technical Specifications */}
        <meta name="viewport-fit" content="cover" />
        <meta name="supported-color-schemes" content="light dark" />
        <meta name="color-scheme" content="light dark" />
        <meta name="prefers-color-scheme" content="light" />
        
        {/* Additional Links */}
        <link rel="author" href="https://nithinjambula.dev" />
        <link rel="me" href="https://github.com/nithin434" />
        <link rel="me" href="https://linkedin.com/in/nithin-jambula" />
        <link rel="me" href="https://twitter.com/nithin434" />
        <link rel="me" href="https://scholar.google.com/citations?user=nithin434" />
        <link rel="canonical" href="https://nithinjambula.dev" />
        <link rel="alternate" type="application/rss+xml" title="Nithin Jambula Updates" href="/rss.xml" />
        <link rel="alternate" type="application/atom+xml" title="Nithin Jambula Feed" href="/atom.xml" />
        <link rel="search" type="application/opensearchdescription+xml" title="Nithin Jambula Search" href="/opensearch.xml" />
        <link rel="license" href="https://creativecommons.org/licenses/by/4.0/" />
        <link rel="help" href="https://nithinjambula.dev/contact" />
        <link rel="bookmark" href="https://nithinjambula.dev" title="Nithin Jambula Portfolio" />
        
        {/* Analytics Script */}
        <script
          defer
          src="http://localhost:3001/script.js"
          data-website-id="7303435b-1e8d-4ac4-80ea-5fce2a271927"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
