import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
             <motion.div
                key={`img-${current.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
             >
                <img 
                  src={current.image} 
                  alt={current.author} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-forest/10 mix-blend-multiply" />
             </motion.div>
             
             {/* Decorative element */}
             <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-forest/5 rounded-full -z-10" />
             <div className="absolute -top-8 -right-8 w-48 h-48 bg-stone rounded-full -z-10 opacity-50" />
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <Quote className="w-12 h-12 text-forest/20 mb-8" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${current.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-anthracite mb-8">
                  "{current.quote}"
                </h3>
                
                <div className="flex items-center gap-4">
                   <div className="h-px w-12 bg-forest/30" />
                   <div>
                      <p className="font-medium text-anthracite text-lg">{current.author}</p>
                      <p className="text-anthracite/50 text-sm">{current.role}</p>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-12">
              <button 
                onClick={handlePrev}
                className="p-3 rounded-full border border-anthracite/10 hover:bg-forest hover:border-forest hover:text-white transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext}
                className="p-3 rounded-full border border-anthracite/10 hover:bg-forest hover:border-forest hover:text-white transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;