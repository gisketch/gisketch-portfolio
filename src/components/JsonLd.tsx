import { about } from "@/lib/data";

export default function JsonLd() {
  const { name, realName, descriptions, work, location } = about();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: realName,
    alternateName: name,
    description: descriptions[0],
    jobTitle: work[0],
    address: {
      "@type": "PostalAddress",
      addressCountry: location,
    },
    url: "https://gisketch.com",
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
