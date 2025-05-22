```tsx
'use client';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const images = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
];

export default function Gallery() {
  return (
    <section className="py-16 bg-[#fdf6f0]">
      <h2 className="text-center text-3xl font-bold mb-8">Galeria realizacji</h2>
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
          {images.map((src) => (
            <PhotoView key={src} src={src}>
              <img
                src={src}
                alt="Galeria realizacji"
                className="w-full h-auto rounded-xl shadow-md cursor-pointer"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
}
```
