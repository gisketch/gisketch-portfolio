import { about } from "@/lib/data";

export default function JsonLd() {
  const { work, location, email } = about();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://gisketch.com/#person",
    name: "Arnel Glenn Jimenez",
    givenName: "Arnel Glenn",
    familyName: "Jimenez",
    alternateName: ["Glenn Jimenez", "Ghegi Jimenez", "Ghegi", "gisketch"],
    description:
      "Official portfolio of Arnel Glenn Jimenez, also known as Glenn Jimenez, Ghegi Jimenez, and gisketch.",
    jobTitle: work[0],
    email,
    address: {
      "@type": "PostalAddress",
      addressCountry: location,
    },
    url: "https://gisketch.com",
    mainEntityOfPage: "https://gisketch.com",
    sameAs: [
      "https://github.com/gisketch",
      "https://www.linkedin.com/in/ghegijmnz/",
      "https://twitter.com/gisketch",
      "https://www.instagram.com/gisketch",
      "https://www.youtube.com/@gisketch",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
