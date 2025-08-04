import { Content } from "../Content";
import { Title } from "../Title";
import { ContentAbout } from "./ContentAbout";

export const About = () => {
  return (
    <main className="bg-background2 text-foreground min-h-screen">
      <Content>
        <div id="about">
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
