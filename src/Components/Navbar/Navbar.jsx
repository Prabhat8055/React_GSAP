import style from "./Navbar.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Navbar = ({ scrollToSection, landingRef, secondPageRef }) => {
  useEffect(() => {
    // GSAP animation for scrolling
    gsap.to(`.${style.header} `, {
      backgroundColor: "#ffffff",
      boxShadow:"5px 5px 5px #FFBF00",
      ease: "power1.out",
      scrollTrigger: {
        trigger: `.${style.header}`,
        start: "1150vh 500vh",
        toggleActions: "play none none reverse", 
        scrub: 2,
      },
    });
    gsap.to(`.${style.navbar} a`, {
      color: "#000000", // Change text color to black
      ease: "power1.out",
      scrollTrigger: {
        trigger: `.${style.header}`,
        start: "1150vh 500vh", // Start at the same scroll position
        toggleActions: "play none none reverse", // Reverse when scrolling up
        scrub: 2,
      },
    });
    gsap.to(`.${style.logo}`, {
      color: "#000000", // Change text color to black
      ease: "power1.out",
      scrollTrigger: {
        trigger: `.${style.header}`,
        start: "1150vh 500vh", // Start at the same scroll position
        toggleActions: "play none none reverse", // Reverse when scrolling up
        scrub: 2,
      },
    });
  }, []);
  return (
    <header className={`${style.header} headder`}>
      <a href="/" className={style.logo}>
        Logo
      </a>

      <nav className={style.navbar}>
        <a href="/">Home</a>
        <a href="/" onClick={() => scrollToSection(secondPageRef)}>
          About
        </a>
        <a href="/">Portfolio</a>
        <a href="/">Services</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  );
};
