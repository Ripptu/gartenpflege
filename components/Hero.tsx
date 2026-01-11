import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect: Image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-anthracite">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-[120%]" // slightly larger to accommodate parallax
      >
        <img 
          src="https://images.pexels.com/photos/29288279/pexels-photo-29288279.jpeg" 
          alt="Architektonisch perfekte Terrasse" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-anthracite/30" />
      </motion.div>

      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for "luxurious" feel
          className="max-w-4xl"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Wertbeständige Außenanlagen. <br />
            <span className="italic">Fachgerecht</span> & präzise umgesetzt.
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button variant="light" size="lg" className="group shadow-xl shadow-black/20">
              Projekt starten
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Sub-text bottom left */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-12 left-6 md:left-12 max-w-xs text-left z-10"
      >
        <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed border-l-2 border-white/50 pl-4 backdrop-blur-sm">
          Wir realisieren stabile, saubere und langlebige Außenanlagen, die funktional überzeugen.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;