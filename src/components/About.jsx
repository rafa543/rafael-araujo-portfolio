import R from "@/assets/images/R.png";
const About = () => {
  const aboutItems = [
    {
      label: "Projetos concluído",
      number: 10,
    },
    {
      label: "Anos de experiência",
      number: 4,
    },
  ];

  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Bem-vindo! Sou um Desenvolvedor Full Stack com ampla experiência em
            Java, Spring Boot e React, especializado no desenvolvimento de
            sistemas web e aplicativos móveis. Minha trajetória profissional
            inclui papéis como Especialista em Análise e Desenvolvimento de
            Sistemas na ETIPI e Analista de Sistemas na Secretaria da Fazenda,
            onde tive a oportunidade de: Desenvolver e manter aplicações
            utilizando tecnologias modernas. Migrar sistemas legados para
            soluções mais eficientes. Criar novos sistemas que atendem às
            necessidades dos usuários. Participar de projetos de capacitação em
            diversas tecnologias, incluindo React e Angular. Possuo
            conhecimentos em bancos de dados como Oracle, SQL Server e
            PostgreSQL, além de experiência com o framework Spring do java.
            Minha experiência diversificada e a capacidade de trabalhar com
            grandes volumes de dados me tornam um profissional versátil, pronto
            para contribuir com soluções inovadoras e eficientes.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              className="ml-auto md:w-[40px] md:h-[40px]"
              src={R}
              alt="Logo"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
