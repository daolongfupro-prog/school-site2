import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TG = 'https://t.me/YOUR_BOT_HERE'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-12 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/logo-white.png"
            alt="Высшая Школа Массажа"
            className="h-9 w-auto"
          />
          <div className="hidden sm:block leading-none">
            <p className="text-white font-semibold text-sm group-hover:text-white/90 transition-colors">
              Высшая Школа Массажа
            </p>
            <p className="text-white/50 text-xs mt-0.5">
              Обучение массажу · Ташкент
            </p>
          </div>
        </a>

        <a
          href={TG}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-navy border border-white/25 hover:border-white rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
          </svg>
          <span className="hidden sm:inline">Занять место на уроке</span>
          <span className="sm:hidden">Записаться</span>
        </a>
      </div>
    </motion.header>
  )
}
