import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import StackIcon from "tech-stack-icons";
import Image from "next/image";
import Link from "next/link";

type TTechStack = {
  label: string;
  icon?: string;
};

type TProps = {
  title: string;
  shortDesc: string;
  image?: string;
  status?: string;
  links: {
    demo?: string;
    linkedinPost?: string;
    repository?: string;
  };
  techStack?: TTechStack[];
  className?: string;
};

const CardProject: React.FC<TProps> = ({
  title,
  shortDesc,
  image,
  status,
  links,
  techStack,
  className,
}) => {
  return (
    <Card
      className={cn(
        "group gap-0 overflow-hidden rounded-xl border-border bg-black/50 py-0 w-full h-full transition-colors hover:bg-black/60",
        className
      )}
    >
      {image && (
        <div className="relative aspect-[1.7/1] overflow-hidden border-b border-border bg-foreground/5">
          <Image
            src={image}
            alt={`${title} website preview`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-500"
          />
        </div>
      )}

      <CardHeader className="pt-6">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="leading-relaxed">
          {shortDesc}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4">
        <ul className="flex items-center gap-1 flex-wrap">
          {techStack?.map((tech, idx) => (
            <li
              key={idx}
              className="px-2.5 py-1.5 text-xs rounded-full border border-border w-max select-none flex items-center gap-1.5 bg-white/5 text-foreground/70"
            >
              {tech.icon && (
                <StackIcon variant="dark" className="w-4" name={tech.icon} />
              )}
              <span>{tech.label}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto pb-6">
        <ul className="flex flex-wrap items-center gap-4">
          {links.repository && (
            <li>
              <Link
                className="flex items-center gap-2 group"
                href={links.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon />
                <span className="text-sm underline">Repository</span>
              </Link>
            </li>
          )}
          {links.demo && (
            <li>
              <Link
                className="flex items-center gap-2 group"
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon />
                <span className="text-sm underline">Demo</span>
              </Link>
            </li>
          )}
          {links.linkedinPost && (
            <li>
              <Link
                className="flex items-center gap-2 group"
                href={links.linkedinPost}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogoIcon />
                <span className="text-sm underline">LinkedIn Post</span>
              </Link>
            </li>
          )}
        </ul>
      </CardFooter>
    </Card>
  );
};

export default CardProject;
