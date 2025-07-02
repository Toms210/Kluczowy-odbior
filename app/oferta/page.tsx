import Link from "next/link";

export default function OfertaPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Nasza oferta</h1>
      <ul className="space-y-4 text-lg">
        <li>Odbiory techniczne mieszkań i domów</li>
        <li>Zdalny nadzór budowlany i konsultacje</li>
        <li>Przeglądy techniczne i ekspertyzy</li>
      </ul>
      <Link href="/kontakt">
        <button className="bg-beige-dark text-white py-2 px-4 rounded-lg mt-8 hover:bg-beige">
          Skontaktuj się z nami
        </button>
      </Link>
    </div>
  );
}