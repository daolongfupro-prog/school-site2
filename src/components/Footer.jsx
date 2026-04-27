import { useLanguage } from '../context/LanguageContext'

const TG = 'https://t.me/YOUR_BOT_HERE'
const INSTAGRAM = 'https://instagram.com/YOUR_ACCOUNT'
export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer style={{ background: '#0f1835' }} className="text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-white.png"
                alt={f.brandName}
                className="h-24 w-auto"
              />
              <div className="leading-none">
                <p className="text-white font-semibold text-sm">{t.header.tagline1}</p>
                <p className="text-white/50 text-xs mt-0.5">{t.header.tagline2}</p>
              </div>
            </div>
          </div>

          {/* Contacts + Map */}
          <div className="flex flex-col">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5">{f.contactsLabel}</p>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white/55 text-sm">{f.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white/30 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
                </svg>
                <a href={TG} target="_blank" rel="noopener noreferrer" className="text-white/55 text-sm hover:text-white transition-colors">
                  {f.tgLink}
                </a>
              </div>
            </div>
            {/* Map stretches to fill the rest of the column */}
            <div className="flex-1 rounded-2xl overflow-hidden" style={{ minHeight: '140px' }}>
              <iframe
                title="Карта"
                src="https://maps.google.com/maps?q=Ташкент+Яккасарайский+район+улица+Бобура+69&output=embed&hl=ru&z=16"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '140px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Social + Yandex Go */}
          <div className="flex flex-col">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5">{f.socialLabel}</p>
            <div className="flex gap-3 mb-6">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={TG}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors duration-200"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
                </svg>
              </a>
            </div>

            {/* Yandex Go */}
            <div className="flex flex-col items-start gap-2">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">{f.taxiLabel || 'Вызвать такси'}</p>
              <a
                href="https://go.yandex/route?end-lat=41.2883&end-lon=69.2693&utm_source=massage-school"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-[#FFD400] hover:bg-[#f0c800] transition-colors duration-200 rounded-2xl px-6 py-4 shadow-lg shadow-black/20"
              >
                <span className="text-black font-medium text-lg leading-none">Яндекс</span>
                <span className="text-black font-black text-xl italic leading-none">Go</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-white/25 text-sm">{f.copyright}</p>
          <a href="#" className="text-white/25 text-sm hover:text-white/50 transition-colors">
            {f.privacy}
          </a>
        </div>
      </div>
    </footer>
  )
}
