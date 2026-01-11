import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section className="py-12 md:py-24 px-6 bg-cream">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-anthracite rounded-3xl p-8 md:p-16 lg:p-20 text-center md:text-left relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Bereit für Ihr Projekt?
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-light">
                Kostenloses Erstgespräch. Inklusive Aufmaß vor Ort & Materialberatung.
                Lassen Sie uns gemeinsam Ihren Traumgarten realisieren.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Button size="lg" className="bg-white text-anthracite hover:bg-stone">
                Jetzt Termin buchen
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;