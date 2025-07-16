import { Content } from "../Content";
import { Title } from "../Title";
import { ContentAbout } from "./ContentAbout";

export const About = () => {
  return (
    <main>
      <Content>
        <div className="min-h-screen scroll-mt-24" id="about">
          <div className="py-8">
            <Title titleText="Sobre Mim">
              Saiba mais sobre minha jornada como desenvolvedor e os projetos em
              que trabalhei
            </Title>
          </div>

          <ContentAbout />
        </div>
      </Content>
    </main>
  );
};
