export const Footer = () => {
  return (
    <footer className="flex h-20 items-center justify-center bg-slate-300 text-center dark:bg-slate-800">
      <p className="text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-chart-1 font-bold">Anderson DEV</span>. todos os
        direitos reservados
      </p>
    </footer>
  );
};
