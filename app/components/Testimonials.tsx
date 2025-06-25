
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const testimonials = [
  {
    name: 'Jan Kowalski',
    text: 'Bardzo profesjonalna obsługa, wszystko terminowo i zgodnie z umową!'
  },
  {
    name: 'Anna Nowak',
    text: 'Super kontakt, świetne doradztwo. Polecam każdemu inwestorowi.'
  },
  {
    name: 'Michał Zieliński',
    text: 'Rzetelność, punktualność i ogromna wiedza – to się ceni!'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-center text-3xl font-bold mb-8">Opinie klientów</h2>
      <Swiper spaceBetween={30} slidesPerView={1} loop>
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#fdf6f0] p-6 rounded-xl shadow max-w-xl mx-auto">
              <p className="text-lg italic">"{t.text}"</p>
              <p className="mt-4 text-right font-semibold">– {t.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
```

---