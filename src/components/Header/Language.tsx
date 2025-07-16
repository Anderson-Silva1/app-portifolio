"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import Image from "next/image";

type LanguageOption = {
  code: string;
  label: string;
  flag: string;
};
const languages: LanguageOption[] = [
  { code: "BR", label: "Português", flag: "/flags/br.svg" },
  { code: "US", label: "Inglês", flag: "/flags/us.svg" },
  { code: "ES", label: "Espanhol", flag: "/flags/es.svg" },
  { code: "FR", label: "Francês", flag: "/flags/fr.svg" },
];

export const Language = () => {
  const [selected, setSelected] = useState<LanguageOption>(languages[0]);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 px-3 py-2">
            {/* <GlobeIcon className="text-muted-foreground h-4 w-4" /> */}
            {/* <span className="text-muted-foreground text-xs font-semibold">
              {selected.code}
            </span> */}
            <span className="text-sm font-medium">
              <Image
                src={selected.flag}
                alt={selected.code}
                width={20}
                height={20}
              />
            </span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-52">
          <DropdownMenuLabel className="text-muted-foreground">
            Escolha o idioma
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setSelected(lang)}
              className="flex cursor-pointer items-center gap-2"
            >
              <Image src={lang.flag} alt={lang.code} width={20} height={20} />
              <span className="text-sm font-medium">{lang.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
