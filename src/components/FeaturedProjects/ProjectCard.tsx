import Image from "next/image";
import { Button } from "../ui/button";

type techIcon = {
  src: string;
  alt: string;
};

type ProjectCardProps = {
  title?: string;
  description?: string;
  imageSrc?: string;
  techIcons?: techIcon[];
};

export const ProjectCard = ({
  title = "Chronos Pomodoro",
  description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis cum nemo incidunt aliquid ipsam facilis error iste est laborum magnam voluptate commodi voluptatibus quae soluta eum necessitatibus rem, consectetur eligendi.",
  imageSrc = "/imageProjects/chronos-pomodoro.png",
  techIcons = [],
}: ProjectCardProps) => {
  return (
    <div
      className="border-border text-card-foreground bg-card flex min-h-[450px] max-w-sm flex-1 flex-col justify-between rounded-lg border-2 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      role="article"
      aria-labelledby={`project-title-${title}`}
    >
      <div className="overflow-hidden rounded-t-lg">
        <Image
          src={imageSrc}
          width={400}
          height={230}
          alt={`Imagem do projeto ${title}`}
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between gap-6 p-4">
        <div>
          <h2
            id={`project-title-${title}`}
            className="mb-2 text-lg font-semibold"
          >
            {title}
          </h2>
          <p className="line-clamp-4 text-sm">{description}</p>
        </div>
        <div className="flex justify-start gap-2">
          {techIcons.map((icon, index) => (
            <Image
              key={index}
              src={`/logo/${icon.src}`}
              alt={icon.alt || `Ícone de tecnologia ${index + 1}`}
              width={24}
              height={24}
              className="object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <Button
          aria-label="Acessar repositório do projeto"
          className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-600"
        >
          Repo
        </Button>
        <Button
          aria-label="Acessar deploy do projeto"
          className="rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-green-600"
        >
          Deploy
        </Button>
      </div>
    </div>
  );
};
