import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { ExternalLinkIcon, FigmaLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

type TProps = {
  title: string;
  image: string;
  links: {
    demo?: string;
    figma: string;
  };
};

const CardUIKIT: React.FC<TProps> = ({ title, image, links }) => {
  return (
    <Card className="rounded-lg hover:border-foreground border-border bg-foreground/5">
      <CardHeader>
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="w-full aspect-video rounded-lg"
        />
      </CardHeader>
      <CardContent>
        <h1 className="text-lg font-bold">{title}</h1>
      </CardContent>
      <CardFooter>
        <ul className="flex items-center gap-4">
          <li>
            <Link className="flex items-center gap-2 group" href={links.figma}>
              <FigmaLogoIcon />
              <span className="text-sm underline">Figma</span>
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

export default CardUIKIT;
