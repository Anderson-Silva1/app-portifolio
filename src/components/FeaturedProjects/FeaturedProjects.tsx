import { Content } from "../Content";
import { Title } from "../Title";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";

export const FeaturedProjects = () => {
  return (
    <main className="scroll-mt-10 bg-white py-8 dark:bg-black" id="services">
      <Content>
        <div>
          <Title titleText="Projetos em Destaque">
            Aqui estão alguns dos meus projetos mais importantes
          </Title>
        </div>

        <ProjectCard />

        <div className="mt-16 flex items-center justify-center">
          <Button className="bg-chart-1 hover:bg-chart-1/70 font-bold text-white hover:scale-105">
            Ver todos os Projetos
          </Button>
        </div>
      </Content>
    </main>
  );
};
