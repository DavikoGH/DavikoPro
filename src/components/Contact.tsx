import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-[#05070a] border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-800/30 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-500 font-bold tracking-[3px] uppercase text-sm mb-2">
                Contáctanos
              </h2>
              <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-6 leading-tight tracking-tight">
                ¿Necesitas un técnico <span className="text-brand-500">experto?</span>
              </h3>
              <p className="text-white/60 text-lg mb-10 max-w-md">
                Estamos listos para resolver cualquier problema con tus electrodomésticos. Contactanos hoy y agenda tu visita técnica.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-500 backdrop-blur-sm shadow-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Teléfono / WhatsApp</h4>
                  <p className="text-white/60 mb-2">+1 (555) 123-4567</p>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-sm font-bold text-brand-500 hover:text-brand-400 transition-colors inline-flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" /> Enviar mensaje
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-500 backdrop-blur-sm shadow-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Correo Electrónico</h4>
                  <p className="text-white/60">contacto@techpro-servicios.com</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-500 backdrop-blur-sm shadow-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Ubicación</h4>
                  <p className="text-white/60">Av. Tecnológica 123, Ciudad<br/>Atención a domicilio</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Nombre Completo</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Teléfono</label>
                  <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="+1 234 567 890" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Correo Electrónico</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" placeholder="juan@ejemplo.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Servicio Requerido</label>
                <select className="w-full bg-[#1a1d23] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none cursor-pointer">
                  <option value="aire">Aires Acondicionados</option>
                  <option value="lavadora">Lavadoras</option>
                  <option value="heladera">Heladeras</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Mensaje / Diagnóstico Inicial</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none" placeholder="Describe el problema de tu equipo..."></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-brand-500 hover:bg-brand-600 text-white rounded-xl px-4 py-4 font-bold transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide text-sm"
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <span>Enviar Solicitud</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  )}
                  {status === 'loading' && (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </motion.div>
                  )}
                  {status === 'success' && (
                    <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <span>¡Mensaje Enviado!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>

        </div>
        
        {/* Map Side */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-80 relative bg-slate-800"
        >
          <iframe
            title="Ubicación DavikoPro"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114111.49303578769!2d-80.20188944999999!3d25.78254535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2nMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(150%)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
