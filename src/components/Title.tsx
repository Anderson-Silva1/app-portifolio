import { title } from "process";

type TitleProps = {
  children?: React.ReactNode;
  title: string;
};

export const Title = ({ children }: TitleProps) => {
  return (
    <>
      <h2 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      <p className="text-center leading-7 [&:not(:first-child)]:mt-6">
        {children}
      </p>
    </>
  );
};
