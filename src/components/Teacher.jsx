import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { num: '22', label: 'года в профессии' },
  { num: '99', label: 'видов массажа' },
  { num: '100%', label: 'практики уже на 1-м занятии' },
]

export default function Teacher() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

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
            {/* Background decoration */}
            <div
              className="absolute -inset-6 rounded-3xl pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(25,38,92,0.06) 0%, transparent 60%)' }}
            />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/12">
              <img
                src="/images/lucia-portrait.jpg"
                alt="Люция Камалетдинова — практикующий мастер и преподаватель"
                className="w-full object-cover object-top"
                style={{ aspectRatio: '3/4', maxHeight: '580px' }}
              />
            </div>

            {/* Stat cards */}
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                className={`absolute bg-white rounded-2xl px-4 py-3 shadow-xl shadow-navy/10 ${
                  i === 0 ? '-right-5 top-10' : i === 1 ? '-left-5 top-1/2 -translate-y-1/2' : '-right-5 bottom-20'
                }`}
              >
                <p className="font-extrabold text-navy text-2xl leading-none">{s.num}</p>
                <p className="text-gray-400 text-xs mt-1 max-w-[90px] leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Text column */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-navy/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              Преподаватель
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-navy mb-2 leading-tight"
            >
              Люция Камалетдинова
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-navy/50 text-lg mb-8"
            >
              Практикующий мастер и основатель Высшей Школы Массажа в Ташкенте
            </motion.p>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-3 mb-10"
            >
              {[
                '22 года в профессии',
                'За карьеру освоила и систематизировала 99 видов массажа — это личный опыт, а не программа одного курса',
                'Авторская методика: синтез классики, медицинской анатомии и эргономики',
                'Диплом государственного образца для каждого выпускника',
              ].map((item) => (
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

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative bg-cream rounded-2xl p-7 overflow-hidden"
            >
              {/* Large quote mark */}
              <span className="absolute -top-2 -left-1 text-[120px] font-black leading-none text-navy/8 select-none pointer-events-none">
                "
              </span>
              <p className="text-navy/75 leading-relaxed text-[15px] italic relative z-10">
                Когда я начинала 22 года назад, не было ни нормальных курсов, ни системы. Я училась методом проб и ошибок — и дорогой ценой поняла, что неправильная постановка рук калечит мастера быстрее, чем любой клиент.
              </p>
              <p className="text-navy/75 leading-relaxed text-[15px] italic relative z-10 mt-4">
                Именно поэтому я построила школу, которой не было, когда она была нужна мне: где учат не просто движениям, а пониманию. Каждый студент, который выходит из моей школы — это мастер, за которого мне не стыдно.
              </p>
              <p className="mt-5 text-navy font-semibold text-sm relative z-10">— Люция Камалетдинова</p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
