import { ContainerSkills } from "./ContainerSkills";
import { Icon } from "./Icon";

export const ToolsContent = () => {
  const technologies = [
    { logoName: "git.svg", alt: "Git" },
    { logoName: "vscode.svg", alt: "VSCode" },
    { logoName: "figma.svg", alt: "Figma" },
    { logoName: "vercel.svg", alt: "Vercel" },
    { logoName: "insomnia.svg", alt: "Insomnia" },
    { logoName: "npm.svg", alt: "NPM" },
    { logoName: "yarn.svg", alt: "YARN" },
    { logoName: "pnpm.svg", alt: "PNPM" },
    { logoName: "github.svg", alt: "Github" },
  ];

  return (
    <ContainerSkills>
      {technologies.map((tech, index) => (
        <Icon key={index} logoName={tech.logoName} alt={tech.alt} />
      ))}
    </ContainerSkills>
  );
};
