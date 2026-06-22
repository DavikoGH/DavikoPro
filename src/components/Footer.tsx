import { Wrench, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020305] text-white/50 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="p-2 bg-brand-500 rounded-lg group-hover:bg-brand-400 transition-colors">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Mario<span className="text-brand-400">Aires</span>
              </span>
            </a>
            <p className="max-w-sm mb-6 text-sm leading-relaxed">
              Soluciones rápidas y garantizadas para el mantenimiento y reparación de 
              electrodomésticos. Atención profesional a nivel residencial y comercial.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass-dark hover:bg-white/10 rounded-full transition-colors text-white">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 glass-dark hover:bg-white/10 rounded-full transition-colors text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 glass-dark hover:bg-white/10 rounded-full transition-colors text-white">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#inicio" className="hover:text-brand-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-400 transition-colors">Servicios</a></li>
              <li><a href="#clientes" className="hover:text-brand-400 transition-colors">Proyectos</a></li>
              <li><a href="#contacto" className="hover:text-brand-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Servicios</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#servicios" className="hover:text-brand-400 transition-colors">Aires Acondicionados</a></li>
              <li><a href="#servicios" className="hover:text-brand-400 transition-colors">Lavadoras</a></li>
              <li><a href="#servicios" className="hover:text-brand-400 transition-colors">Heladeras</a></li>
              <li><a href="#contacto" className="hover:text-brand-400 transition-colors">Mantenimiento Preventivo</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} DavikoPro Servicios. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
