import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contacts = [
  { Icon: Phone, label: 'Phone', value: '+1 (929) 301-6848', href: 'tel:+19293016848' },
  { Icon: Mail, label: 'Email', value: 'komalbagwe31797@gmail.com', href: 'mailto:komalbagwe31797@gmail.com' },
  { Icon: MapPin, label: 'Location', value: 'NYC, NY, USA', href: null },
];

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">Don't be a stranger</p>
        <h2 className="display-font text-4xl font-black text-white mb-4">Let's Connect</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Whether it's a job opportunity, collaboration, or just a chat — my inbox is always open.
        </p>
      </motion.div>

      <motion.div
        className="bg-gray-900/60 backdrop-blur border border-gray-800 p-8 rounded-2xl w-full max-w-md space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {contacts.map(({ Icon, label, value, href }, i) => (
          <motion.div
            key={label}
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/40 hover:bg-gray-800/70 transition-all duration-200 group"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">{label}</p>
              {href ? (
                <a href={href} className="text-white font-medium text-sm hover:text-cyan-400 transition-colors">
                  {value}
                </a>
              ) : (
                <p className="text-white font-medium text-sm">{value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-10 text-gray-600 text-sm"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
      >
        Built with React & Tailwind · © 2025 Komal Bagwe
      </motion.p>
    </section>
  );
};

export default Contact;