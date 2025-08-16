import { Github, Linkedin, Mail, MessageCircleMore } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Anderson-Silva1",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/anderson-silva-developer/",
      icon: Linkedin,
    },
    {
      name: "Whatsapp",
      href: "tel:+5585921606725",
      icon: MessageCircleMore,
    },
    {
      name: "Email",
      href: "mailto:anderson.developer360@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t border-gray-700 bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Nome e Copyright */}
          <div className="mb-4 text-center md:mb-0 md:text-left">
            <p className="text-chart-1 text-lg font-semibold">Anderson Dev</p>
            <p className="text-sm text-gray-400">
              © {currentYear} Anderson. Todos os direitos reservados.
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chart-1 rounded-lg p-2 transition-colors hover:bg-gray-700"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
