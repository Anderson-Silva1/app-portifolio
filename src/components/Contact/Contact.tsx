interface IContact {
  contact: string;
  isContact: boolean;
  href: string;
  type: "Email" | "WhatsApp" | "Outro";
}

const Contact = ({ contact, isContact, href, type }: IContact) => {
  const content = (
    <p className="text-center text-sm font-bold hover:scale-105">{contact}</p>
  );

  if (!isContact) return content;

  let finalHref = href;

  if (type === "WhatsApp") {
    const phone = href.replace(/\D/g, ""); // remove qualquer não número
    const message = encodeURIComponent(
      "Olá, vi seu portfólio e gostaria de conversar com você!",
    );
    finalHref = `https://wa.me/55${phone}?text=${message}`;
  } else if (type === "Email") {
    finalHref = `mailto:${href}`;
  }

  return (
    <a
      href={finalHref}
      className="text-chart-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
};

export default Contact;
