'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ExternalLink, Sprout, CloudSun, Smartphone, Scan, Building, Globe, Bot } from 'lucide-react'

const projects = [
  {
    title: 'ScanSkip',
    description: 'AI-powered scanning solution with multilingual voice agent capabilities. The voice agent understands, processes, and responds to user queries in multiple languages using speech recognition, language processing, and text-to-speech technologies, enabling seamless voice-based interaction.',
    tags: ['AI', 'Voice Agent', 'ML', 'Full-stack'],
    icon: Scan,
    status: 'Live',
    gradient: 'from-violet-500 to-purple-500',
    image: 'scanskip',
    url: 'https://scanskip.com/',
  },
  {
    title: 'Nagaraseva',
    description: 'Citizen service platform with multilingual voice agent system for accessible government services. Features AI-powered voice interactions across different languages, making communication more efficient and accessible for diverse populations.',
    tags: ['AI', 'Voice Agent', 'Communication', 'Platform'],
    icon: Building,
    status: 'Live',
    gradient: 'from-cyan-500 to-blue-500',
    image: 'nagaraseva',
    url: 'https://nagaraseva.com/',
  },
  {
    title: 'Tattvasphere',
    description: 'A modern website platform featuring elegant design, responsive layout, and seamless user experience. Built with cutting-edge web technologies for optimal performance and accessibility.',
    tags: ['Website', 'UI/UX', 'Responsive', 'Modern'],
    icon: Globe,
    status: 'Live',
    gradient: 'from-pink-500 to-rose-500',
    image: 'tattvasphere',
    url: 'https://tattvasphere.com/',
  },
  {
    title: 'Multilingual Voice Agent',
    description: 'An AI-powered system that can understand, process, and respond to user queries in multiple languages using speech recognition, natural language processing, and text-to-speech technologies. Enables seamless voice-based interaction across different languages, making communication more accessible and efficient.',
    tags: ['AI', 'NLP', 'Voice', 'ML', 'TTS'],
    icon: Bot,
    status: 'Completed',
    gradient: 'from-amber-500 to-orange-500',
    image: 'voiceagent',
  },
  {
    title: 'Smart Greenhouse System',
    description: 'An intelligent greenhouse monitoring system using AI and IoT technologies for automated climate control and plant health monitoring.',
    tags: ['AI', 'IoT', 'Python', 'Machine Learning'],
    icon: Sprout,
    status: 'Ongoing',
    gradient: 'from-emerald-500 to-teal-500',
    image: 'greenhouse',
  },
  {
    title: 'Weather Forecasting',
    description: 'Implemented SARIMA model for weather prediction using time series analysis and statistical modeling techniques.',
    tags: ['SARIMA', 'Python', 'Time Series', 'Data Analysis'],
    icon: CloudSun,
    status: 'Completed',
    gradient: 'from-blue-500 to-cyan-500',
    image: 'weather',
  },
  {
    title: 'E-Commerce Android App',
    description: 'A complete e-commerce mobile application with user authentication, product management, and payment integration.',
    tags: ['Android', 'Java', 'Firebase', 'Mobile'],
    icon: Smartphone,
    status: 'Completed',
    gradient: 'from-orange-500 to-red-500',
    image: 'ecommerce',
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4"
          >
            My Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions and creative implementations
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl glass overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Icon Header */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: hoveredIndex === index ? 1.1 : 1,
                        rotate: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                    >
                      <project.icon size={40} className="text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
                      >
                        <ExternalLink size={16} />
                        Live
                      </motion.a>
                    )}
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-20 blur-xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Srikanth28202"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass font-medium hover:bg-primary/10 transition-colors"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
