import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-cream">
      <div className="container mx-auto">
        <div className="mb-16 md:flex justify-between items-end border-b border-anthracite/10 pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-anthracite"
          >
            Unsere Expertise
          </motion.h2>
          <p className="hidden md:block text-anthracite/60 max-w-sm text-right mt-4 md:mt-0">
            Maßgeschneiderte Lösungen für anspruchsvolle Garten- und Landschaftsprojekte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden h-[400px] md:h-full cursor-pointer"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {service.subtitle}
                  </span>
                  <div className="bg-white text-anthracite p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                     <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl mb-2">{service.title}</h3>
                
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-white/80 text-sm md:text-base leading-relaxed mt-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;