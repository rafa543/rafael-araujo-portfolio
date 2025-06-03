import { ButtonOutline, ButtonPrimary } from "./Button";
import HeroBanner from "@/assets/images/hero-banner3.png";

const Hero = () => {
  return (
    <section id="inicio" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg-gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQG7vO_vNUGbFA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728056309998?e=1754524800&v=beta&t=DLX6zMN-Okeg369OjYeBYHRNAPiGhuK2i7hjIWI-NY0"
                width={40}
                height={40}
                alt="Rafael araujo"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Disponível
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Desenvolvedor Full Stack
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" href="/cv.pdf" />
            <ButtonOutline
              href="#sobre"
              label="Ir para baixo"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto bg-gradient-to-t 
          from-sky-400 via-25% via-sky-40/40 to-65% rounded-[60px] overflow-hidden"
          >
            <img
              src={HeroBanner}
              alt="Rafael Araujo"
              className="w-full"
              width={656}
              height={800}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
