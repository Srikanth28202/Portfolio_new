'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-display font-bold text-gradient">SK</span>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Sri Kanth V. All rights reserved.
            </p>
          </div>
          
          {/* Made with love */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> using Next.js & Tailwind
          </motion.p>
          
          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm font-medium hover:bg-primary/10 transition-colors"
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
