import ProjectCard from "./ProjectCard";

const Work = () => {
  const works = [
    {
      imgSrc: "/src/assets/images/project-1.png",
      title: "Clinica médica",
      tags: ["React", "Vite", "Tailwindcss"],
      projectLink: "https://prescripto-web.netlify.app/",
    },
    {
      imgSrc: "/src/assets/images/project-2.png",
      title: "Dashboard Admin React",
      tags: ["React", "Vite", "Material-UI", "TypeScript", "Chart.js"],
      projectLink: "https://dashboard-admi.netlify.app/",
    },
    {
      imgSrc: "/src/assets/images/project-3.jpg",
      title: "Recipe app",
      tags: ["Development", "API"],
      projectLink: "",
    },
    {
      imgSrc: "/src/assets/images/project-4.jpg",
      title: "Real state website",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/codewithsadee-org/wealthome",
    },
    {
      imgSrc: "/src/assets/images/project-5.jpg",
      title: "eCommerce website",
      tags: ["eCommerce", "Development"],
      projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    },
    {
      imgSrc: "/src/assets/images/project-6.jpg",
      title: "vCard Personal portfolio",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    },
  ];
  return (
    <section id="trabalho" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Destaques do meu portfólio
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
