import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TG = 'https://t.me/YOUR_BOT_HERE'

const schedule = [
  {
    time: '30 мин',
    title: 'Теория без воды',
    text: 'Разбираем ключевую анатомию, отвечаем на ваши вопросы, разрушаем главные мифы о профессии',
    accent: false,
  },
  {
    time: '60 мин',
    title: 'Практика на живой модели',
    text: 'Видите профессиональные приёмы в действии, пробуете сами, получаете обратную связь от Люции',
    accent: true,
  },
  {
    time: '30 мин',
    title: 'Ваш план старта',
    text: 'Разбираем, как выглядит путь от нуля до первых клиентов — и что делать сразу после урока',
    accent: false,
  },
]

export default function OpenLesson() {
  const titleRef = useRef(null)
  const inView = useInView(titleRef, { once: true })

  return (
    <section id="lesson" className="py-24 lg:py-32 bg-navy overflow-hidden">
      {/* Subtle background dots */}
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
            Открытый урок
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
          >
            Что происходит за 2 часа
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Это не лекция и не вебинар. Это живая встреча в зале, где вы впервые почувствуете профессию руками.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-14">
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex gap-5 mb-5 p-6 rounded-2xl transition-all duration-300 ${
                item.accent
                  ? 'bg-white shadow-2xl shadow-black/20'
                  : 'bg-white/8 border border-white/10'
              }`}
            >
              {/* Time pill */}
              <div
                className={`flex-shrink-0 self-start rounded-xl px-3 py-2 text-center min-w-[68px] ${
                  item.accent ? 'bg-navy text-white' : 'bg-white/10 text-white/70'
                }`}
              >
                <p className={`font-bold text-lg leading-none ${item.accent ? 'text-white' : 'text-white'}`}>
                  {item.time.split(' ')[0]}
                </p>
                <p className={`text-[10px] mt-0.5 ${item.accent ? 'text-white/70' : 'text-white/50'}`}>
                  минут
                </p>
              </div>

              {/* Content */}
              <div>
                <p
                  className={`font-bold text-lg mb-1.5 ${
                    item.accent ? 'text-navy' : 'text-white'
                  }`}
                >
                  {item.title}
                </p>
                <p className={`text-[15px] leading-relaxed ${item.accent ? 'text-navy/60' : 'text-white/55'}`}>
                  {item.text}
                </p>
              </div>

              {/* Accent dot on timeline */}
              {i < schedule.length - 1 && (
                <div className="absolute -bottom-3 left-[46px] w-px h-6 bg-white/15" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Scarcity + schedule */}
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
              <p className="text-white font-semibold text-sm">В зале всего <span style={{ color: '#c9a45a' }}>10 мест</span></p>
              <p className="text-white/50 text-sm mt-0.5">Это не маркетинговый приём — маленькая группа позволяет Люции поработать с каждым лично</p>
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <p className="text-white/50 text-xs mb-1">2 раза в месяц</p>
            <p className="text-white font-semibold text-sm">10:00 и 16:00</p>
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
            Занять место на ближайшем уроке
          </a>
        </motion.div>
      </div>
    </section>
  )
}
