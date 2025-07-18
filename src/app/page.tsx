import { About } from "@/components/About/About";
import ContactMain from "@/components/Contact";
import { FeaturedProjects } from "@/components/FeaturedProjects/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProfileSummary } from "@/components/ProfileSummary";
import { SkillsAndCompetencies } from "@/components/SkillsAndCompetencies/SkillsAndCompetencies";

export default function Home() {
  return (
    <>
      <Header />

      <Container>
        <ProfileSummary />
      </Container>

      <Container>
        <About />
      </Container>

      <Container>
        <SkillsAndCompetencies />
      </Container>

      <Container>
        <FeaturedProjects />
      </Container>

      <Container>
        <ContactMain />
      </Container>

      <Footer />
    </>
  );
}

type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-background min-h-screen min-w-full">{children}</div>
  );
};
