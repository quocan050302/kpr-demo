"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import "./HomeLaunch.scss";
import { hexaframe, ibmFlexMono } from "@/styles/fonts";
import { useScramble } from "use-scramble";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HomeLaunch = () => {
  const { ref } = useScramble({
    text: "What path will you forge as you become the Keeper of your destiny?",
    range: [65, 125],
    speed: 0.8,
    tick: 1,
    step: 1,
    scramble: 3,
    seed: 0,
    chance: 1,
    overdrive: false,
    overflow: true,
    playOnMount: true,
    onAnimationStart: () => console.log("animation started"),
    onAnimationFrame: (result) => console.log(result),
  });

  useEffect(() => {
    const spans = (n) => `.caption__text span:nth-child(${n})`;
    const t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".homeSection",
          start: "top-=200 top",
          end: "bottom bottom",
          //   markers: true,
          //   scrub: true,
          //   onEnter: () => {
          //     if (ref.current) {
          //       ref.current.textContent =
          //         "What path will you forge as you become the Keeper of your destiny?";
          //     }
          //   },
        },
      })
      .fromTo(
        [spans(1), spans(2), spans(3)],
        { opacity: 0 },
        { opacity: 1, stagger: 0.05 },
        "key1"
      )
      .fromTo(
        [spans(4), spans(5), spans(6)],
        { opacity: 0 },
        { opacity: 1, delay: 0.13, stagger: 0.05, ease: "power3" },
        "key1"
      )
      .fromTo(
        [
          spans(8),
          spans(10),
          spans(11),
          spans(12),
          spans(13),
          spans(14),
          spans(15),
        ],
        { opacity: 0 },
        { opacity: 1, delay: 0.18, ease: "power3", stagger: 0.05 },
        "key1"
      )
      .fromTo(
        ".caption__dot",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          repeat: 6,
          ease: "back.inOut",
          delay: 0.7,
        },
        "key1"
      );

    return () => {
      t1.kill();
    };
  }, []);
  return (
    <section
      className="homeLaunch homeLaunch--buy homeSection"
      style={{
        opacity: 1,
        pointerEvents: "auto",
        visibility: "visible",
        paddingBottom: "100vh",
      }}
    >
      <div className="homeLaunch__inner sectionInner">
        <div className="homeLaunch__overflow">
          <div
            data-ui="grid"
            className="homeLaunch__grid"
            style={{ transform: "translate(0px, 0px)" }}
          >
            <div className="homeLaunch__gridItem" data-ui="tl">
              <div className="homeLaunch__title">
                <h1
                  className={`js-bigText title ${hexaframe.className}`}
                  style={{ transform: "translate(0px, 0px)" }}
                >
                  KEEPERS
                </h1>
              </div>
              <hr
                className="js-line line--bottom homeLaunch__line dark"
                style={{ opacity: 1 }}
              />
            </div>
            <div className="homeLaunch__gridItem" data-ui="bl">
              <div className={`caption type-caption2 ${ibmFlexMono.className}`}>
                <div
                  data-ui="dot"
                  className="caption__dot"
                  style={{ opacity: 1 }}
                ></div>
                <p data-ui="text" className="caption__text">
                  {"Become a Keeper".split("").map((char, i) => (
                    <span
                      key={i}
                      style={{
                        position: "relative",
                        display: "inline-block",
                        opacity: 1,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </p>
              </div>
              <div className="homeLaunch__launchBtn" data-ui="launch-btn">
                <p
                  data-ui="body"
                  className={`type-body1 ${ibmFlexMono.className}`}
                  style={{ contain: "content", position: "relative" }}
                >
                  {/* <span
                    style={{
                      top: 0,
                      left: 0,
                      maxWidth: "100%",
                      position: "absolute",
                    }}
                  >
                    What path will you forge as you become the Keeper of your
                    destiny?
                  </span> */}
                  {/* <span style={{ opacity: 1 }}>
                    What path will you forge as you become the Keeper of your
                    destiny?
                  </span> */}
                  <span ref={ref}></span>
                </p>
                <div
                  className="homeLaunch__btnWrapper"
                  data-ui="btnWrapper"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLaunch;
