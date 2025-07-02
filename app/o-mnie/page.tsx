import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">O mnie</h1>
      <p className="text-lg leading-relaxed">
        Jestem inżynierem budownictwa z wieloletnim doświadczeniem w nadzorze
        inwestorskim oraz odbiorach technicznych mieszkań. Moim celem jest
        zapewnienie najwyższej jakości usług i pełnego bezpieczeństwa Twojej
        inwestycji.
      </p>
      <Link href="/kontakt">
        <button className="bg-beige-dark text-white py-2 px-4 rounded-lg mt-8 hover:bg-beige">
          Skontaktuj się z nami
        </button>
      </Link>
    </div>
  );
}