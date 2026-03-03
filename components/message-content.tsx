"use client"

import { Award, Sparkles, Mail, Linkedin, Github, ExternalLink, FileText, Eye, Bot, X } from "lucide-react"
import { CV_DATA } from "@/lib/cv-data"
import { FollowUpChip } from "./follow-up-chip"
import { ProjectCard } from "./project-card"
import Image from "next/image"
import { useState, useEffect } from "react"

interface Message {
  type: string
  text: string
  suggestions?: string[]
}

interface MessageContentProps {
  msg: Message
  onSendMessage: (text: string) => void
}

export function MessageContent({ msg, onSendMessage }: MessageContentProps) {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [modalType, setModalType] = useState<'gallery' | 'certification' | null>(null)
  const [showAIAgent, setShowAIAgent] = useState(false)

  const getUserInfo = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      // Analytics tracking could be added here
      return data
    } catch (error) {
      // IP lookup failed - continue normally
      return null
    }
  }

  const handle16fpsClick = async () => {
    await getUserInfo()
    setShowAIAgent(true)
  }

  const renderFollowUpSuggestions = () => {
    if (!msg.suggestions) return null

    return (
      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/5">
        {msg.suggestions.map((suggestion, i) => (
          <FollowUpChip key={i} text={suggestion} onClick={() => onSendMessage(suggestion)} />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4 w-full max-w-3xl">
      {msg.text && <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>}

      {msg.type === "experience" && (
        <div className="grid gap-4 mt-4">
          {(msg.data?.experience || CV_DATA.experience).map((exp: any, idx: number) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 hover:border-slate-600 transition-all rounded-xl overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <div className="p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <div>
                    <h3 className="font-bold text-[#19c37d] text-lg">{exp.role}</h3>
                    <p className="text-sm text-white font-medium">{exp.company}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{exp.location}</p>
                  </div>
                  <span className="text-xs text-gray-400 bg-slate-900/80 px-3 py-1 rounded-md whitespace-nowrap border border-slate-700 font-mono">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
                
                {exp.detailedWork && (
                  <div className="space-y-2 pt-3 border-t border-slate-700">
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Key Contributions</p>
                    <ul className="space-y-1.5">
                      {exp.detailedWork.map((work: string, i: number) => (
                        <li key={i} className="flex gap-2 text-xs text-slate-300">
                          <span className="text-slate-500 font-bold mt-0.5">▸</span>
                          <span>{work}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.metrics && (
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-700">
                    {Object.entries(exp.metrics).map(([key, value]: [string, unknown]) => (
                      <div key={key} className="bg-slate-800/50 border border-slate-700 rounded p-2">
                        <p className="text-xs text-slate-400">{key}</p>
                        <p className="text-sm font-bold text-slate-100">{value as string}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-1.5 flex-wrap pt-3 border-t border-slate-700">
                  {exp.tech?.map((t: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-800 text-slate-200 hover:bg-slate-700 px-2.5 py-1 rounded-lg transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {msg.type === "projects" && (
        <div className="grid md:grid-cols-1 gap-4 mt-4 w-full">
          {(msg.data?.projects || CV_DATA.projects).map((proj: any, idx: number) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              subtitle={proj.subtitle}
              description={proj.description}
              tech={proj.tech}
              tags={proj.tags}
              image={proj.image}
              imageAlt={proj.imageAlt}
              imageKeywords={proj.imageKeywords}
              detailedFeatures={proj.detailedFeatures}
              keyMetrics={proj.keyMetrics}
              award={proj.award}
              impact={proj.impact}
            />
          ))}
        </div>
      )}

      {msg.type === "skills" && (
        <div className="space-y-6 mt-4">
          {Object.entries(msg.data?.skills || CV_DATA.skills).map(([category, items], idx) => (
            <div key={idx}>
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3 ml-1 flex items-center gap-2">
                <span className="text-lg">→</span> {category.replace(/_/g, " ")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-slate-200 text-sm px-3 py-1.5 rounded-lg border border-slate-700/50 transition-all cursor-default font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {msg.type === "contact" && (
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          <a
            href={`mailto:${msg.data?.email || CV_DATA.profile.email}?subject=Hello Nithin - Happy to Connect!&body=Hi Nithin,%0A%0AI came across your portfolio and would love to connect with you.%0A%0ABest regards`}
            target="_blank"
            className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl hover:border-cyan-500/50 hover:from-slate-800 transition-all group"
          >
            <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-cyan-900/30 text-cyan-400 transition-colors">
              <Mail size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">Email</span>
              <span className="text-sm text-slate-200">{msg.data?.email || CV_DATA.profile.email}</span>
            </div>
          </a>
          <a
            href={msg.data?.linkedin || CV_DATA.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl hover:border-blue-500/50 hover:from-slate-800 transition-all group"
          >
            <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-blue-900/30 text-blue-400 transition-colors">
              <Linkedin size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">LinkedIn</span>
              <span className="text-sm text-slate-200">Connect</span>
            </div>
            <ExternalLink size={14} className="ml-auto text-slate-600 group-hover:text-slate-400" />
          </a>
          <a
            href={msg.data?.github || CV_DATA.profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl hover:border-purple-500/50 hover:from-slate-800 transition-all group sm:col-span-2"
          >
            <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-purple-900/30 text-purple-400 transition-colors">
              <Github size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">GitHub</span>
              <span className="text-sm text-slate-200">Check out the code</span>
            </div>
            <ExternalLink size={14} className="ml-auto text-slate-600 group-hover:text-slate-400" />
          </a>
          <a
            href={`tel:${msg.data?.phone || CV_DATA.profile.phone}`}
            className="flex items-center gap-3 p-4 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl hover:border-green-500/50 hover:from-slate-800 transition-all group sm:col-span-1"
          >
            <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-green-900/30 text-green-400 transition-colors">
              <FileText size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">Phone</span>
              <span className="text-sm text-slate-200">{msg.data?.phone || CV_DATA.profile.phone}</span>
            </div>
          </a>
        </div>
      )}

      {msg.type === "education" && (
        <div className="space-y-3 mt-4">
          {(msg.data?.education || CV_DATA.education).map((edu: any, idx: number) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-700 hover:border-slate-600 transition-all p-4 rounded-xl flex justify-between items-start gap-4"
            >
              <div className="flex-1">
                <h3 className="font-bold text-cyan-400">{edu.degree}</h3>
                <p className="text-slate-300 text-sm">{edu.school}</p>
                <p className="text-xs text-slate-500 mt-1">{edu.location}</p>
              </div>
              <div className="text-right whitespace-nowrap">
                <div className="text-sm font-mono text-slate-400">{edu.year}</div>
                <div className="text-xs text-slate-500">Score: {edu.score}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {msg.type === "certifications" && (
        <div className="space-y-4 mt-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl p-5 space-y-3">
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Award size={16} /> Certifications
            </h3>
            <ul className="space-y-2">
              {(msg.data?.certifications || CV_DATA.certifications).map((cert: any, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-cyan-400 mt-1 font-bold">✓</span> 
                  <span>{typeof cert === 'string' ? cert : cert.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-xl p-5 space-y-3">
            <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={16} /> Achievements & Roles
            </h3>
            <ul className="space-y-2">
              {(msg.data?.achievements || CV_DATA.achievements).map((ach: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-yellow-400 mt-1 text-lg">★</span> {ach}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {msg.type === "cv_prompt" && (
        <div className="mt-4">
          <button
            onClick={() => {
              window.open('/CV.pdf', '_blank')
              // Simulate terminal output by sending a message
              setTimeout(() => {
                onSendMessage("CV opened successfully")
              }, 100)
            }}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#19c37d] hover:bg-[#15a066] text-white font-medium rounded-lg transition-colors"
          >
            <FileText size={18} /> Download CV (PDF)
          </button>
        </div>
      )}

      {msg.type === "terminal" && (
        <div className="mt-4">
          <div className="bg-black/90 border border-gray-600 rounded-lg p-4 font-mono text-sm">
            <div className="text-green-400 mb-2">$ open CV.pdf</div>
            <pre className="text-gray-300 whitespace-pre-line">{msg.text}</pre>
          </div>
        </div>
      )}

      {msg.type === "16fps_special" && (
        <div className="mt-4">
          <p className="text-gray-300 mb-4">{msg.text}</p>
          <button
            onClick={handle16fpsClick}
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105"
          >
            <ExternalLink size={18} /> Launch 16fps App
          </button>
        </div>
      )}

      {msg.type === "gallery" && (
        <div className="mt-4">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Award className="text-yellow-500" size={20} />
              Project Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CV_DATA.galleryImages.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/40 border border-gray-700 rounded-xl overflow-hidden hover:border-gray-500 transition-all group cursor-pointer"
                  onClick={() => {
                    setSelectedItem(item)
                    setModalType('gallery')
                  }}
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black/50 rounded-full p-2">
                        <Eye className="text-white" size={16} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full mb-2 ${
                        item.category === 'projects' ? 'bg-blue-500/20 text-blue-300' : 'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {item.category}
                      </span>
                      <h4 className="text-white font-bold text-sm">{item.title}</h4>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="text-purple-500" size={20} />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CV_DATA.detailedCertifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition-all group cursor-pointer"
                  onClick={() => {
                    setSelectedItem(cert)
                    setModalType('certification')
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={cert.logo}
                        alt={cert.provider}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm mb-1 group-hover:text-[#19c37d] transition-colors">{cert.name}</h4>
                      <p className="text-gray-400 text-xs mb-2">{cert.provider}</p>
                      {cert.badge && (
                        <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                          Badge
                        </span>
                      )}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="text-gray-400" size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {renderFollowUpSuggestions()}

      {/* Modal for detailed view */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
          <div className="bg-[#2A2B32] border border-gray-600 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {modalType === 'gallery' && (
              <div>
                <div className="relative h-64 md:h-80">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
                  >
                    ×
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      selectedItem.category === 'projects' ? 'bg-blue-500/20 text-blue-300' : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {selectedItem.category}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{selectedItem.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedItem.description}</p>
                </div>
              </div>
            )}

            {modalType === 'certification' && (
              <div>
                <div className="relative h-48 md:h-64">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    fill
                    className="object-contain bg-white rounded-t-xl"
                  />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
                  >
                    ×
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={selectedItem.logo}
                        alt={selectedItem.provider}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold">{selectedItem.name}</h3>
                      <p className="text-gray-400">{selectedItem.provider}</p>
                      {selectedItem.badge && (
                        <span className="inline-block mt-1 px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                          Digital Badge
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#19c37d] hover:bg-[#15a066] text-white rounded-lg transition-colors"
                      onClick={() => setSelectedItem(null)}
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sarcastic AI Agent Popup */}
      {showAIAgent && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 border-2 border-purple-500/50 rounded-xl max-w-lg w-full shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Bot className="text-purple-400 animate-bounce" size={24} />
                  <h3 className="text-white font-bold text-lg">🤖 AI Portfolio Agent</h3>
                </div>
                <button
                  onClick={() => setShowAIAgent(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="bg-black/50 p-4 rounded-lg border border-purple-500/30">
                  <p className="text-white mb-3">Oh hey there! 👋 Welcome to Nithin's portfolio.</p>
                  <p className="text-gray-300 mb-3">This entire website? Yeah, I built it. I'm a custom AI agent trained on data scraped from his GitHub repos, LinkedIn stalking sessions, and probably his browser history too (don't tell him I said that).</p>
                  <p className="text-purple-300 font-medium">I've got <em>plenty</em> of juicy details about this guy...</p>
                </div>
                
                <div className="bg-black/50 p-4 rounded-lg border border-green-500/30">
                  <p className="text-green-300 font-bold mb-2">💡 Pro Tip for You:</p>
                  <p className="text-gray-300">Instead of just scrolling like everyone else, why don't you actually <strong>ask me something</strong> about Nithin? I literally know everything - his projects, skills, that embarrassing commit message from 2 AM... Try asking about:</p>
                  <ul className="mt-2 text-sm text-gray-400 space-y-1">
                    <li>• His latest projects</li>
                    <li>• Technical skills</li>
                    <li>• Work experience</li>
                    <li>• Those awards he keeps bragging about</li>
                  </ul>
                </div>
                
                <div className="bg-black/50 p-4 rounded-lg border border-yellow-500/30">
                  <p className="text-yellow-300 font-bold mb-2">🎭 Fair Warning:</p>
                  <p className="text-gray-300">I might be a little sarcastic. It's not a bug, it's a feature. Blame Nithin for training me on too much Reddit data.</p>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <a
                  href="https://16fps.syntexa.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all text-center"
                  onClick={() => setShowAIAgent(false)}
                >
                  🚀 Launch 16fps App
                </a>
                <button
                  onClick={() => setShowAIAgent(false)}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
