export const ContentAbout = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 pb-8 lg:flex-row">
      <div className="w-full flex-1">
        <div className="bg-background rounded-none p-8 lg:rounded-2xl">
          <Paraghaph>
            Olá, Meu nome é Anderson, sou um profissional em transição de
            carreira com sólida experiência técnica em telecomunicações e uma
            forte inclinação para o desenvolvimento de sistemas.
          </Paraghaph>
          <Paraghaph>
            Minha jornada na área de programação teve início durante o ensino
            médio, na EEEP Ícaro de Sousa Moreira, onde completei o curso
            técnico em Redes de Computadores. Desde então, tenho me dedicado ao
            aprimoramento contínuo e à exploração das vastas possibilidades que
            o universo da tecnologia oferece.
          </Paraghaph>
          <Paraghaph>
            Atualmente, busco minha primeira oportunidade como Desenvolvedor
            Front-End. Tenho interesse em projetos que não apenas gerem valor,
            mas que também proporcionem crescimento profissional e estejam
            alinhados com princípios de inovação e propósito.
          </Paraghaph>
        </div>
      </div>

      <div className="w-full flex-1 space-y-4 px-4">
        <Card
          title="Experiência"
          titleStrong="3+ Anos"
          description="Criando aplicativos para web"
        />

        <Card
          title="Cargo atual"
          titleStrong="Telecom"
          description="Vistel Telecom"
        />

        <Card
          title="Foco atual"
          titleStrong="FullStack"
          description="Desenvolvimento web com ênfase em Front-End"
        />
      </div>
    </section>
  );
};

type ParaghaphProps = {
  children?: React.ReactNode;
};

const Paraghaph = ({ children }: ParaghaphProps) => {
  return (
    <p className="m-auto max-w-[600px] text-center indent-8 text-sm leading-7 lg:text-left [&:not(:first-child)]:mt-4">
      {children}
    </p>
  );
};

type CardProps = {
  title: string;
  titleStrong: string;
  description: string;
};

const Card = ({ title, titleStrong, description }: CardProps) => {
  return (
    <div className="border-border flex min-w-full flex-col items-center justify-center space-y-2 rounded-2xl border-2 p-8 text-center lg:items-start">
      <p className="text-muted-foreground text-sm font-bold">{title}</p>
      <h3 className="text-chart-1 scroll-m-20 text-2xl font-semibold tracking-tight md:text-3xl">
        {titleStrong}
      </h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};
