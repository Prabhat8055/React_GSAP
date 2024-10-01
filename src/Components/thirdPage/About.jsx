import style from "./About.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export const About = () => {
  //   useEffect(() => {
  //     gsap.from(`.${style.colon1}`,  {
  //       y: -70,
  //       x: -70,
  //       scrollTrigger: {
  //         trigger: "#colon1",
  //         scroller: "body",
  //         start: "top 55%",
  //         end: "top 45%",
  //         scrub: 3,
  //       },
  //     });
  //     gsap.from(`.${style.colon2}`,  {
  //       y: 70,
  //       x: 70,
  //       scrollTrigger: {
  //         trigger: "#colon1",
  //         scroller: "body",
  //         start: "top 55%",
  //         end: "top 45%",
  //         scrub: 3,
  //       },
  //     }, []);
  //   });

  return (
    <div className={style.container}>
      <div className={style.aboutUs}>
        <img
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="imagepp"
        />
        <div className={style.aboutUs2}>
          <h3>ABOUT US</h3>
          <p>
            The ICC is the global governing body for cricket. Representing 108
            members, the ICC governs and administrates the game and works with
            our members to grow the sport. The ICC is also responsible for the
            staging of all ICC Events.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1624193757636-b829dfa06a1b?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        ></img>
      </div>
      <div className={style.greenDiv}>
        <img
          src="https://ouch-cdn2.icons8.com/KgfWC6MGeH04_TXdJJW-ux6JRqDBAp61B5__o1BR1bs/rs:fit:368:492/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDQ1/L2JkNDdhYjNmLWI1/ZGYtNDgwMy05ZTU4/LWY4ODcyNjc5ZjMz/ZC5zdmc.png"
          alt=""
          style={{ filter: "sepia(1)", hueRotate: "30deg", brightness: "1.2" }}
        />
        <h4>
          Sign up for ICC cricket news. <br />
          Straight to your Inbox
        </h4>
        <img
          src="https://ouch-cdn2.icons8.com/KgfWC6MGeH04_TXdJJW-ux6JRqDBAp61B5__o1BR1bs/rs:fit:368:492/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDQ1/L2JkNDdhYjNmLWI1/ZGYtNDgwMy05ZTU4/LWY4ODcyNjc5ZjMz/ZC5zdmc.png"
          alt=""
          style={{ filter: "sepia(1)", hueRotate: "30deg", brightness: "1.2" }}
        />
      </div>
      <div className={style.quote}>
        <img
          className={style.colon1}
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
          style={{ filter: "sepia(1)", hueRotate: "3deg", brightness: "1.2" }}
          alt="kaka"
        />
        <p>
          It's like having 100kgs put over you. That's good enough to weigh you
          down. After that even if you put a mountain, it will not make a
          difference. <br />
          <cite>-MS DHONI</cite>
        </p>
        <img
          className={style.colon2}
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
          style={{ filter: "sepia(1)", hueRotate: "3deg", brightness: "1.2" }}
          alt=""
        />
      </div>
    </div>
  );
};
