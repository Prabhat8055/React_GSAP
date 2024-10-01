import styles from "./Landing.module.css";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { FaArrowDown } from "react-icons/fa";

export const Landing = () => {
  useEffect(() => {
    const text = new SplitType(".singleLine", { types: "words, chars" });

    const t1 = gsap.timeline();
    t1.from(".char", {
      opacity: 0,
      scale: 0.5,
      y: 100,
      ease: "back.out(1.7)",
      stagger: {
        amount: 1,
        from: "start", // animating from start
      },
      duration: 1.2,
      delay: 0.5,
    });
    gsap.fromTo(
      `.paragraph`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power4.out",
        duration: 1.5,
        delay: 1.5,
      }
    );
    // Video fade-out on scroll
    gsap.fromTo(
      ".videoFade",
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".videoFade",
          ease: "circ.out",
          start: "top center", 
          end: "120% top", 
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      <video
        className={`${styles.mainImage} videoFade`}
        src={`${process.env.PUBLIC_URL}/assects/video.mp4`}
        autoPlay
        muted
        loop
      />
       {/* <video
        className={`${styles.mainImage} videoFade`}
        src={`${process.env.PUBLIC_URL}/assets/video.mp4`}
        autoPlay
        muted
        loop
      /> */}
      <div className={styles.textContainer}>
        <div className={`${styles.overlayText} singleLine`}>
          <span>PLAY</span> <span>EAT</span> <span>REPEAT</span>
        </div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          ratione iure nisi ipsa fuga dolorem incidunt recusandae? Maxime, hic
          temporibus magnam minus quidem ut modi rem quae adipisci, totam
          doloribus.
        </p>
      </div>
      <div className={styles.arrow}>
        <i>
          {" "}
          <FaArrowDown style={{ color: "#fff" }} />
        </i>
      </div>
    </div>
  );
};
