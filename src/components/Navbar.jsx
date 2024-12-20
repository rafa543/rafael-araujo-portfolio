import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";

    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";

    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
  };

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";

    activeBox.current.style.left = event.target.offsetLeft + "px";

    activeBox.current.style.width = event.target.offsetWidth + "px";

    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  const navItems = [
    {
      label: "Início",
      link: "#inicio",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "Sobre",
      link: "#sobre",
      className: "nav-link",
    },
    {
      label: "Trabalho",
      link: "#trabalho",
      className: "nav-link",
    },
    // {
    //   label: "Avaliações",
    //   link: "#avaliações",
    //   className: "nav-link",
    // },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.prototype = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
