export default function Steps() {
  return (
    <section className="py-16 px-6 bg-[#fffaf5]">
      <h2 className="text-center text-3xl font-bold mb-8" data-aos="fade-up">Jak działamy?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          {
            step: '1',
            title: 'Kontakt i zgłoszenie',
            desc: 'Zgłoś się przez formularz, e-mail lub telefonicznie.'
          },
          {
            step: '2',
            title: 'Wycena i konsultacja',
            desc: 'Przygotujemy ofertę i omówimy szczegóły.'
          },
          {
            step: '3',
            title: 'Realizacja',
            desc: 'Umówimy się na dogodny termin odbioru lub konsultacji.'
          }
        ].map((item) => (
          <div key={item.step} className="bg-white p-6 shadow rounded-xl">
            <div className="text-4xl font-bold text-beige-700 mb-4" data-aos="zoom-in" data-aos-delay="100">{item.step}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
