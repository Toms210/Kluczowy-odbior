import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Najczęściej zadawane pytania</h1>
      <ul className="space-y-4 text-lg">
        <li>
          <strong>Czy oferujecie zdalny nadzór?</strong>
          <p>Tak, realizujemy zdalne konsultacje oraz nadzór techniczny.</p>
        </li>
        <li>
          <strong>Jak mogę zarezerwować termin?</strong>
          <p>Skontaktuj się z nami przez formularz lub bezpośrednio telefonicznie.</p>
        </li>
      </ul>
      <Link href="/kontakt">
        <button className="bg-beige-dark text-white py-2 px-4 rounded-lg mt-8 hover:bg-beige">
          Skontaktuj się z nami
        </button>
      </Link>
    </div>
  );
}