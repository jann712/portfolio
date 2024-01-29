import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

type ProjectCardProps = {
  title: string;
  desc: string;
  tech: Array<string>;
  githubLink?: string;
  websiteLink: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flex flex-shrink-0 flex-grow-0 basis-full lg:basis-1/2">
      <div className="bg-orange-50 rounded-md my-5 mx-auto relative py-7 w-5/6 lg:w-4/6 ">
      <div className="absolute top-16 right-32 lg:top-7 lg:right-7">
        {props.githubLink != undefined ? (
          <a href={props.githubLink}>
            <GitHubIcon className="text-sky-800 hover:text-sky-600" />
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="absolute top-16 right-44 lg:top-7 lg:right-16">
        {props.websiteLink != undefined ? (
          <a href={props.websiteLink}>
            <LinkIcon className="text-sky-800 hover:text-sky-600" />
          </a>
        ) : (
          ""
        )}
      </div>
      <h3 className="mt-0 mb-14 font-medium text-lg">{props.title}</h3>

      <div className="text-center px-7">
        <p>{props.desc}</p>
      </div>
      <div className="text-left px-7 mt-7">
        <h3 className="font-medium text-xl mb-5">Tecnologias</h3>
        <ul>
          {props.tech.map((technology) => (
            <li>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}
