// import { Landing } from "./Components/landingPage/Landing";
// import { Navbar } from "./Components/Navbar/Navbar";
// import { SecondPage } from "./Components/secondPage/SecondPage";

// export const App = () => {

//   return (
//     <div style={{height:"100vh"}}>
//       <Navbar />
//       <Landing />
//       <SecondPage/>
//     </div>
//   );
// };
import React, { useRef } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Landing } from "./Components/landingPage/Landing";
import { SecondPage } from "./Components/secondPage/SecondPage";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { About } from "./Components/thirdPage/About";

// Register the ScrollToPlugin with GSAP
gsap.registerPlugin(ScrollToPlugin);

export const App = () => {
  // Use refs to target specific sections
  const landingRef = useRef(null);
  const secondPageRef = useRef(null);
  const thirdPageRef = useRef(null);

  // Smooth scroll function using GSAP
  const scrollToSection = (sectionRef) => {
    gsap.to(window, {
      scrollTo: { y: sectionRef.current, offsetY: 60 }, // Scroll to the section with an optional offset
      duration: 2.5,
      ease: "sine.out",
    });
  };

  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        landingRef={landingRef}
        secondPageRef={secondPageRef}
        thirdPageRef={thirdPageRef}
      />

      {/* Section 1 */}
      <div ref={landingRef}>
        <Landing />
      </div>

      {/* Section 2 */}
      <div ref={secondPageRef}>
        <SecondPage />
      </div>
      {/*thirdPage*/}
      <div ref={thirdPageRef}>
        <About/>
      </div>
    </div>
  );
};
