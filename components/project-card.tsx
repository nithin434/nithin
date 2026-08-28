"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, ExternalLink, ImageIcon } from "lucide-react"
import { SITE_URL } from "@/lib/site"

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  tech: string
  image?: string
  imageAlt?: string
  imageKeywords?: string[]
  tags: string[]
  detailedFeatures?: string[]
  keyMetrics?: Record<string, string>
  award: string
  impact: string
}

export function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  image,
  imageAlt,
  imageKeywords,
  tags,
  detailedFeatures,
  keyMetrics,
  award,
  impact,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Color mapping for different project types
  const getColorScheme = (title: string) => {
    if (title.includes("EchoSight")) return { accent: "from-blue-500 to-cyan-500", badge: "bg-blue-500/20" }
    if (title.includes("16fps")) return { accent: "from-purple-500 to-pink-500", badge: "bg-purple-500/20" }
    if (title.includes("WOAT")) return { accent: "from-green-500 to-emerald-500", badge: "bg-green-500/20" }
    if (title.includes("DeepShield")) return { accent: "from-red-500 to-orange-500", badge: "bg-red-500/20" }
    return { accent: "from-amber-500 to-yellow-500", badge: "bg-amber-500/20" }
  }

  const { accent, badge } = getColorScheme(title)

  // Structured Data for Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description: description,
    image: image ? `${SITE_URL}${image}` : undefined,
    uploadDate: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Nithin Jambula",
      url: SITE_URL,
      sameAs: [
        "https://github.com/nithin434",
        "https://linkedin.com/in/nithin-jambula",
      ]
    },
    keywords: [...(imageKeywords || []), ...tags].join(", "),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Card className="bg-gradient-to-br from-slate-900 to-slate-950 border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden group">
        {/* Project Image with SEO */}
        {image && (
          <div className="relative w-full h-64 bg-slate-800 overflow-hidden group-hover:shadow-lg transition-shadow">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            {imageKeywords && (
              <meta
                name="keywords"
                content={`${title}, Nithin Jambula, ${imageKeywords.join(", ")}`}
              />
            )}
          </div>
        )}
        {!image && (
          <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <ImageIcon className="text-slate-600" size={40} />
          </div>
        )}
        
        {/* Header with gradient accent */}
        <div className={`h-1 bg-gradient-to-r ${accent}`} />

      <div className="p-6 space-y-4">
        {/* Title Section */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all">
                {title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
            </div>
          </div>

          {/* Award Badge */}
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${badge} backdrop-blur-sm border border-slate-600`}>
            {award}
          </div>
        </div>

        {/* Tech Stack with visual indicators */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {tech.split(", ").map((t) => (
              <Badge key={t} variant="secondary" className="bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 text-slate-200 font-medium hover:from-slate-700 hover:to-slate-600 transition-all"
            >
              #{tag.toLowerCase().replace(" ", "-")}
            </span>
          ))}
        </div>

        {/* Main Description */}
        <p className="text-slate-300 leading-relaxed">{description}</p>

        {/* Impact Statement */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
          <p className="text-sm text-slate-200">
            <span className="font-semibold text-slate-100">💡 Impact:</span> {impact}
          </p>
        </div>

        {/* Expandable Details */}
        {(detailedFeatures || keyMetrics) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between text-slate-400 hover:text-slate-200 transition-colors py-2 px-3 rounded-lg hover:bg-slate-800/30 mt-2"
          >
            <span className="text-sm font-medium">
              {isExpanded ? "Hide Details" : "View Technical Details"}
            </span>
            {isExpanded ? (
              <ChevronUp size={16} className="transition-transform" />
            ) : (
              <ChevronDown size={16} className="transition-transform" />
            )}
          </button>
        )}

        {/* Expandable Content */}
        {isExpanded && (
          <div className="space-y-4 pt-4 border-t border-slate-700 animate-in fade-in">
            {/* Key Metrics */}
            {keyMetrics && (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-300">📊 Key Metrics</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(keyMetrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-slate-800/50 border border-slate-700 rounded p-2 hover:border-slate-600 transition-colors"
                    >
                      <p className="text-xs text-slate-400">{key}</p>
                      <p className="text-sm font-bold text-slate-100">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Features */}
            {detailedFeatures && (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-300">✨ Features</p>
                <ul className="space-y-2">
                  {detailedFeatures.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-slate-300">
                      <span className="text-slate-500 font-bold">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
    </>
  )
}
