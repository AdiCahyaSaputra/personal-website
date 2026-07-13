import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ArrowDown, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

function formatYearDuration() {
  const startDate = new Date(2023, 6, 1); // July 1, 2023 (months are 0-indexed)
  const currentDate = new Date();

  const totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());
  const totalYears = Math.floor(totalMonths / 12);

  if (totalYears === 0) {
    return "Less than 1 year";
  } else if (totalMonths % 12 === 0) {
    return `${totalYears} ${totalYears === 1 ? "year" : "years"}`;
  } else {
    return `${totalYears}+ years`;
  }
}

const socialButtons = [
  {
    icon: GitHubLogoIcon,
    href: "https://github.com/AdiCahyaSaputra",
    label: "GitHub",
  },
  {
    icon: LinkedInLogoIcon,
    href: "https://www.linkedin.com/in/adi-cs/",
    label: "LinkedIn",
  }
]

const HeadContent = () => {
  return (
    <section className="py-6 lg:py-12">
      <div className="mb-3 flex flex-col gap-3">
        <div className="flex items-center gap-1">
          {socialButtons.map((button) => (
            <Button
              key={button.label}
              asChild
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <a href={button.href} target="_blank" rel="noopener noreferrer" aria-label={button.label}>
                <button.icon />
              </a>
            </Button>
          ))}
        </div>
        <p className="text-sm font-medium text-foreground/60">
          Adi Cahya Saputra · Jakarta, Indonesia
        </p>
      </div>
      <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
        I Build Practical Web and Mobile Products.
      </h1>

      <p className="mt-4 max-w-2xl text-foreground/75 lg:text-lg">
        Full-stack developer with {formatYearDuration()} of hands-on experience,
        focused on shipping production software.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          asChild
          className="rounded-full px-4 bg-red-800 hover:bg-red-900 text-white"
        >
          <Link href="#projects">
            View Projects
            <ArrowDown />
          </Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="mailto:adi631@gmail.com">
            <Mail />
            Let's Talk
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeadContent;
