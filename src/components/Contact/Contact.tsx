import { MailIcon, MapIcon, MessageCircleCodeIcon } from "lucide-react";
import { Content } from "../Content";
import { Title } from "../Title";

export const Contact = () => {
  return (
    <main className="pt-16">
      <Content>
        <Title titleText="Entre em contato">
          Estou sempre interessado em novas oportunidades e colaborações. Vamos
          discutir como podemos trabalhar juntos!
        </Title>

        <section className="flex flex-wrap items-center justify-center gap-8 py-16">
          <ContactCard
            contact="teste@teste.com"
            icon={<MailIcon />}
            nameContact="Email"
            isLink
            href="#"
          />
          <ContactCard
            contact="Brasil"
            icon={<MapIcon />}
            nameContact="Local"
            href="#"
          />
          <ContactCard
            contact="+55 (85) 9 8972-8040"
            icon={<MessageCircleCodeIcon />}
            nameContact="Email"
            isLink
            href="#"
          />
        </section>
      </Content>
    </main>
  );
};

type ContactCardProps = {
  icon: React.ReactNode;
  nameContact: string;
  contact: string;
  href: string;
  isLink?: boolean;
};

const ContactCard = ({
  contact,
  icon,
  nameContact,
  //   isLink = false,
  href = "#",
}: ContactCardProps) => {
  return (
    <div className="border-border flex max-w-60 min-w-60 flex-col items-center justify-center rounded-2xl border-2 p-8">
      <div className="bg-chart-1 mb-4 flex h-16 w-16 items-center justify-center rounded-md">
        {icon}
      </div>
      <h4 className="mb-4 font-bold">{nameContact}</h4>

      <a href={href}>
        <span className="text-md text-chart-1 text-center text-sm font-bold">
          {contact}
        </span>
      </a>
    </div>
  );
};
