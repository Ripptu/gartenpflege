import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl text-anthracite mb-4"
          >
            Häufige Fragen
          </motion.h2>
          <p className="text-anthracite/60">Transparenz ist uns wichtig. Hier finden Sie Antworten.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={faq.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-stone/50 last:border-0"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className={`font-serif text-xl transition-colors duration-300 ${activeIndex === index ? 'text-forest' : 'text-anthracite group-hover:text-forest'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-cream' : 'group-hover:bg-cream'}`}>
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 text-forest" />
                  ) : (
                    <Plus className="w-5 h-5 text-anthracite/40" />
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-anthracite/70 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;