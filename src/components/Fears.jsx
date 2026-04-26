import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fears = [
  {
    num: '01',
    title: 'Нет медицинского образования',
    answer:
      'Для оздоровительного массажа не нужна степень врача. Нужна точная базовая анатомия — понять, где крепится мышца, чтобы работать с причиной боли, а не просто гладить кожу. Этому учат с первого занятия.',
  },
  {
    num: '02',
    title: 'Боюсь навредить клиенту',
    answer:
      'Страх навредить — признак ответственности, не слабости. Именно поэтому методика строится на анатомическом понимании: вы не заучиваете движения механически, а понимаете, что делаете и почему. Это делает вас безопасным мастером с первых сеансов.',
  },
  {
    num: '03',
    title: 'Нет физической силы',
    answer:
      'Профессиональный массаж — это не сила рук. Это эргономика тела. Грамотный мастер работает весом корпуса, а не пальцами. После пяти сеансов вы не устаёте — в отличие от самоучек, которые изнашивают суставы за год.',
  },
  {
    num: '04',
    title: 'Уже пробовал(а), но бросил(а)',
    answer:
      'Большинство бросают не из-за отсутствия способностей — а из-за неправильной базы. Без анатомии и постановки корпуса обучение превращается в заучивание движений. Мы строим понимание, которое остаётся с вами навсегда.',
  },
]

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
      {/* Ghost number */}
      <span className="absolute top-2 right-5 text-[7rem] font-black text-gray-50 group-hover:text-navy/5 transition-colors duration-500 select-none leading-none pointer-events-none">
        {fear.num}
      </span>

      {/* Left accent bar */}
      <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-navy rounded-r-full" />

      <p className="text-navy/40 text-xs font-mono tracking-widest mb-3">{fear.num}</p>
      <h3 className="text-xl font-bold text-navy mb-4 pr-16 relative z-10 leading-snug">
        «{fear.title}»
      </h3>
      <p className="text-gray-500 leading-relaxed relative z-10 text-[15px]">{fear.answer}</p>
    </motion.div>
  )
}

export default function Fears() {
  const titleRef = useRef(null)
  const inView = useInView(titleRef, { once: true })

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
            Понимаем вас
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-navy max-w-2xl mx-auto leading-tight text-balance"
          >
            Скорее всего, прямо сейчас у вас в голове один из этих вопросов
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fears.map((fear, i) => (
            <FearCard key={fear.num} fear={fear} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
