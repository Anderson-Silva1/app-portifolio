import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center gap-8 px-4 text-center">
      <h1 className="text-2xl/tight font-extrabold">Página não encontrada</h1>
      <div className="border-border bg-accent-foreground text-background rounded-2xl border-2 p-8 font-sans font-bold italic">
        <p>
          Parece que você navegou até aqui... Mas não se preoculpe, você pode
          voltar
        </p>
      </div>

      <Link href="/">
        <Button variant="ghost">Voltar</Button>
      </Link>
    </main>
  );
}
