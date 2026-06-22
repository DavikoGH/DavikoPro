import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThermometerSnowflake, WashingMachine, Refrigerator, CheckCircle2, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'aires',
    title: 'Aires Acondicionados',
    icon: ThermometerSnowflake,
    images: [
      '/AireAcondicionado_1.jpg',
      '/Aire_2.jpg',
      '/Aire_3.jpg',
      '/Aire_4.jpg',
      '/Aire_5.jpg',
      '/Aire_6.jpg',
    ],
    description: 'Especialistas en instalación, mantenimiento y reparación de sistemas de aire acondicionado domésticos y comerciales. Realizamos limpieza profunda, recarga de gas, reparación de fugas, mantenimiento preventivo y correctivo, garantizando un funcionamiento eficiente y prolongando la vida útil de cada equipo. Servicio rápido, profesional y con garantía.',
    features: [
      'Instalación doméstica y comercial',
      'Mantenimiento preventivo',
      'Limpieza profunda',
      'Cambio de gas refrigerante',
      'Reparación de compresores',
      'Reparación de fugas'
    ]
  },
  {
    id: 'lavadoras',
    title: 'Lavadoras',
    icon: WashingMachine,
    images: [
      '/lavadora_1-1.jpg',
      '/lavadora_2.jpg',
      '/lavadora_3.jpg',
      '/lavadora_4.jpg',
      '/lavadora_5.jpg',
      '/lavadora_6.jpg',
    ],
    description: 'Servicio técnico especializado en reparación y mantenimiento de lavadoras de diferentes marcas y modelos. Realizamos diagnóstico profesional, cambio de piezas, reparación de motores, mantenimiento preventivo y limpieza profunda para garantizar el correcto funcionamiento de cada equipo. Atención rápida y soluciones eficientes para hogares y negocios.',
    features: [
      'Reparación de lavadoras automáticas',
      'Cambio de piezas',
      'Reparación de motores',
      'Limpieza interna',
      'Mantenimiento preventivo',
      'Reparación de tarjetas electrónicas',
      'Instalación y diagnóstico técnico'
    ]
  },
  {
    id: 'heladeras',
    title: 'Heladeras',
    icon: Refrigerator,
    images: [
      '/heladera_1.jpg',
      '/heladera_2.jpg',
      '/heladera_3.jpg',
      '/heladera_4.jpg',
      '/heladera_5.jpg',
      '/heladera_6.jpg',
    ],
    description: 'Especialistas en reparación y mantenimiento de heladeras domésticas y comerciales. Ofrecemos recarga de gas refrigerante, reparación de motores, solución de fugas, mantenimiento preventivo y limpieza profunda para optimizar el rendimiento y conservar adecuadamente los alimentos. Servicio garantizado con atención profesional y rápida.',
    features: [
      'Recarga de gas',
      'Reparación de motores',
      'Cambio de termostatos',
      'Limpieza profunda',
      'Reparación de fugas',
      'Mantenimiento preventivo',
      'Reparación de sistemas de refrigeración'
    ]
  }
];

function ServiceItem({ service, isEven }: { service: any, isEven: boolean }) {
  const [images, setImages] = useState(service.images);

  const handleImageSwap = (indexInSmallArray: number) => {
    const newImages = [...images];
    
    // Calculate original index in the slice(1) array
    const trueIndexInSmall = indexInSmallArray % (images.length - 1);
    const indexInOriginal = trueIndexInSmall + 1;
    
    // Swap main image (0) with the clicked image
    const temp = newImages[0];
    newImages[0] = newImages[indexInOriginal];
    newImages[indexInOriginal] = temp;
    
    setImages(newImages);
  };

  const smallImages = images.slice(1);
  const displaySmallImages = [...smallImages, ...smallImages];

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
      
      {/* Image Side */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 relative group"
      >
        <div className="absolute inset-0 bg-brand-500 rounded-3xl translate-x-4 translate-y-4 opacity-20 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl flex flex-col group/gallery">
          <div className="flex-1 overflow-hidden relative bg-slate-900">
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={images[0]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={images[0]} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/gallery:scale-105" 
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 inline-flex items-center gap-3">
                <div className="p-2 bg-brand-500 rounded-xl text-white">
                  <service.icon className="w-5 h-5" />
                </div>
                <span className="text-white font-display font-semibold text-lg">{service.title}</span>
              </div>
            </div>
          </div>
          {/* Marquee Gallery Bottom */}
          <div className="h-28 bg-[#1a1d23] overflow-hidden flex items-center shrink-0 border-t border-white/10 relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#1a1d23] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#1a1d23] to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-3 px-3">
              {displaySmallImages.map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => handleImageSwap(i)}
                  className="w-24 h-20 rounded-xl overflow-hidden shrink-0 border border-white/5 opacity-80 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
                >
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2"
      >
        <h4 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">
          Servicio de {service.title}
        </h4>
        <p className="text-white/70 mb-8 leading-relaxed">
          {service.description}
        </p>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-10">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
              <span className="text-white/80 text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500/10 hover:bg-brand-500 border border-brand-500/20 text-white rounded-xl font-bold transition-all group shadow-lg shadow-brand-500/0 hover:shadow-brand-500/25 text-sm uppercase tracking-wider"
        >
          <span>Solicitar Servicio</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#05070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-500 font-bold tracking-[3px] uppercase text-sm mb-2"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-black text-white mb-4 tracking-tight"
          >
            Soluciones eficientes para tus electrodomésticos
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            Utilizamos tecnología de punta y repuestos originales para garantizar 
            un servicio de la más alta calidad en cada intervención.
          </motion.p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <ServiceItem key={service.id} service={service} isEven={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
