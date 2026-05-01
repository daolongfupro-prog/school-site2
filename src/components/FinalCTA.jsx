import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { getNextLessonDate } from '../utils/lessonDate'

const TG = 'https://t.me/YOUR_BOT_HERE'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { t } = useLanguage()
  const c = t.finalCta

  return (
    <section id="register" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/4 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 lg:px-12 text-center" ref={ref}>
        {/* Spots counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-10"
        >
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-2.5 h-2.5 rounded-full bg-red-400"
          />
          <span className="text-white/80 text-sm font-medium">
            {c.spots} <span className="text-white font-bold">{c.spotsNum}</span> · урок <span className="text-white font-bold">{getNextLessonDate()}</span>
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] xl:text-[3.2rem] font-bold text-white leading-[1.08] mb-5"
        >
          {c.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-lg lg:text-xl mb-12 max-w-xl mx-auto leading-relaxed"
        >
          {c.subtitle}
        </motion.p>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/8 border border-white/12 rounded-2xl p-6 mb-10 text-left max-w-md mx-auto"
        >
          <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">
            {c.includedLabel}
          </p>
          <div className="space-y-3">
            {c.included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/75 text-[15px] leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={TG}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-navy font-bold px-10 py-5 rounded-2xl text-lg hover:shadow-2xl hover:shadow-white/15 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
            </svg>
            {c.cta}
          </a>
          <p className="text-white/30 text-sm mt-5">{c.finePrint}</p>
        </motion.div>
      </div>
    </section>
  )
}
