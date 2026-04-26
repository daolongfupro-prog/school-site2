import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Можно ли прийти совсем без опыта и без медицинского образования?',
    a: 'Да. Именно для таких людей создан этот курс. Медицинское образование не нужно — нужны желание и готовность практиковать. Всему остальному научим с нуля.',
  },
  {
    q: 'В чём приходить на открытый урок?',
    a: 'В удобной одежде, в которой комфортно двигаться. Сменная обувь — по желанию. Всё остальное (масло, полотенца, кушетки) предоставляем мы.',
  },
  {
    q: 'Нужно ли брать с собой масло или инструменты?',
    a: 'Ничего брать не нужно. На открытом уроке все материалы предоставляет школа. На полный курс — также всё включено.',
  },
  {
    q: 'Какой возраст подходит для обучения?',
    a: 'Ограничений нет. На курсе учились люди от 20 до 55 лет. Главное — физическая готовность работать руками и желание освоить профессию.',
  },
  {
    q: 'Сколько стоит полный курс?',
    a: 'Стоимость и форматы обучения разбираем на открытом уроке — там же отвечаем на все вопросы лично. Запишитесь на урок, чтобы получить актуальную информацию.',
  },
  {
    q: 'Выдают ли официальные документы?',
    a: 'Да. По окончании курса вы получаете диплом и сертификат с указанием количества практических часов.',
  },
  {
    q: 'Где находится школа?',
    a: 'Ташкент. Точный адрес и ориентир сообщаем при регистрации.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`border-b border-white/10 last:border-0`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-white font-medium text-[17px] leading-snug group-hover:text-white/90 transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-white/60 leading-relaxed text-[15px] pr-12">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="faq" className="py-24 lg:py-32 bg-navy-dark" style={{ background: '#0f1835' }}>
      <div className="max-w-3xl mx-auto px-5 lg:px-12">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Вопросы и ответы
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Часто задают эти вопросы
          </motion.h2>
        </div>

        <div className="divide-y divide-white/10">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
