import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function FearCard({ fear, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-navy/20 hover:shadow-xl hover:shadow-navy/5 transition-all duration-400 overflow-hidden"
    >
      <span className="absolute top-2 right-5 text-[7rem] font-black text-gray-50 group-hover:text-navy/5 transition-colors duration-500 select-none leading-none pointer-events-none">
        {fear.num}
      </span>
      <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-navy rounded-r-full" />
      <h3 className="text-xl font-bold text-navy mb-4 pr-16 relative z-10 leading-snug">
        «{fear.title}»
      </h3>
      <p className="text-gray-500 leading-relaxed relative z-10 text-[15px]">
        {fear.lead && <strong className="font-semibold text-navy/75">{fear.lead} </strong>}
        {fear.answer}
      </p>
    </motion.div>
  )
}

export default function Fears() {
  const titleRef = useRef(null)
  const inView = useInView(titleRef, { once: true })
  const { t } = useLanguage()
  const f = t.fears

  return (
    <section id="fears" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-navy/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            {f.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.6rem] font-bold text-navy leading-tight"
          >
            <span className="sm:hidden whitespace-pre-line">{'4 главных страха\nперед стартом\n— и почему они\nлишь иллюзия'}</span>
            <span className="hidden sm:inline whitespace-pre-line">{f.title}</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {f.items.map((fear, i) => (
            <FearCard key={fear.num} fear={fear} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
