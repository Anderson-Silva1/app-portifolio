"use client";

import Link from "next/link";
import { ArrowDownIcon } from "lucide-react";

export const ScrollDownIndicator = () => (
  <div className="animate-bounce">
    <Link
      href="#about"
      onClick={() => alert("Estamos em manuteção, logo estará pronto")}
    >
      <div className="hover:bg-chart-1 rounded-sm p-2 transition duration-500 hover:scale-105 hover:border-transparent hover:text-white">
        <ArrowDownIcon size={24} />
      </div>
    </Link>
  </div>
);
