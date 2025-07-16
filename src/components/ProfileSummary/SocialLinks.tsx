import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export const SocialLinks = () => (
  <div className="flex gap-4">
    <Link
      href="https://www.linkedin.com/in/anderson-silva-developer/"
      target="_blank"
    >
      <div className="hover:bg-chart-1 border-border rounded-sm border-2 p-2 transition duration-500 hover:scale-105 hover:border-transparent hover:text-white">
        <LinkedinIcon />
      </div>
    </Link>
    <Link href="https://github.com/Anderson-Silva1" target="_blank">
      <div className="hover:bg-chart-1 border-border rounded-sm border-2 p-2 transition duration-500 hover:scale-105 hover:border-transparent hover:text-white">
        <GithubIcon />
      </div>
    </Link>
  </div>
);
