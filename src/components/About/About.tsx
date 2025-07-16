import { Title } from "../Title";
import { ContentAbout } from "./ContentAbout";

export const About = () => {
  return (
    <main>
      <div className="min-h-screen">
        <div>
          <Title title="Sobre Mim">
            Saiba mais sobre minha jornada como desenvolvedor e os projetos em
            que trabalhei
          </Title>
        </div>

        <div></div>
      </div>
      <ContentAbout></ContentAbout>
    </main>
  );
};
