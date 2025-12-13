import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

type TProps = {
  title: string;
  shortDesc: string;
  links: {
    demo?: string;
    linkedinPost?: string;
    repository: string;
  };
  techStack?: string[];
};

const CardProject: React.FC<TProps> = ({
  title,
  shortDesc,
  links,
  techStack,
}) => {
  return (
    <Card className="rounded-xl hover:border-foreground border-border bg-foreground/5">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{shortDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex items-center gap-1 flex-wrap">
          {techStack?.reverse().map((tech, idx) => (
            <li
              key={idx}
              className="py-1 px-2 text-sm rounded-full border border-border w-max select-none"
            >
              {tech}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <ul className="flex items-center gap-4">
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
