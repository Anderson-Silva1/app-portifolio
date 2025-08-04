"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Content } from "../Content";
import { Menu } from "./Menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Language } from "./Language";
import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";

export const Header = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < prevScrollY || currentScrollY < 10);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const linkOption = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`border-border bg-background fixed top-0 z-50 flex h-24 w-screen items-center border-b-2 transition-transform duration-500 ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Content>
        <div className="flex w-full items-center justify-between px-[4%]">
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
              <Link href="#contact">
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
