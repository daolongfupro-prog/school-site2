import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TG = 'https://t.me/YOUR_BOT_HERE'

const results = [
  {
    num: '01',
    title: 'Документы, которым доверяют',
    text: 'Диплом об окончании курса + сертификат с указанием количества практических часов. Ваше социальное доказательство для клиентов, SPA-салонов и работодателей.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Навык, поставленный правильно с первого раза',
    text: 'Классический массаж как фундамент: правильная стойка, работа весом тела, понимание анатомии. То, что можно строить дальше — в любом направлении.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Готовность работать — сразу',
    text: '80% времени курса — практика на живых людях. Первые клиенты появляются ещё в процессе обучения. Один сеанс — от 400 000 сум. Три клиента в день — 6 000 000 сум в месяц без начальника и без графика.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    highlight: true,
  },
]

export default function Results() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="results" className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-navy/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            После обучения
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-navy mb-5 leading-tight"
          >
            Что вы получите через 12 занятий
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            Не «базовые знания». Не «понимание основ». Готовый навык, с которым можно работать уже в первый месяц после курса.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {results.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-2xl p-8 overflow-hidden ${
                r.highlight
                  ? 'bg-navy text-white shadow-2xl shadow-navy/30'
                  : 'bg-white border border-gray-100 hover:border-navy/15 hover:shadow-lg transition-all duration-300'
              }`}
            >
              {/* Ghost number */}
              <span
                className={`absolute -top-2 -right-2 text-[8rem] font-black leading-none select-none pointer-events-none ${
                  r.highlight ? 'text-white/5' : 'text-gray-50'
                }`}
              >
                {r.num}
              </span>

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  r.highlight ? 'bg-white/15 text-white' : 'bg-navy/8 text-navy'
                }`}
              >
                {r.icon}
              </div>

              <h3
                className={`font-bold text-xl mb-4 leading-snug relative z-10 ${
                  r.highlight ? 'text-white' : 'text-navy'
                }`}
              >
                {r.title}
              </h3>
              <p
                className={`text-[15px] leading-relaxed relative z-10 ${
                  r.highlight ? 'text-white/70' : 'text-gray-500'
                }`}
              >
                {r.text}
              </p>

              {r.highlight && (
                <div className="mt-6 relative z-10 p-4 bg-white/10 rounded-xl border border-white/15">
                  <p className="text-white font-bold text-lg">от 400 000 сум</p>
                  <p className="text-white/55 text-sm">за один сеанс</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bridge to lesson */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white rounded-2xl border border-gray-100 px-8 py-10 max-w-2xl mx-auto"
        >
          <p className="text-navy font-semibold text-xl mb-2">
            Всё это начинается с одного вечера.
          </p>
          <p className="text-gray-500 mb-8">
            Приходите на бесплатный урок — и сами решите, ваша это профессия или нет.
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
            Попробовать бесплатно — занять место на уроке
          </a>
        </motion.div>
      </div>
    </section>
  )
}
