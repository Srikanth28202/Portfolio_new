'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Network, Globe, Cloud, Code, Database, Brain, ExternalLink } from 'lucide-react'

const certificates = [
  {
    title: 'Junior Cybersecurity Analyst',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    description: 'Comprehensive cybersecurity analyst training covering threat analysis, incident response, security tools, and defensive strategies.',
    icon: Shield,
    gradient: 'from-red-500 to-orange-500',
  },
  {
    title: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    description: 'Completed comprehensive training on Cisco Packet Tracer fundamentals and network simulation.',
    icon: Network,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Exploring Networking with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    description: 'Advanced networking concepts and practical implementation using Cisco Packet Tracer.',
    icon: Globe,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    description: 'Essential cybersecurity concepts, threat detection, and security best practices.',
    icon: Shield,
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Introduction to Cloud Computing',
    issuer: 'Infosys Springboard',
    year: '2025',
    description: 'Cloud computing concepts, services, deployment strategies, and architecture.',
    icon: Cloud,
    gradient: 'from-sky-500 to-blue-500',
  },
  {
    title: 'Python Essentials 1 & 2',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    description: 'Comprehensive Python programming from fundamentals to advanced OOP concepts.',
    icon: Code,
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'MongoDB Tutorial',
    issuer: 'Great Learning',
    year: '2024',
    description: 'NoSQL concepts, document-based data modeling, CRUD operations, and administration.',
    icon: Database,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'AI Fundamentals',
    issuer: 'Great Learning',
    year: '2024',
    description: 'Fundamental AI concepts, algorithms, neural networks, and practical applications.',
    icon: Brain,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Machine Learning Fundamentals',
    issuer: 'Infosys Springboard',
    year: '2024',
    description: 'Advanced ML concepts including deep learning, neural networks, and model evaluation.',
    icon: Brain,
    gradient: 'from-indigo-500 to-violet-500',
  },
]

export function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section id="certificates" className="relative py-32 overflow-hidden">
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
            Professional Development
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Certifications & <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and skill development
          </p>
        </motion.div>
        
        {/* Certificates Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl glass overflow-hidden">
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient}`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${cert.gradient} flex items-center justify-center mb-4`}>
                  <cert.icon size={24} className="text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-gradient transition-all">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {cert.description}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.gradient} text-white`}>
                    {cert.year}
                  </span>
                </div>
                
                {/* Hover glow */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
