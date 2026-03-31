'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Briefcase, Calendar, MapPin, ExternalLink, Award, Building2, Code2, Bot, Globe } from 'lucide-react'

const internships = [
  {
    id: 1,
    company: 'Artsy',
    role: 'AI Software Development Intern',
    duration: 'Present',
    location: 'Remote',
    description: 'Working on real-time projects including ScanSkip and Nagaraseva, focusing on full-stack development and AI-powered systems.',
    highlights: [
      { icon: Code2, text: 'Full-stack Development' },
      { icon: Bot, text: 'Multilingual Voice Agents' },
      { icon: Globe, text: 'Communication Platforms' },
    ],
    projects: [
      { name: 'ScanSkip', description: 'AI-powered scanning solution', url: 'https://scanskip.com/' },
      { name: 'Nagaraseva', description: 'Citizen service platform', url: 'https://nagaraseva.com/' },
    ],
    color: 'from-violet-500 to-purple-500',
    certificateUrl: '#',
  },
]

// Experience card with hover effects
function ExperienceCard({ 
  internship, 
  index 
}: { 
  internship: typeof internships[0]
  index: number 
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative p-8 rounded-3xl glass overflow-hidden"
        style={{
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(139, 92, 246, 0.25)' 
            : '0 10px 30px -10px rgba(0,0,0,0.2)',
        }}
      >
        {/* Mouse-following gradient glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
          }}
        />
        
        {/* Top gradient bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${internship.color}`} />
        
        <div className="relative">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              {/* Company icon */}
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.05 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${internship.color} flex items-center justify-center shadow-lg`}
              >
                <Building2 size={28} className="text-white" />
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-display font-bold text-gradient">{internship.company}</h3>
                <p className="text-lg font-medium">{internship.role}</p>
              </div>
            </div>
            
            {/* Duration badge */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10"
            >
              <Calendar size={16} className="text-primary" />
              <span className="text-sm font-medium">{internship.duration}</span>
            </motion.div>
          </div>
          
          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <MapPin size={16} />
            <span className="text-sm">{internship.location}</span>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {internship.description}
          </p>
          
          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mb-6">
            {internship.highlights.map((highlight, i) => (
              <motion.div
                key={highlight.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.15)' }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass"
              >
                <highlight.icon size={16} className="text-primary" />
                <span className="text-sm font-medium">{highlight.text}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Projects */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Projects</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {internship.projects.map((project, i) => (
                <motion.a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="group p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-1">
                    <h5 className="font-semibold text-primary group-hover:text-accent transition-colors">{project.name}</h5>
                    <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow"
            >
              <ExternalLink size={18} />
              View Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:bg-primary/10 transition-colors"
            >
              <Award size={18} />
              Certificate
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Internship() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section id="internship" className="relative py-32 overflow-hidden">
      {/* Background elements */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4"
          >
            <Briefcase size={16} />
            Work Experience
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Internship <span className="text-gradient">Experience</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world experience building AI-powered solutions and full-stack applications
          </p>
        </motion.div>
        
        {/* Experience Cards */}
        <div ref={ref} className="max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block"
            />
            
            <div className="space-y-12">
              {internships.map((internship, index) => (
                <div key={internship.id} className="relative md:pl-20">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className={`absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${internship.color} flex items-center justify-center shadow-lg hidden md:flex`}
                  >
                    <Briefcase size={24} className="text-white" />
                  </motion.div>
                  
                  <ExperienceCard internship={internship} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>
    </section>
  )
}
