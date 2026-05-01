import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const TG = 'https://t.me/YOUR_BOT_HERE'

function HighlightMoney({ text }) {
  const parts = text.split(/(\d[\d\s]*000\s+сум)/)
  return (
    <>
      {parts.map((part, i) =>
        /\d[\d\s]*000\s+сум/.test(part)
          ? <strong key={i} style={{ color: '#c9a45a' }} className="font-black">{part}</strong>
          : part
      )}
    </>
  )
}

const icons = [
  <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
]

export default function Results() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const { t } = useLanguage()
  const r = t.results

  return (
    <section id="results" className="py-20 lg:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-navy/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            {r.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.6rem] font-bold text-navy mb-5 leading-tight"
          >
            {r.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            {r.subtitle}
          </motion.p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {r.items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-2xl p-8 overflow-hidden ${
                item.highlight
                  ? 'bg-navy text-white shadow-2xl shadow-navy/30'
                  : 'bg-white border border-gray-100 hover:border-navy/15 hover:shadow-lg transition-all duration-300'
              }`}
            >
              <span
                className={`absolute -top-2 -right-2 text-[8rem] font-black leading-none select-none pointer-events-none ${
                  item.highlight ? 'text-white/5' : 'text-gray-50'
                }`}
              >
                {item.num}
              </span>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  item.highlight ? 'bg-white/15 text-white' : 'bg-navy/8 text-navy'
                }`}
              >
                {icons[i]}
              </div>
              <h3 className={`font-bold text-xl mb-4 leading-snug relative z-10 ${item.highlight ? 'text-white' : 'text-navy'}`}>
                {item.title}
              </h3>
              <p className={`text-[15px] leading-relaxed relative z-10 ${item.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                {item.highlight ? <HighlightMoney text={item.text} /> : item.text}
              </p>
              {item.subtext && (
                <p className={`mt-3 text-[14px] font-semibold leading-snug relative z-10 ${item.highlight ? 'text-white/90' : 'text-navy/75'}`}>
                  {item.subtext}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Documents + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white border border-gray-100 overflow-hidden shadow-sm"
        >
          {/* Documents visual */}
          <div className="relative bg-gradient-to-b from-navy/5 to-transparent pt-8 pb-2 flex justify-center items-end min-h-[180px] sm:min-h-[230px]">
            <div className="relative flex items-end justify-center">
              {/* Certificate – landscape, behind, leaning left */}
              <div
                className="relative z-10 drop-shadow-xl"
                style={{ transform: 'rotate(-4deg) translate(-12px, 10px)' }}
              >
                <img
                  src="/images/Sertificate.png"
                  alt="Сертификат"
                  className="h-28 sm:h-36 w-auto rounded-xl"
                />
              </div>
              {/* Diploma – portrait, in front, slight right lean */}
              <div
                className="relative z-20 drop-shadow-2xl"
                style={{ transform: 'rotate(5deg) translate(8px, 0px)' }}
              >
                <img
                  src="/images/Diplom.png"
                  alt="Диплом"
                  className="h-36 sm:h-44 w-auto rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Text + button */}
          <div className="text-center px-8 py-8">
            <p className="text-navy font-bold text-xl sm:text-[1.45rem] leading-snug mb-8 max-w-md mx-auto">
              Сделайте первый шаг к доходу в 8&nbsp;000&nbsp;000 сум - запишитесь на открытый урок
            </p>
            <a
              href={TG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-navy-light hover:shadow-xl hover:shadow-navy/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
              </svg>
              {r.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
