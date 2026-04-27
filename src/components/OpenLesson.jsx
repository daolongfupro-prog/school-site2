import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const TG = 'https://t.me/YOUR_BOT_HERE'

export default function OpenLesson() {
  const titleRef = useRef(null)
  const inView = useInView(titleRef, { once: true })
  const { t } = useLanguage()
  const l = t.lesson

  return (
    <section id="lesson" className="py-24 lg:py-32 bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-12">
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            {l.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.6rem] font-bold text-white mb-5 leading-tight"
          >
            {l.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed"
          >
            {l.subtitle}
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-14">
          {l.schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex gap-5 mb-5 p-6 rounded-2xl transition-all duration-300 ${
                i === 1
                  ? 'bg-white shadow-2xl shadow-black/20'
                  : 'bg-white/8 border border-white/10'
              }`}
            >
              <div
                className={`flex-shrink-0 self-start rounded-xl px-3 py-2 text-center min-w-[68px] ${
                  i === 1 ? 'bg-navy text-white' : 'bg-white/10 text-white/70'
                }`}
              >
                <p className="font-bold text-lg leading-none text-white">{item.time}</p>
                <p className={`text-[10px] mt-0.5 ${i === 1 ? 'text-white/70' : 'text-white/50'}`}>
                  {l.minuteLabel}
                </p>
              </div>
              <div>
                <p className={`font-bold text-lg mb-1.5 ${i === 1 ? 'text-navy' : 'text-white'}`}>
                  {item.title}
                </p>
                <p className={`text-[15px] leading-relaxed ${i === 1 ? 'text-navy/60' : 'text-white/55'}`}>
                  {item.text}
                </p>
              </div>
              {i < l.schedule.length - 1 && (
                <div className="absolute -bottom-3 left-[46px] w-px h-6 bg-white/15" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Scarcity */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/8 border border-white/15 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,164,90,0.2)' }}>
              <svg className="w-5 h-5" style={{ color: '#c9a45a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">
                {l.roomTitle}{' '}
                <span style={{ color: '#c9a45a' }}>{l.roomSpots}</span>
              </p>
              <p className="text-white/50 text-sm mt-0.5">{l.roomSub}</p>
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <p className="text-white/50 text-xs mb-1">{l.timesLabel}</p>
            <p className="text-white font-semibold text-sm">{l.timesValue}</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href={TG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-navy font-bold px-8 py-4 rounded-2xl text-base hover:shadow-2xl hover:shadow-white/15 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
            </svg>
            {l.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
