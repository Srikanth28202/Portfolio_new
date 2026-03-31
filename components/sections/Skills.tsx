'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Code2, Palette, Wrench, Brain, Sparkles, Zap } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Java', level: 85, color: 'from-orange-500 to-red-500' },
      { name: 'C++', level: 90, color: 'from-blue-500 to-cyan-500' },
      { name: 'Python', level: 70, color: 'from-yellow-500 to-green-500' },
    ],
  },
  {
    title: 'Web Development',
    icon: Palette,
    skills: [
      { name: 'HTML/CSS', level: 85, color: 'from-orange-400 to-red-400' },
      { name: 'React.js', level: 70, color: 'from-cyan-400 to-blue-400' },
      { name: 'Next.js', level: 65, color: 'from-gray-600 to-gray-800' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 80, color: 'from-orange-600 to-red-600' },
      { name: 'VS Code', level: 90, color: 'from-blue-600 to-indigo-600' },
      { name: 'Eclipse', level: 90, color: 'from-purple-600 to-indigo-600' },
    ],
  },
]

const softSkills = [
  { name: 'Problem-solving', icon: Brain, color: 'from-violet-500 to-purple-500' },
  { name: 'Teamwork', icon: Sparkles, color: 'from-pink-500 to-rose-500' },
  { name: 'Communication', icon: Zap, color: 'from-amber-500 to-orange-500' },
  { name: 'Fast Learning', icon: Brain, color: 'from-emerald-500 to-teal-500' },
]

function ProgressBar({ skill, index }: { skill: { name: string; level: number; color: string }; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(skill.level), index * 150)
      return () => clearTimeout(timer)
    }
  }, [isInView, skill.level, index])
  
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="text-sm text-muted-foreground font-mono"
        >
          {width}%
        </motion.span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: index * 0.2 }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            What I Do
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
        
        {/* Skills Grid */}
        <div ref={ref} className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-3xl glass group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <category.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar key={skill.name} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-display font-semibold mb-8">Soft Skills</h3>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative px-6 py-4 rounded-2xl glass overflow-hidden"
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />
              
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                  <skill.icon size={20} className="text-primary" />
                </div>
                <span className="font-medium">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
