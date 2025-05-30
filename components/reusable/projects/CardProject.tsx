import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type TProps = {
  title: string;
  shortDesc: string;
  links: {
    demo?: string;
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
    <Card className="rounded hover:border-foreground border-border bg-foreground/5">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{shortDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex items-center gap-1 flex-wrap">
          {techStack?.reverse().map((tech, idx) => (
            <li
              key={idx}
              className="py-1 px-2 text-sm rounded border border-border w-max select-none"
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
            >
              <GitHubLogoIcon />
              <span className="text-sm underline">Repository</span>
            </Link>
          </li>
          {links.demo && (
            <li>
              <Link className="flex items-center gap-2 group" href={links.demo}>
                <ExternalLinkIcon />
                <span className="text-sm underline">Demo</span>
              </Link>
            </li>
          )}
        </ul>
      </CardFooter>
    </Card>
  );
};

export default CardProject;
