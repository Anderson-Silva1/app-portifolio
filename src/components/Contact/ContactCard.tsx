import Contact from "./Contact";

type ContactCardProps = {
  icon: React.ReactNode;
  nameContact: "Email" | "WhatsApp" | "Brasil";
  contact: string;
  href: string;
  isLink?: boolean;
};

export const ContactCard = ({
  contact,
  icon,
  nameContact,
  isLink = false,
  href = "#",
}: ContactCardProps) => {
  return (
    <div className="border-border flex max-w-60 min-w-60 flex-col items-center justify-center rounded-2xl border-2 p-8">
      <div className="bg-chart-1 mb-4 flex h-16 w-16 items-center justify-center rounded-md text-white">
        {icon}
      </div>
      <h4 className="mb-4 font-bold">{nameContact}</h4>

      <Contact
        contact={contact}
        isContact={isLink}
        href={href}
        type={nameContact === "Brasil" ? "Outro" : nameContact}
      />
    </div>
  );
};
