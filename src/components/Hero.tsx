import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Phone, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    image: '/AireAcondicionado.jpg',
    title: 'Aires Acondicionados',
  },
  {
    image: '/Lavadora.jpg',
    title: 'Lavadoras',
  },
  {
    image: '/Heladera.jpg',
    title: 'Heladeras',
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Carousel */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={SLIDES[currentSlide].image}
            alt={SLIDES[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* Elegant Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] tracking-tight">
              <span className="block text-slate-300 text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 tracking-wide uppercase">
                Servicio Técnico de
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="block text-brand-500 text-glow h-[1.2em]"
                >
                  {SLIDES[currentSlide].title}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-[3px] h-10 md:h-16 bg-brand-400 ml-2 align-middle"
                  />
                </motion.span>
              </AnimatePresence>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl font-light"
          >
            Especialistas en reparación, instalación y mantenimiento.
            <br />
            Soluciones rápidas y garantizadas para el cuidado de tus electrodomésticos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/40 text-[15px] tracking-wide"
            >
              <span>COTIZAR AHORA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://wa.me/1234567890" target="_blank" rel="noreferrer"
              className="px-8 py-4 glass-dark hover:bg-white/10 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-[15px] tracking-wide"
            >
              <Phone className="w-5 h-5 text-green-400" />
              <span>WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400 opacity-70 cursor-pointer"
        onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-[0.2em]">Descubre más</span>
        <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
