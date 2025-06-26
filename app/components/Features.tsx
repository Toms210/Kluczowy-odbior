
import { ShieldCheck, Timer, Lightbulb } from 'lucide-react';

const items = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-beige-700" />,
    title: 'Bezpieczeństwo',
    desc: 'Dokładne sprawdzenie kluczowych instalacji i elementów konstrukcyjnych.'
  },
  {
    icon: <Timer className="w-10 h-10 text-beige-700" />,
    title: 'Oszczędność czasu',
    desc: 'Oszczędzasz czas i pieniądze na ewentualnych naprawach.'
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-beige-700" />,
    title: 'Ekspercka wiedza',
    desc: 'Nasz zespół to doświadczeni inżynierowie z certyfikatami.'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white text-center px-6">
      <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">Wyróżnia nas</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <div key={idx} className="p-6 bg-[#fdf6f0] rounded-xl shadow-md"  data-aos="zoom-in" data-aos-delay="100">
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
