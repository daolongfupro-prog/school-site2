import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const principles = [
  {
    num: '1',
    title: 'Практика с первого занятия — на живых людях',
    text: 'Никаких манекенов. Никаких видеороликов. С первого дня вы работаете руками на реальных моделях с разным тонусом, разной анатомией, разными запросами. Именно так нарабатывается настоящее чувство тела — то, за что клиенты возвращаются снова.',
  },
  {
    num: '2',
    title: 'Анатомия как язык, а не как предмет для зубрёжки',
    text: 'Большинство курсов дают схемы «делай вот так». Мы объясняем, почему. Вы понимаете, где крепится мышца, как она реагирует на давление и в каком направлении нужно работать. Это понимание не забывается — и оно защищает вашего клиента от ошибок.',
  },
  {
    num: '3',
    title: 'Постановка корпуса — ваш профессиональный ресурс на годы',
    text: 'Самоучки работают пальцами и запястьями. Через год — боли в суставах, через два — уход из профессии. Мы с первого занятия ставим правильную стойку: вы работаете весом тела. Пять сеансов подряд — и вы не устали.',
  },
]

export default function UniqueMethod() {
  const titleRef = useRef(null)
  const inView = useInView(titleRef, { once: true })

  return (
    <section id="method" className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative shapes */}
            <div className="absolute -top-8 -left-8 w-28 h-28 bg-navy/8 rounded-3xl rotate-12 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl -rotate-6 pointer-events-none" style={{ background: 'rgba(201,164,90,0.25)' }} />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/15">
              <img
                src="/images/lucia-flipchart.jpg"
                alt="Люция Камалетдинова объясняет анатомию на флипчарте"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/5' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-5 left-8 bg-white rounded-2xl px-5 py-4 shadow-xl shadow-navy/10 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-navy text-sm">80% практики</p>
                <p className="text-gray-400 text-xs">от всего времени курса</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div ref={titleRef} className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-navy/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              Наш подход
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-navy mb-5 leading-tight text-balance"
            >
              Почему одни массажисты зарабатывают годами, а другие бросают через месяц
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg mb-12 leading-relaxed"
            >
              Разница — в фундаменте. Наша методика строится на трёх принципах, которых нет в стандартных курсах.
            </motion.p>

            <div className="space-y-8">
              {principles.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-11 h-11 bg-navy rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-navy/20">
                    {p.num}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-navy text-[17px] mb-2 leading-snug">{p.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
