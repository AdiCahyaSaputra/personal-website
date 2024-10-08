import React from "react";

const SocialMediaLinks = [
  { name: "/github", link: "https://github.com/AdiCahyaSaputra" },
  { name: "/instagram", link: "https://www.instagram.com/adi.tsx" },
  {
    name: "/linkedin",
    link: "https://www.linkedin.com/in/adi-cs/",
  },
];

const SocialMedia = () => {
  return (
    <section className="mt-10 gap-2 grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">Contact Person</h1>
        <p className="text-foreground/60">Reach Me Now</p>
      </div>

      <div>
        <ul className="space-y-2">
          {SocialMediaLinks.map(({ name, link }, idx) => (
            <li key={idx}>
              <a href={link} className="underline text-foreground">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialMedia;
