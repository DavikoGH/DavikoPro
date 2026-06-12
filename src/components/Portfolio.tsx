import { motion } from 'motion/react';
import { ZoomIn } from 'lucide-react';

const PROJECTS = [
  { img: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1974&auto=format&fit=crop', id: '1', title: 'Instalación Condominio', category: 'Aires Acondicionados' },
  { img: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83e?q=80&w=2070&auto=format&fit=crop', id: '2', title: 'Mantenimiento Preventivo', category: 'Lavadoras' },
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', id: '3', title: 'Sistema Residencial', category: 'Heladeras' },
  { img: 'https://images.unsplash.com/photo-1596700078832-7201c13bc30f?q=80&w=1974&auto=format&fit=crop', id: '4', title: 'Reparación Comercial', category: 'Aires Acondicionados' },
  { img: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop', id: '5', title: 'Hotel Grand Sur', category: 'Lavadoras' },
  { img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop', id: '6', title: 'Centro Gastronómico', category: 'Heladeras' },
];

export default function Portfolio() {
  return (
    <section id="clientes" className="py-24 bg-[#0a0c12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-500 font-bold tracking-[3px] uppercase text-sm mb-2"
          >
            Trabajos Recientes
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-black text-white mb-4 tracking-tight"
          >
            Proyectos Destacados
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            Explora nuestro catálogo visual. Entregamos excelencia a domicilios particulares, condominios, hoteles y restaurantes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#1a1d23] border border-white/10 cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Elegant Glass Overlay */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-white">
                    <ZoomIn className="w-10 h-10 opacity-70" />
                </div>
                
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-300 font-medium text-sm block mb-1">
                    {project.category}
                  </span>
                  <h4 className="text-white font-display font-semibold text-xl">
                    {project.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
