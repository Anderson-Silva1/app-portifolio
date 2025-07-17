import { ContainerSkills } from "./ContainerSkills";
import { Icon } from "./Icon";

export const DatabaseContent = () => {
  const technologies = [
    { logoName: "sqlite.svg", alt: "SQLite" },
    { logoName: "postgresql.svg", alt: "PostgreSQL" },
    { logoName: "prisma.svg", alt: "Prisma ORM" },
  ];

  return (
    <ContainerSkills>
      {technologies.map((tech, index) => (
        <Icon key={index} logoName={tech.logoName} alt={tech.alt} />
      ))}
    </ContainerSkills>
  );
};
