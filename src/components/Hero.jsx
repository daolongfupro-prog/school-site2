import { motion } from 'framer-motion'

const TG = 'https://t.me/YOUR_BOT_HERE'

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-navy overflow-hidden flex items-center"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-12 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-20 items-center">

          {/* ── Left: copy ── */}
          <motion.div variants={stagger} initial="initial" animate="animate">

            {/* Live badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
              <span className="text-white/70 text-sm">Набор открыт · Бесплатный открытый урок</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            >
              Как освоить профессию{' '}
              <span className="text-white/90">массажиста</span>{' '}
              с доходом от{' '}
              <span
                className="relative inline-block"
                style={{ color: '#c9a45a' }}
              >
                6 000 000 сум
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6 C60 2, 140 2, 298 6"
                    stroke="#c9a45a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </span>{' '}
              — за 12 занятий
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-white/65 text-lg lg:text-xl leading-relaxed mb-10 max-w-[520px]"
            >
              Бесплатный 2-часовой тест-драйв профессии. Практика на живых моделях,
              постановка рук и пошаговый план старта — всё за один вечер.
            </motion.p>

            {/* Trust stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8 mb-10">
              {[
                { num: '22', label: 'года\nопыта' },
                { num: '99', label: 'видов\nмассажа' },
                { num: '12', label: 'занятий\nдо профессии' },
              ].map(({ num, label }) => (
                <div key={num} className="flex items-baseline gap-2.5">
                  <span className="text-4xl font-bold leading-none" style={{ color: '#c9a45a' }}>
                    {num}
                  </span>
                  <span className="text-white/50 text-sm leading-tight whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={TG}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-white text-navy font-bold px-7 py-4 rounded-2xl text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/15 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
                </svg>
                Записаться и получить руководство
                <span className="absolute inset-0 bg-gold/0 group-hover:bg-gold/8 transition-colors duration-300 rounded-2xl" />
              </a>
            </motion.div>

            <motion.p variants={fadeUp} className="text-white/35 text-sm mt-4">
              Осталось{' '}
              <span className="text-white/60 font-semibold">10 мест</span>
              {' '}· Следующий урок — скоро · Бесплатно
            </motion.p>
          </motion.div>

          {/* ── Right: photo ── */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] h-[360px] lg:w-[440px] lg:h-[440px] rounded-full border border-white/8" />
              <div className="absolute w-[300px] h-[300px] lg:w-[370px] lg:h-[370px] rounded-full border border-white/5" />
            </div>

            {/* Entrance → then float */}
            <motion.div
              initial={{ x: 70, opacity: 0, scale: 0.94 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
              >
                <div className="relative w-[280px] sm:w-[320px] lg:w-[380px] xl:w-[420px]">
                  {/* Photo */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                    <img
                      src="/images/lucia-portrait.jpg"
                      alt="Люция Камалетдинова — основатель Высшей Школы Массажа"
                      className="w-full object-cover object-top"
                      style={{ aspectRatio: '3/4' }}
                    />
                    {/* Bottom gradient with name */}
                    <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-white font-semibold text-sm">Люция Камалетдинова</p>
                      <p className="text-white/55 text-xs mt-0.5">Основатель · Преподаватель</p>
                    </div>
                  </div>

                  {/* Floating badge — years */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="absolute -right-5 top-14 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-black/20"
                  >
                    <p className="text-navy font-extrabold text-3xl leading-none">22</p>
                    <p className="text-navy/55 text-xs mt-1 font-medium">года опыта</p>
                  </motion.div>

                  {/* Floating badge — diploma */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="absolute -left-5 bottom-32 rounded-2xl px-4 py-3 shadow-xl shadow-black/30"
                    style={{ background: '#c9a45a' }}
                  >
                    <p className="text-white font-bold text-xs leading-snug">
                      Диплом<br />государственного<br />образца
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Листайте</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
