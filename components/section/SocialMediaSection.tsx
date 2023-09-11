const SocialMediaSection: React.FC = () => {
  return (
    <ul className="mt-2 flex items-center gap-x-6 gap-y-2 list-disc pl-4 flex-wrap">
      <li>
        <a
          className="text-sky-500 hover:underline underline-offset-4 transition-all cursor-pointer"
          href="https://github.com/AdiCahyaSaputra"
        >
          github
        </a>
      </li>
      <li>
        <a
          className="text-sky-500 hover:underline underline-offset-4 transition-all cursor-pointer"
          href="https://www.linkedin.com/in/adi-cahya-saputra-746a8423b"
        >
          linkedin
        </a>
      </li>
      <li>
        <a
          className="text-sky-500 hover:underline underline-offset-4 transition-all cursor-pointer"
          href="https://www.youtube.com/@adics"
        >
          youtube
        </a>
      </li>
      <li>
        <a
          className="text-sky-500 hover:underline underline-offset-4 transition-all cursor-pointer"
          href="https://www.instagram.com/adi.tsx"
        >
          instagram
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaSection;
