import { MailIcon, MapIcon, MessageCircleCodeIcon } from "lucide-react";
import { Content } from "../Content";
import { Title } from "../Title";
import { ContactCard } from "./ContactCard";

export const ContactMain = () => {
  return (
    <main className="pt-16">
      <Content>
        <Title titleText="Entre em contato">
          Estou sempre interessado em novas oportunidades e colaborações. Vamos
          discutir como podemos trabalhar juntos!
        </Title>

        <section className="flex flex-wrap items-center justify-center gap-8 py-16">
          <ContactCard
            contact="anderson.deleloper360"
            icon={<MailIcon />}
            nameContact="Email"
            isLink
            href="anderson.deleloper360@gmail.com"
          />
          <ContactCard
            contact="Brasil"
            icon={<MapIcon />}
            nameContact="Brasil"
            href="#"
          />
          <ContactCard
            contact="(85) 92160-6725"
            icon={<MessageCircleCodeIcon />}
            nameContact="WhatsApp"
            isLink
            href="(85) 92160-6725"
          />
        </section>
      </Content>
    </main>
  );
};
