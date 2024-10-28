import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrOracle } from "react-icons/gr";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Skill = () => {
  return (
    <section className="section reveal-up">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Ferramentas essenciais que eu uso
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Descubra as ferramentas e tecnologias poderosas que uso para criar
          sites e aplicativos excepcionais e de alto desempenho.
        </p>
        <div className="container border-b border-neutral-800 pb-24 reveal-up">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:bg-zinc-700 transition-colors">
              <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:bg-zinc-700 transition-colors">
              <GrOracle className="text-7xl text-red-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:bg-zinc-700 transition-colors">
              <SiSpringboot className="text-7xl text-green-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:bg-zinc-700 transition-colors">
              <FaJava className="text-7xl text-blue-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:bg-zinc-700 transition-colors">
              <TbBrandNextjs className="text-7xl" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:bg-zinc-700 transition-colors">
              <SiMongodb className="text-7xl text-green-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:bg-zinc-700 transition-colors">
              <DiRedis className="text-7xl text-red-700" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:bg-zinc-700 transition-colors">
              <FaNodeJs className="text-7xl text-green-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:bg-zinc-700 transition-colors">
              <img
                src="/src/assets/images/figma.svg"
                className=""
                width={72}
                height={72}
              />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:bg-zinc-700 transition-colors">
              <BiLogoPostgresql className="text-7xl text-sky-700" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:bg-zinc-700 transition-colors">
              <RiTailwindCssFill className="text-7xl text-sky-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
