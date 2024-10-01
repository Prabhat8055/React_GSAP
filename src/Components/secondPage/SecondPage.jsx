import style from "./SecondPage.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Cards from "./Cards";
import data1 from "./Data";


gsap.registerPlugin(ScrollTrigger);

export const SecondPage = () => {
  useEffect(() => {
    // GSAP ScrollTrigger animation for scrolling on reveal with smoothness
    gsap.fromTo(
      `.${style.scroller1}`,
      { x: "100%", opacity: 0 }, // Start from the right side, invisible
      {
        x: "0%", // End at its original position
        opacity: 1, // End fully visible
        duration: 2, // Duration of the animation
        ease: "power2.out", // Use a smoother ease
        scrollTrigger: {
          trigger: `.${style.scroller}`, // Trigger when .scroller enters the viewport
          start: "top 65%", // Start animation when the top of the scroller is 80% from the top of the viewport
          end: "bottom 60%", // End when the bottom of the scroller reaches 60% of the viewport
          scrub: 1, // A higher value makes the scroll smoother
        },
      }
    );
    // Animation for Past Events section
    gsap.fromTo(
      `.${style.past},.${style.pastEvents}`,
      { opacity: 0, y: 50 }, // Start with opacity 0 and move up
      {
        opacity: 1,
        y: 0, // Animate to full opacity and original position
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${style.past}`, // Trigger when the past events section enters the viewport
          start: "top 75%",
          end: "bottom 50%",
          scrub: 1,
        },
      }
    );

    // Animation for Upcoming Events section
    gsap.fromTo(
      `.${style.upcomming}`,
      { opacity: 0, y: 50 }, // Start with opacity 0 and move up
      {
        opacity: 1,
        y: 0, // Animate to full opacity and original position
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${style.upcomming}`, // Trigger when the upcoming events section enters the viewport
          start: "top 75%",
          end: "bottom 50%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className={style.page2}>
      <div className={style.scroller}>
        <div className={`${style.scroller1} scroller1`}>
          <h4>TOPTRACER RANGE</h4>
          <h4>CRICKET LESSONS</h4>
          <h4>CRICKET WEARS</h4>
          <h4>LEAGUES</h4>
          <h4>CONTACT US</h4>
        </div>
      </div>
      <h1 className={style.events}>
        <span>Events</span>
      </h1>
      <h2 className={style.pastEvents}>Past Events</h2>
      <div className={style.past}>
      {data1.map((item, index) => (
        <Cards
          title={item.title}
          info={item.info}
          image={item.image}
        />
      ))}
      </div>
      <h2 className={style.upcommingEvents}>Upcomming Events</h2>
      <div className={style.upcomming}>
      {data1.map((item, index) => (
        <Cards
          title={item.title}
          info={item.info}
          image={item.image}
        />
      ))}
      </div>
    </div>
  );
};
