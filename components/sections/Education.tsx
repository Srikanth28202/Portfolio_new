'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, School, BookOpen, Trophy, Medal, Star } from 'lucide-react'

const educationData = [
  {
    icon: GraduationCap,
    title: 'B.E. in Artificial Intelligence & Machine Learning',
    institution: 'SJC Institute of Technology',
    duration: '2022 – 2026',
    grade: 'CGPA: 8.5',
    details: ['Machine Learning Algorithms', 'Deep Learning & Neural Networks', 'Data Science & Analytics', 'Computer Vision & NLP'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: School,
    title: '12th Standard',
    institution: 'Shree Vani PU College',
    duration: '2020 – 2022',
    grade: 'Percentage: 87%',
    details: ['Completed with distinction in Science stream'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BookOpen,
    title: '10th Standard',
    institution: 'Swamy Vivekananda English High School',
    duration: '2018 – 2020',
    grade: 'Percentage: 90.56%',
    details: ['Completed with excellent academic performance'],
    color: 'from-emerald-500 to-teal-500',
  },
]

const achievements = [
  {
    icon: Trophy,
    title: 'Consistent Academic Performance',
    description: 'Maintained excellent grades throughout academic career with CGPA of 8.5',
  },
  {
    icon: Medal,
    title: 'Technical Excellence',
    description: 'Demonstrated strong technical skills in programming and problem-solving',
  },
  {
    icon: Star,
    title: 'Project Leadership',
    description: 'Successfully led and completed multiple technical projects',
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
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
            Academic Journey
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic background and milestones
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div ref={ref} className="relative max-w-3xl mx-auto mb-20">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg shadow-primary/20`}
                  >
                    <item.icon size={28} className="text-white" />
                  </motion.div>
                </div>
                
                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex-1 p-6 rounded-2xl glass group"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-display font-semibold">{item.title}</h3>
                    <span className={`md:hidden w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon size={20} className="text-white" />
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-1">{item.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span>{item.duration}</span>
                    <span className="text-accent font-medium">{item.grade}</span>
                  </div>
                  <ul className="space-y-1">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-display font-semibold mb-8">Academic Achievements</h3>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 rounded-2xl glass text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center"
              >
                <achievement.icon size={28} className="text-white" />
              </motion.div>
              <h4 className="text-lg font-display font-semibold mb-2 group-hover:text-gradient transition-all">
                {achievement.title}
              </h4>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
