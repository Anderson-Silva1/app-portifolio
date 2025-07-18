import { ContainerSkills } from "./ContainerSkills";
import { Icon } from "./Icon";

export const BackendContent = () => {
  // Lista de tecnologias frontend com seus respectivos ícones e descrições
  const technologies = [
    { logoName: "node.svg", alt: "Node" },
    { logoName: "typescript.svg", alt: "TypeScript" },
    { logoName: "nextjs.svg", alt: "Next.js" },
    { logoName: "vite.svg", alt: "Vite" },
    { logoName: "python.svg", alt: "Python" },
  ];

  return (
    <ContainerSkills>
      {technologies.map((tech, index) => (
        <Icon key={index} logoName={tech.logoName} alt={tech.alt} />
      ))}
    </ContainerSkills>
  );
};
