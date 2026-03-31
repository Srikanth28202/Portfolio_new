import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Sri Kanth V | AI & ML Engineer',
  description: 'Portfolio of Sri Kanth V, AI & ML Engineer. Projects in AI, ML, IoT, Android, and more.',
  keywords: ['AI', 'Machine Learning', 'Full Stack Developer', 'Python', 'React', 'Next.js'],
  authors: [{ name: 'Sri Kanth V' }],
  openGraph: {
    title: 'Sri Kanth V - AI & ML Engineer',
    description: 'Portfolio of Sri Kanth V, AI & ML Engineer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
