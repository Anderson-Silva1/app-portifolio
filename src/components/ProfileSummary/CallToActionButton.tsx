"use client";
import { Button } from "../ui/button";

export const CallToActionButton = () => (
  <Button
    onClick={() => alert("Estamos em manuteção, logo estará pronto")}
    className="bg-chart-1 hover:bg-chart-1 cursor-pointer p-6 font-bold text-white transition duration-700 hover:opacity-80"
  >
    Ver meu trabalho
  </Button>
);
