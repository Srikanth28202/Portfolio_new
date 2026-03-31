'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Download, ChevronDown, Sparkles } from 'lucide-react'
import Image from 'next/image'

// Tech stack icons for the floating elements
const techStack = [
  { name: 'React', color: '#61DAFB', delay: 0 },
  { name: 'Python', color: '#3776AB', delay: 0.2 },
  { name: 'AI', color: '#8B5CF6', delay: 0.4 },
  { name: 'Node', color: '#339933', delay: 0.6 },
]

// Staggered text animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// Floating blob component
function FloatingBlob({ 
  className, 
  duration = 8, 
  delay = 0 
}: { 
  className: string
  duration?: number
  delay?: number 
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{
        x: [0, 100, 0],
        y: [0, -50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  )
}

// Animated tech badge
function TechBadge({ 
  tech, 
  index 
}: { 
  tech: typeof techStack[0]
  index: number 
}) {
  const positions = [
    { top: '10%', right: '5%' },
    { top: '30%', right: '-5%' },
    { bottom: '30%', right: '0%' },
    { bottom: '15%', right: '15%' },
  ]
  
  return (
    <motion.div
      className="absolute px-4 py-2 rounded-full glass font-medium text-sm"
      style={{
        ...positions[index],
        backgroundColor: `${tech.color}15`,
        borderColor: `${tech.color}30`,
      }}
      initial={{ opacity: 0, scale: 0, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ 
        delay: 1.2 + tech.delay, 
        duration: 0.6,
        type: 'spring',
        stiffness: 200,
      }}
      whileHover={{ 
        scale: 1.1, 
        boxShadow: `0 0 30px ${tech.color}40`,
      }}
    >
      <span style={{ color: tech.color }}>{tech.name}</span>
    </motion.div>
  )
}

// Premium button with gradient shift
function PremiumButton({ 
  children, 
  variant = 'primary', 
  onClick,
  icon: Icon,
}: { 
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  icon?: React.ElementType
}) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`relative px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 overflow-hidden transition-all duration-300 ${
        variant === 'primary'
          ? 'text-white shadow-xl'
          : 'glass hover:bg-white/5'
      }`}
      style={{
        boxShadow: variant === 'primary' 
          ? '0 10px 40px -10px rgba(139, 92, 246, 0.5)' 
          : '0 4px 20px -5px rgba(0,0,0,0.1)',
      }}
    >
      {/* Animated gradient background */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600"
          animate={{
            backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : ['0% 50%', '0% 50%'],
          }}
          transition={{ duration: 0.6 }}
          style={{ backgroundSize: '200% 200%' }}
        />
      )}
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6 }}
      />
      
      <span className="relative z-10 flex items-center gap-2">
        {Icon && <Icon size={18} />}
        {children}
      </span>
    </motion.button>
  )
}

// Social icon with cursor glow
function SocialIcon({ 
  href, 
  icon: Icon, 
  label,
  delay 
}: { 
  href: string
  icon: React.ElementType
  label: string
  delay: number
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8 + delay, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.15, y: -4 }}
      whileTap={{ scale: 0.9 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-14 h-14 rounded-2xl glass flex items-center justify-center overflow-hidden group"
    >
      {/* Cursor glow effect */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-primary/30 blur-xl pointer-events-none"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      
      <Icon 
        size={22} 
        className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" 
      />
    </motion.a>
  )
}

// Animated scroll indicator
function ScrollIndicator({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.6 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group cursor-pointer"
    >
      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
        Scroll to explore
      </span>
      <div className="relative w-7 h-12 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/50 transition-colors p-1">
        <motion.div
          className="w-1.5 h-3 rounded-full bg-primary/60 mx-auto"
          animate={{ y: [0, 16, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: 'easeInOut',
          }}
        />
      </div>
      <motion.div
        animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
      </motion.div>
    </motion.button>
  )
}

// Glowing avatar with ring
function GlowingAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5, type: 'spring' }}
      className="relative"
    >
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(139, 92, 246, 0.4), rgba(6, 182, 212, 0.4), transparent)',
          padding: '3px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full bg-background" />
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(6, 182, 212, 0.4))',
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      {/* Avatar container with float animation */}
      <motion.div
        className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="./SRI.jpg"
          alt="Sri Kanth V"
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-background">
        {/* Floating blobs */}
        <FloatingBlob 
          className="w-[600px] h-[600px] bg-violet-600/20 -top-40 -left-40" 
          duration={10}
        />
        <FloatingBlob 
          className="w-[500px] h-[500px] bg-cyan-600/20 top-1/2 -right-40" 
          duration={12}
          delay={2}
        />
        <FloatingBlob 
          className="w-[400px] h-[400px] bg-purple-600/20 bottom-20 left-1/3" 
          duration={15}
          delay={4}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants}>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 cursor-default"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)' }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Sparkles size={14} className="text-primary" />
                <span className="text-sm font-medium">Available for opportunities</span>
              </motion.div>
            </motion.div>

            {/* Greeting */}
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-2"
            >
              Hello, I'm
            </motion.p>

            {/* Main Name - Character by character animation */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              {'Sri Kanth V'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                  className={char === ' ' ? '' : 'inline-block text-gradient'}
                  style={{ marginRight: char === ' ' ? '0.3em' : '0' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Role */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                className="text-2xl sm:text-3xl font-light"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                AI & ML Engineer
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Final-year B.E. student in Artificial Intelligence and Machine Learning,
              passionate about building intelligent systems and innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <PremiumButton onClick={() => scrollToSection('#projects')}>
                View Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </PremiumButton>
              
              <PremiumButton 
                variant="secondary" 
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
              </PremiumButton>
              
              <PremiumButton 
                variant="secondary"
                icon={Download}
                onClick={() => window.open('./1SJ22CI054.pdf', '_blank')}
              >
                Resume
              </PremiumButton>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <SocialIcon 
                href="https://github.com/Srikanth28202" 
                icon={Github} 
                label="GitHub"
                delay={0}
              />
              <SocialIcon 
                href="https://www.linkedin.com/in/sri-kanth-v-07a6a7269" 
                icon={Linkedin} 
                label="LinkedIn"
                delay={0.1}
              />
              <SocialIcon 
                href="mailto:srikanth200428@gmail.com" 
                icon={Mail} 
                label="Email"
                delay={0.2}
              />
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <GlowingAvatar />
              
              {/* Floating tech badges */}
              {techStack.map((tech, index) => (
                <TechBadge key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator onClick={() => scrollToSection('#about')} />
      </motion.div>
    </section>
  )
}
