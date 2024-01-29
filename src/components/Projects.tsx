import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";
import Autoplay from 'embla-carousel-autoplay'

export default function Projects() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="flex">
      <ProjectCard
            title="Website de Viagens"
            websiteLink="https://www.spectaviagens.com"
            desc="Website feito para uma empresa de turismo e viagens com envio de formulários."
            tech={[
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "Material UI",
              "Hospedagem Cloud",
            ]}
          />
          <ProjectCard
            githubLink="https://github.com/jann712/climatempo-frontend/tree/main"
            websiteLink="https://climatempo-frontend.onrender.com"
            title="Previsão do tempo + cache"
            desc="Uso da API do Climatempo para uma breve previsão do tempo junto com a função de cache via Redis."
            tech={[
              "Redis",
              "React.js",
              "Node.js",
              "Express.js",
              "TypeScript",
              "TailwindCSS",
            ]}
          />
          <ProjectCard 
          githubLink="https://github.com/jann712/everymind-frontend"
          websiteLink="https://everymind-frontend.onrender.com/"
          title="Listagem de produtos esportivos"
          desc="CRUD de produtos esportivos com uma interface simples e intuitiva."
          tech={[
            "Typescript",
            "React.js",
            "React-Query",
            "NestJS",
            "Prisma.js",
            "TailwindCSS",
            "Material UI",
            "Banco de Dados PostgresQL"
          ]}
          />
      </div>
    </div>
  );
}
