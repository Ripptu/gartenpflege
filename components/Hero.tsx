import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/29288279/pexels-photo-29288279.jpeg" 
          alt="Architektonisch perfekte Terrasse" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-anthracite/30" />
      </div>

      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Wertbeständige Außenanlagen. <br />
            <span className="italic">Fachgerecht</span> & präzise umgesetzt.
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button variant="light" size="lg" className="group">
              Projekt starten
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Sub-text bottom left */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-12 left-6 md:left-12 max-w-xs text-left"
      >
        <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed border-l-2 border-white/50 pl-4">
          Wir realisieren stabile, saubere und langlebige Außenanlagen, die funktional überzeugen.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;