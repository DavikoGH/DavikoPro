import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-[#05070a] border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-800/30 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
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
                Estamos listos para resolver cualquier problema con tus electrodomésticos. Contáctanos hoy y agenda tu visita técnica.
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
                  <p className="text-white/60 mb-2">(+591) 777 42436</p>
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
                  <p className="text-white/60">contacto@marioaire.com</p>
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
                  <p className="text-white/60">Av. Tres Pasos al Frente<br/>Atención a domicilio</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map Side */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[400px] lg:h-[600px] w-full relative bg-slate-800"
          >
            <iframe
              title="Ubicación Mario Aires"
              src="https://maps.google.com/maps?q=Villa%201ro%20de%20Mayo,%20Santa%20Cruz%20de%20la%20Sierra,%20Bolivia&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(150%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
