import Image from "next/image";
import { Button } from "../ui/button";

export const Icon = ({ logoName, alt }: { logoName: string; alt: string }) => {
  return (
    <div className="flex transform flex-col items-center justify-center rounded-lg p-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-[#202020]">
      <Image
        className="block"
        src={`/logo/${logoName}`}
        alt={alt}
        width={32}
        height={32}
        priority
      />
      <span className="text-foreground mt-2 text-center text-xs font-semibold">
        {alt}
      </span>
    </div>
  );
};
