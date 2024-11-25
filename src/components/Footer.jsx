import { ButtonPrimary } from "./Button";

const Footer = () => {
  const sitemap = [
    {
      label: "Início",
      href: "#inicio",
    },
    {
      label: "Sobre",
      href: "#sobre",
    },
    {
      label: "Trabalho",
      href: "#trabalho",
    },
    // {
    //   label: "Avaliações",
    //   href: "#avaliações",
    // },
    {
      label: "Entre em contato comigo",
      href: "#contact",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/rafa543",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rafael-araujo-abreu",
    },
    // {
    //   label: "Twitter X",
    //   href: "https://x.com/codewithsadee_",
    // },
    // {
    //   label: "Instagram",
    //   href: "https://www.instagram.com/codewithsadee",
    // },
    // {
    //   label: "CodePen",
    //   href: "https://codepen.io/codewithsadee",
    // },
  ];

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w[12ch] reveal-up">
              Vamos trabalhar juntos hoje!
            </h2>
            <ButtonPrimary
              href="mailto:rafa123839@gmail.com"
              label="Iniciar projeto"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Mapa do site</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Social</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      target="_blank"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img
              src="/src/assets/images/R.png"
              width={30}
              height={30}
              alt="Logo"
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200">rafaelaraujo</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
