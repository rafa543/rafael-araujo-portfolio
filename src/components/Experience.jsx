import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="container border-b border-neutral-900 pb-4 reveal-up">
      <h1 className="my-20 text-center text-4xl reveal-up">Experiencia</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center reveal-up"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 whitespace-pre-line">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-4 rounded bg-sky-400 px-2 py-1 text-sm font-medium text-zinc-950"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
