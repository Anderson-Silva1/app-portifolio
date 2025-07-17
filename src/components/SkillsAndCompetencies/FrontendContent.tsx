import { ContainerSkills } from "./ContainerSkills";
import { Icon } from "./Icon";

export const FrontendContent = () => {
  const technologies = [
    { logoName: "html5.svg", alt: "HTML5" },
    { logoName: "css3.svg", alt: "CSS3" },
    { logoName: "tailwindcss.svg", alt: "Tailwind CSS" },
    { logoName: "bootstrap.svg", alt: "BootsTrap" },
    { logoName: "styledcomponents.svg", alt: "Styled Components" },
    { logoName: "scss.svg", alt: "Scss" },
    { logoName: "react.svg", alt: "React" },
    { logoName: "javascript.svg", alt: "JavaScript" },
  ];

  return (
    <ContainerSkills>
      {technologies.map((tech, index) => (
        <Icon key={index} logoName={tech.logoName} alt={tech.alt} />
      ))}
    </ContainerSkills>
  );
};
