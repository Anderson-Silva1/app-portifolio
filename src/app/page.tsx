import { About } from "@/components/About/About";
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
    </>
  );
}

type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="bg-background min-h-screen">{children}</div>;
};
