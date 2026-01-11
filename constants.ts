import { ServiceItem, TestimonialItem, FAQItem } from './types';

export const NAV_LINKS = [
  { label: 'Leistungen', href: '#services' },
  { label: 'Referenzen', href: '#testimonials' },
  { label: 'Über uns', href: '#trust' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Pflasterarbeiten',
    subtitle: 'Einfahrten & Wege',
    description: 'Exakte Verlegung für hohe Belastbarkeit. Wir schaffen Wege, die Generationen überdauern, mit Präzision in jedem Stein.',
    image: 'https://picsum.photos/id/122/800/1200', // Stone texture/path vibe
  },
  {
    id: 2,
    title: 'Terrassenbau',
    subtitle: 'Beton- & Naturstein',
    description: 'Ästhetische Außenbereiche als Erweiterung Ihres Wohnraums. Langlebige Materialien, perfekt verarbeitet.',
    image: 'https://picsum.photos/id/155/800/1200', // Outdoor/Patio vibe
  },
  {
    id: 3,
    title: 'Mauer- & Palisadenbau',
    subtitle: 'Stützmauern & Design',
    description: 'Funktionale Stabilität trifft auf architektonische Eleganz. Strukturieren Sie Ihren Garten neu.',
    image: 'https://picsum.photos/id/184/800/1200', // Wall/Nature vibe
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote: "Hauptstadt Gartenpflege hat meinen Garten komplett verändert. Statt Chaos habe ich jetzt eine zeitlose Terrasse, die wie ein erweitertes Wohnzimmer wirkt.",
    author: "Thomas Weber",
    role: "Hausbesitzer aus Potsdam",
    image: "https://picsum.photos/id/101/800/600"
  },
  {
    id: 2,
    quote: "Präzision, die man selten findet. Das Team hat unsere Einfahrt nicht nur gepflastert, sondern ein Kunstwerk aus Stein geschaffen.",
    author: "Julia Meyer",
    role: "Architektin, Berlin-Mitte",
    image: "https://picsum.photos/id/231/800/600"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Wie läuft eine Beratung ab?",
    answer: "Wir beginnen mit einem persönlichen Gespräch vor Ort, um Ihre Wünsche und die Gegebenheiten zu analysieren. Darauf basierend erstellen wir ein detailliertes Konzept und ein transparentes Angebot."
  },
  {
    id: 2,
    question: "Welche Materialien werden verwendet?",
    answer: "Wir setzen ausschließlich auf hochwertige, langlebige Materialien von zertifizierten Händlern. Ob Naturstein, hochwertiger Beton oder edle Hölzer – Qualität steht an erster Stelle."
  },
  {
    id: 3,
    question: "Bauen Sie auch im Winter?",
    answer: "Solange es die Witterung zulässt (Bodenfrostfreiheit), führen wir Arbeiten durch. Für bestimmte Pflaster- und Betonarbeiten warten wir jedoch auf optimale Temperaturen, um die Langlebigkeit zu garantieren."
  },
  {
    id: 4,
    question: "Übernehmen Sie auch die Pflege nach dem Bau?",
    answer: "Selbstverständlich. Wir bieten maßgeschneiderte Pflegepakete an, damit Ihre neue Anlage über Jahre hinweg ihren Wert und ihre Schönheit behält."
  }
];