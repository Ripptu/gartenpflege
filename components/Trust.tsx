import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, ShieldCheck, Ruler } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Ruler, title: "Saubere Arbeitsweise", desc: "Ordnung und Sauberkeit sind für uns so wichtig wie das Ergebnis." },
  { icon: Clock, title: "Klare Absprachen", desc: "Termine und Kosten sind verbindlich. Keine Überraschungen." },
  { icon: CheckCircle2, title: "Hochwertige Ausführung", desc: "Fachgerechte Umsetzung nach aktuellen DIN-Normen." },
  { icon: ShieldCheck, title: "Langfristige Ergebnisse", desc: "Wir bauen für die Zukunft. Haltbarkeit steht im Fokus." },
];

const Trust: React.FC = () => {
  return (
    <section id="trust" className="py-20 bg-white border-y border-stone/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-start gap-4"
            >
              <div className="p-3 bg-cream rounded-xl">
                <item.icon className="w-6 h-6 text-forest" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-anthracite mb-2">{item.title}</h4>
                <p className="text-anthracite/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;