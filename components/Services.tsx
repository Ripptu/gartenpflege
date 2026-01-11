import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] // "Apple" ease
    }
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-cream">
      <div className="container mx-auto">
        <div className="mb-16 md:flex justify-between items-end border-b border-anthracite/10 pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-anthracite"
          >
            Unsere Expertise
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="hidden md:block text-anthracite/60 max-w-sm text-right mt-4 md:mt-0"
          >
            Maßgeschneiderte Lösungen für anspruchsvolle Garten- und Landschaftsprojekte.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative rounded-3xl overflow-hidden h-[450px] md:h-full cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite/90 via-anthracite/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {service.subtitle}
                  </span>
                  <div className="bg-white text-anthracite p-3 rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                     <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <h3 className="font-serif text-3xl mb-2">{service.title}</h3>
                
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[0.22,1,0.36,1]">
                  <div className="overflow-hidden">
                    <p className="text-white/90 text-base leading-relaxed mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;