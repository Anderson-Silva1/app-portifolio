type ContainerSkillsProps = {
  children: React.ReactNode;
};

export const ContainerSkills = ({ children }: ContainerSkillsProps) => {
  return (
    <div className="rounded-lg p-6 shadow-md">
      <div className="grid min-w-32 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {children}
      </div>
    </div>
  );
};
