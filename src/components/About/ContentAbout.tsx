export const ContentAbout = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 md:flex-row">
      <div className="w-full md:flex-1">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio
          dolore, suscipit exercitationem vitae maiores voluptatum laudantium id
          eius numquam eligendi eaque minima quod dolorem sapiente ducimus
          obcaecati modi ipsam.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio
          dolore, suscipit exercitationem vitae maiores voluptatum laudantium id
          eius numquam eligendi eaque minima quod dolorem sapiente ducimus
          obcaecati modi ipsam.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio
          dolore, suscipit exercitationem vitae maiores voluptatum laudantium id
          eius numquam eligendi eaque minima quod dolorem sapiente ducimus
          obcaecati modi ipsam.
        </p>
      </div>
      <div className="flex-1 space-y-4 px-4">
        <div className="border-border space-y-2 rounded-2xl border-2 p-8">
          <p className="text-muted-foreground text-sm font-bold">Experiência</p>
          <h3 className="text-chart-1 scroll-m-20 text-2xl font-semibold tracking-tight">
            3+ Anos
          </h3>
          <p className="text-muted-foreground text-sm">
            Criando aplicativos para web
          </p>
        </div>

        <div className="border-border space-y-1 rounded-2xl border-2 p-8">
          <p className="text-muted-foreground text-sm font-bold">Cargo atual</p>
          <h3 className="text-chart-1 scroll-m-20 text-2xl font-semibold tracking-tight">
            Tècnico de instalação
          </h3>
          <p className="text-muted-foreground text-sm">Vistel telecom</p>
        </div>

        <div className="border-border space-y-2 rounded-2xl border-2 p-8">
          <p className="text-muted-foreground text-sm font-bold">Foco</p>
          <h3 className="text-chart-1 scroll-m-20 text-2xl font-semibold tracking-tight">
            Desenvolvimento FullStack
          </h3>
          <p className="text-muted-foreground text-sm">Desenvolvimento web</p>
        </div>
      </div>
    </section>
  );
};
