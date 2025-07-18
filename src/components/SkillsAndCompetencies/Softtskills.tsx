import { ContainerSkills } from "./ContainerSkills";
import { Icon } from "./Icon";

export const Softskills = () => {
  const technologies = [
    { logoName: "mind.svg", alt: "Pensar" },
    { logoName: "lookup.svg", alt: "Pesquisar" },
    { logoName: "knowledge.svg", alt: "Criativo" },
    { logoName: "peoplewho.svg", alt: "Trabalho em Grupo" },
    { logoName: "tochat.svg", alt: "Cominucação" },
  ];

  return (
    <ContainerSkills>
      {technologies.map((tech, index) => (
        <Icon key={index} logoName={tech.logoName} alt={tech.alt} />
      ))}
    </ContainerSkills>
  );
};
