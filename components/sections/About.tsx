'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Mail, Globe, Languages, Code, Users, MessageCircle, Zap } from 'lucide-react'
import Image from 'next/image'

const personalInfo = [
  { icon: MapPin, label: 'Location', value: 'Doddaballapur, Bangalore Rural – 561203' },
  { icon: Phone, label: 'Phone', value: '+91 7019878478' },
  { icon: Mail, label: 'Email', value: 'srikanth200428@gmail.com' },
  { icon: Languages, label: 'Languages', value: 'Kannada, Telugu, English' },
]

const softSkills = [
  { icon: Zap, label: 'Problem-solving' },
  { icon: Users, label: 'Teamwork' },
  { icon: MessageCircle, label: 'Communication' },
  { icon: Code, label: 'Fast Learning' },
]

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20
    
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }
  
  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
  }
  
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="about" className="relative py-32 overflow-hidden">
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
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4"
          >
            Get To Know Me
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about building intelligent systems and innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Card with Tilt Effect */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <TiltCard className="relative">
              <div className="relative p-8 rounded-3xl glass glow">
                {/* Profile Image */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src="/SRI.jpg"
                      alt="Sri Kanth V"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-display font-bold mb-2">Sri Kanth V</h3>
                  <p className="text-primary font-medium mb-4">AI & ML Engineer</p>
                  <p className="text-muted-foreground text-sm">
                    Final-year B.E. student at SJC Institute of Technology
                  </p>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30" />
              </div>
            </TiltCard>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {/* Who I Am */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a final-year B.E. student specializing in Artificial Intelligence and Machine Learning
                at SJC Institute of Technology. With a strong foundation in programming languages like Java,
                C++, and Python, I am passionate about developing intelligent systems and innovative solutions.
              </p>
            </motion.div>

            {/* Professional Summary */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-accent" />
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                My expertise extends to full-stack development with experience in HTML, CSS, React.js,
                and modern development tools. I thrive on problem-solving challenges and enjoy working
                in collaborative environments where I can contribute to meaningful technological innovations.
              </p>
            </motion.div>

            {/* Personal Info Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-display font-semibold mb-4">Personal Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(139, 92, 246, 0.05)' }}
                    className="flex items-start gap-3 p-4 rounded-2xl glass"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-sm">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-display font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass cursor-default"
                  >
                    <skill.icon size={16} className="text-primary" />
                    <span className="text-sm font-medium">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
