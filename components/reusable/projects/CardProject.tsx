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
import Link from "next/link";

type TTechStack = {
  label: string;
  icon?: string;
};

type TProps = {
  title: string;
  shortDesc: string;
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
  links,
  techStack,
  className,
}) => {
  return (
    <Card
      className={cn(
        "rounded-xl border-border bg-foreground/5 w-full h-full",
        className
      )}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{shortDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex items-center gap-1 flex-wrap">
          {techStack?.map((tech, idx) => (
            <li
              key={idx}
              className="py-1 px-2 text-sm rounded-full border border-border w-max select-none flex items-center gap-2"
            >
              {tech.icon && <StackIcon variant="dark" className="w-4" name={tech.icon} />}
              {tech.label}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <ul className="flex items-center gap-4">
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
