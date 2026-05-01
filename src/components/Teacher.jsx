import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const STAT_NUMS = ['23', '99', '5']

export default function Teacher() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLanguage()
  const tc = t.teacher

  const stats = STAT_NUMS.map((num, i) => ({ num, label: tc.statsCards[i] }))

  return (
    <section id="teacher" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-center">

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div
              className="absolute -inset-6 rounded-3xl pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(25,38,92,0.06) 0%, transparent 60%)' }}
            />

            {/* Portrait photo */}
            <div className="relative shadow-2xl shadow-navy/12 rounded-3xl">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/images/lucia-portrait.jpg"
                  alt={tc.name}
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: '3/4', maxHeight: 'clamp(320px, 50vh, 580px)' }}
                />
              </div>
              {/* Badge: Собственная методика обучения — вверху */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.4 }}
                className="absolute right-0 lg:-right-5 top-8 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-navy/10"
              >
                <p className="text-navy font-bold text-xs max-w-[145px] leading-snug whitespace-pre-line">{stats[2].label}</p>
              </motion.div>
            </div>

            {/* Diplomas photo */}
            <div className="relative mt-4 shadow-lg shadow-navy/10 rounded-2xl">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/photo_2024-11-17_19-06-42.jpg"
                  alt="Дипломы и награды"
                  className="w-full object-cover"
                />
              </div>
              {/* Badge: Массажист международного уровня — справа, выходит за фото */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.4 }}
                className="absolute right-0 lg:-right-5 bottom-5 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-navy/10"
              >
                <p className="text-navy font-bold text-xs max-w-[110px] leading-snug whitespace-pre-line">{stats[0].label}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text column */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-navy/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              {tc.tag}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.6rem] font-bold text-navy mb-2 leading-tight"
            >
              {tc.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-navy/50 text-lg mb-8"
            >
              {tc.subtitle}
            </motion.p>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-3 mb-10"
            >
              {tc.credentials.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{item}</p>
                </div>
              ))}
            </motion.div>

            {/* Trust stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-5 sm:gap-8 mb-10"
            >
              {STAT_NUMS.map((num, i) => (
                <div key={num} className="flex items-baseline gap-1.5 sm:gap-2.5">
                  <span className="text-2xl sm:text-4xl font-bold leading-none" style={{ color: '#19265c' }}>
                    {num}
                  </span>
                  <span className="text-navy/50 text-xs sm:text-sm leading-tight whitespace-pre-line">
                    {tc.statsLabels[i]}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative bg-cream rounded-2xl p-7 overflow-hidden"
            >
              <span className="absolute -top-2 -left-1 text-[120px] font-black leading-none text-navy/8 select-none pointer-events-none">
                "
              </span>
              <p className="text-navy/75 leading-relaxed text-[15px] italic relative z-10 pt-10">
                {tc.quote1}
              </p>
              <p className="text-navy/75 leading-relaxed text-[15px] italic relative z-10 mt-4">
                {tc.quote2}
              </p>
              <p className="mt-5 text-navy font-semibold text-sm relative z-10">{tc.quoteName}</p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
