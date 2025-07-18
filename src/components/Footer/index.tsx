export const Footer = () => {
  return (
    <footer className="flex h-20 flex-col items-center justify-center gap-4 bg-slate-300 p-4 text-center dark:bg-slate-800">
      <p className="text-muted-foreground text-xs">
        Desenvolvido com ❤️ por{" "}
        <span className="text-chart-1 font-bold">Anderson DEV</span>
      </p>
      <p className="text-muted-foreground text-xs">
        &copy; {new Date().getFullYear()} todos os direitos reservados
      </p>
    </footer>
  );
};
