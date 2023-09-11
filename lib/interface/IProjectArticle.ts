type people = {
  username: string;
  link: string;
  note: string;
};

type link = {
  url: string;
  label: string;
  note: string;
};

type tech = {
  name: string;
  link: string;
  note: string;
};

export default interface IProjectArticle {
  year: number;
  date: string;
  title: string;
  shortDesc: string;
  slug: string;
  status?: "On Progress" | "Done";
  peoples?: people[];
  links?: link[];
  techStack?: tech[];
  readme?: string;
}
