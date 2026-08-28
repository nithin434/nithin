"use client"

import Script from "next/script"
import { SITE_URL } from "@/lib/site"

interface ImageMetadata {
  title: string
  description: string
  imageUrl: string
  projectName: string
  authorName: string
  authorUrl: string
  uploadDate?: string
  keywords?: string[]
}

export function ImageSEO({ images }: { images: ImageMetadata[] }) {
  const structuredDataArray = images.map((image) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: image.title,
    description: image.description,
    url: image.imageUrl,
    uploadDate: image.uploadDate || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: image.authorName,
      url: image.authorUrl,
      sameAs: [
        "https://github.com/nithin434",
        "https://linkedin.com/in/nithin-jambula",
        "https://twitter.com/nithin_jambula",
      ],
    },
    isPartOf: {
      "@type": "WebPage",
      name: image.projectName,
      url: `${SITE_URL}/${image.projectName.toLowerCase().replace(/\s+/g, "-")}`,
    },
    creator: {
      "@type": "Person",
      name: image.authorName,
      givenName: "Nithin",
      familyName: "Jambula",
      email: "nithinjambula89@gmail.com",
      jobTitle: "Machine Learning Engineer",
      worksFor: {
        "@type": "Organization",
        name: "VIT-AP University",
      },
    },
    keywords: image.keywords ? image.keywords.join(", ") : "",
  }))

  return (
    <>
      {structuredDataArray.map((data, idx) => (
        <Script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      ))}
    </>
  )
}

// Organization Schema for better brand recognition
export function OrganizationSEO() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nithin Jambula",
    url: SITE_URL,
    image: `${SITE_URL}/profile-image.jpeg`,
    sameAs: [
      "https://github.com/nithin434",
      "https://linkedin.com/in/nithin-jambula",
      "https://twitter.com/nithin_jambula",
    ],
    jobTitle: "Machine Learning Engineer",
    worksFor: {
      "@type": "Organization",
      name: "VIT-AP University",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "VIT-AP University",
        address: "Amaravathi, Andhra Pradesh, India",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amaravathi",
      addressRegion: "AP",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephoneNumber: "+91-9347632259",
      email: "nithinjambula89@gmail.com",
      contactType: "Professional",
    },
    knowsAbout: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "AI Agents",
      "Autonomous Systems",
      "Neural Networks",
      "Python",
      "PyTorch",
      "TensorFlow",
    ],
  }

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  )
}

// Project Schema for better project visibility
export function ProjectSEO({
  title,
  description,
  image,
  keywords,
}: {
  title: string
  description: string
  image: string
  keywords: string[]
}) {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: title,
    description: description,
    image: `${SITE_URL}${image}`,
    author: {
      "@type": "Person",
      name: "Nithin Jambula",
      url: SITE_URL,
    },
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "0",
    },
    keywords: keywords.join(", "),
  }

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(projectSchema),
      }}
    />
  )
}
