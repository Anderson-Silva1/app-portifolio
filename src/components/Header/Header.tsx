import Link from "next/link";
import { Content } from "../Content";
import { Menu } from "./Menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Language } from "./Language";
import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";

export const Header = () => {
  const linkOption = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="border-border fixed top-0 flex h-24 w-screen items-center border-b-2 bg-slate-50 dark:bg-black">
      <Content>
        <div className="flex w-full items-center justify-between px-[4%]">
          {/* <div className="bg-chart-1 flex h-16 w-16 items-center justify-center rounded-full text-2xl/tight font-bold text-white">
            AS
          </div> */}

          <div className="bg-chart-1 flex h-16 w-16 items-center justify-center rounded-full text-2xl/tight font-bold text-white">
            <Avatar className="h-full w-full">
              <AvatarImage src="/profile/profile2.png" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>

          <Menu />

          <div className="hidden md:block">
            <nav>
              <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
                {linkOption.map((option) => (
                  <li key={option.label}>
                    <Link
                      href={option.href}
                      className="text-muted-foreground hover:text-primary text-base font-medium transition-colors duration-200"
                    >
                      {option.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="hidden md:block">
            <div className="flex gap-4">
              <Language />
              <ModeToggle />
              <Link href="/contact">
                <Button className="bg-chart-1 hover:bg-chart-1 cursor-pointer text-white transition duration-700 hover:opacity-80">
                  Entrar em contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Content>
    </header>
  );
};
