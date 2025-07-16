type ContentProps = {
  children?: React.ReactNode;
};

export const Content = ({ children }: ContentProps) => {
  return <div className="m-auto w-full max-w-screen-xl">{children}</div>;
};
