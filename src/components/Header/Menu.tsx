"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { Language } from "./Language";
import Link from "next/link";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkOption = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Abrir menu"
            className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
          >
            {isOpen ? (
              <XIcon className="h-16 w-16" />
            ) : (
              <MenuIcon className="h-16 w-16" />
            )}
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="bg-background w-[260px] border-r p-6 shadow-xl sm:w-[300px]"
        >
          <SheetHeader>
            <SheetTitle className="text-center text-xl font-semibold">
              Área do Menu
            </SheetTitle>
            <SheetDescription className="text-muted-foreground text-center text-sm">
              Escolha uma das opções abaixo
            </SheetDescription>
          </SheetHeader>

          <nav className="my-8 flex flex-col gap-8">
            {linkOption.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary cursor-pointer text-base font-medium transition-all duration-150 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact">
            <Button className="bg-chart-1 hover:bg-chart-1 cursor-pointer text-white transition duration-700 hover:opacity-80">
              Entrar em contato
            </Button>
          </Link>
          <SheetFooter>
            <div className="flex justify-between">
              <Language />
              <ModeToggle />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
