'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Wypełnij wszystkie pola!');
      return;
    }

    // fake success
    setError('');
    setSent(true);
  };

  return (
    <section id="kontakt" className="py-16 px-6 bg-[#fffaf5] text-gray-800">
      <h2 className="text-center text-3xl font-bold mb-8">Formularz kontaktowy</h2>

      {sent ? (
        <p className="text-center text-green-600 font-semibold">Dziękujemy za wiadomość!</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Imię i nazwisko"
            className="w-full p-3 rounded border"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Adres e-mail"
            className="w-full p-3 rounded border"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Twoja wiadomość"
            className="w-full p-3 rounded border"
            rows={5}
            value={form.message}
            onChange={handleChange}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Wyślij
          </button>
        </form>
      )}
    </section>
  );
}
