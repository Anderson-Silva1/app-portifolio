import { About } from "@/components/About/About";
import { Header } from "@/components/Header";
import { ProfileSummary } from "@/components/ProfileSummary";

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
    </>
  );
}

type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="bg-background min-h-screen">{children}</div>;
};
