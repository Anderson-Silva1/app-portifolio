type TitleProps = {
  children?: React.ReactNode;
  titleText: string;
};

export const Title = ({ children, titleText }: TitleProps) => {
  return (
    <>
      <h2 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
        {titleText}
      </h2>
      <p className="text-muted-foreground text-center text-sm leading-7 [&:not(:first-child)]:mt-6">
        {children}
      </p>
    </>
  );
};
