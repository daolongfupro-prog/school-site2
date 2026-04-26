import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    name: 'Имя студента',
    age: '34 года',
    segment: 'Сменила профессию',
    text: 'Я 8 лет просидела в бухгалтерии. Пришла на открытый урок просто посмотреть — ушла с ощущением, что наконец нашла своё. Через 12 занятий взяла первых клиентов. Курс окупился за 2 недели.',
    placeholder: true,
  },
  {
    name: 'Имя студента',
    age: '28 лет',
    segment: 'Учился раньше, но бросил',
    text: 'Раньше учился по роликам в интернете — делал массаж, но всегда было страшно: вдруг что-то не так. На курсе Люции понял, что делал неправильно с самого начала. Теперь работаю уверенно.',
    placeholder: true,
  },
  {
    name: 'Имя студента',
    age: '41 год',
    segment: 'Дополнительный доход',
    text: 'Не бросала основную работу — просто добавила 3 клиента в выходные. Это плюс больше миллиона сум в месяц без графика и без начальника. Жалею только что не пришла раньше.',
    placeholder: true,
  },
]

function TestimonialCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-navy/5 hover:border-navy/10 transition-all duration-300"
    >
      {/* Segment badge */}
      <div className="inline-flex items-center gap-2 bg-navy/6 rounded-full px-3 py-1.5 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-navy/40" />
        <span className="text-navy/70 text-xs font-medium">{t.segment}</span>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed text-[15px] mb-6 italic">
        «{t.text}»
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <p className="text-navy font-semibold text-sm">{t.name}</p>
          <p className="text-gray-400 text-xs">{t.age}</p>
        </div>
        {t.placeholder && (
          <span className="ml-auto text-[10px] text-gray-300 font-medium uppercase tracking-wider">
            Заменить фото
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-navy/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Отзывы студентов
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-navy leading-tight"
          >
            Что говорят те, кто уже сделал первый шаг
          </motion.h2>
        </div>

        {/* Screenshot placeholder banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-cream border-2 border-dashed border-navy/15 rounded-2xl p-8 mb-8 text-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-navy/8 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-navy/60 font-semibold mb-1">Здесь будут скриншоты переписки</p>
          <p className="text-gray-400 text-sm">
            Добавьте реальные скриншоты из Telegram/WhatsApp с результатами студентов — это самый убедительный формат для Instagram-аудитории
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
