import ProjectCard from "./ProjectCard";
import clinica from "@/assets/images/project-1.png";
import dash from "@/assets/images/project-2.png";
import help from "@/assets/images/project-3.png";
import finance from "@/assets/images/project-4.png";
import delivery from "@/assets/images/project-5.jpg";
import gym from "@/assets/images/project-6.png";

const Work = () => {
  const works = [
    {
      imgSrc: clinica,
      title: "Clinica médica",
      tags: ["React", "Vite", "Tailwindcss"],
      projectLink: "https://prescripto-web.netlify.app/",
    },
    {
      imgSrc: dash,
      title: "Dashboard Admin React",
      tags: ["React", "Vite", "Material-UI", "TypeScript", "Chart.js"],
      projectLink: "https://dashboard-admi.netlify.app/",
    },
    {
      imgSrc: help,
      title: "App Help Desk",
      tags: ["Angular", "API"],
      projectLink: "https://helpdesk-dev.netlify.app/",
    },
    {
      imgSrc: finance,
      title: "Finance AI",
      tags: ["Next", "IA", "Tailwindcss", "postcss", "prisma", "stripe"],
      projectLink: "https://finance-ai.netlify.app/login",
    },
    {
      imgSrc: delivery,
      title: "Delivery app",
      tags: ["eCommerce", "React", "Maps"],
      projectLink: "https://rafael-araujo-dsdeliveer.netlify.app/",
    },
    {
      imgSrc: gym,
      title: "Evogym site de uma academia",
      tags: ["React", "Typescript", "framer-motion", "vite"],
      projectLink: "https://evogym-web.netlify.app/",
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
