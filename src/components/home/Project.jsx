"use client";

import "./Project.scss";
import Image from "next/image";
import aboutImage from "../../../public/home/trailer-side-media.png";
import aboutImage02 from "../../../public/home/about-avatar.png";
import aboutBg from "../../../public/home/about-bg.png";
import modelBg from "../../../public/home/bg-game-01.png";
import modelAvatar from "../../../public/home/avatar-03.png";
import aboutMix from "../../../public/home/mask-05.jpg";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import "splitting/dist/splitting-cells.css";
import "splitting/dist/splitting.css";
// import Splitting from "splitting";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
// Splitting();

const Project = () => {
  // trigger ref
  const shapeRef = useRef(null);
  const tModel = useRef(null);
  const aboutMixBg = useRef(null);
  const aboutMixImage = useRef(null);
  const modelMask = useRef(null);
  const textModel = useRef(null);
  const textModel02 = useRef(null);
  const triggerAni = useRef(null);
  const inTro = useRef(null);
  const aboutTxt01 = useRef(null);
  const aboutTxt02 = useRef(null);
  const aboutNumber = useRef(null);
  const aboutDesc = useRef(null);
  const aboutVideo = useRef(null);
  const botImage = useRef(null);
  const matrix3D = useRef(null);
  const triggerVideo = useRef(null);

  // animation mousemove
  const [xTranslate, setXTranslate] = useState(0);
  const [yTranslate, setYTranslate] = useState(0);

  const [xTranslate01, setXTranslate01] = useState(0);
  const [yTranslate01, setYTranslate01] = useState(0);

  const [xTranslate02, setXTranslate02] = useState(0);
  const [yTranslate02, setYTranslate02] = useState(0);

  // scramble text
  const [output, setOutput] = useState("");
  const [mojicount, setMojicount] = useState(0);
  const [shuffle, setShuffle] = useState(0);
  const [scrambleActive, setScrambleActive] = useState(false);
  const [txt, setTxt] = useState("");
  const blockValueRef = useRef(null);
  const speed = 2;
  const shuffleCount = 5;
  const random = "#*&%!1234567ABC";

  const scramble = () => {
    const LIMIT = txt.length;
    if (output.length < LIMIT) {
      if (shuffle < shuffleCount) {
        const mix = Math.floor(Math.random() * random.length);
        const newOutput = txt.slice(0, mojicount) + random[mix];
        setOutput(newOutput);
        setShuffle(shuffle + 1);
      } else {
        setMojicount(mojicount + 1);
        setShuffle(0);
      }
    } else {
      setOutput(txt);
    }
  };

  useEffect(() => {
    // split text
    import("splitting").then((module) => {
      const Splitting = module.default;
      const target = document.querySelectorAll(".spltjs");
      const results = Splitting({ target: target, by: "chars" });
      const charsIndex = results[0].chars;
      const charsIndex01 = results[1].chars;

      // animation mousemove
      const skewItemContainer = document.querySelector(".skew");
      const skewItem = document
        .querySelector(".skew__item")
        .getBoundingClientRect();
      const imageCenterX = skewItem.left + skewItem.width / 2;
      const imageCenterY = skewItem.top + skewItem.height / 2;

      const handleMouseMove = (e) => {
        const clientX = e.clientX;
        const clientY = e.clientY;

        const xCalc = (clientX - imageCenterX) * 0.0000002;
        const yCalc = (clientY - imageCenterY) * 0.0000002;

        const xCalc01 = (clientX - imageCenterX) * 0.0000008;
        const yCalc01 = (clientY - imageCenterY) * 0.0000008;

        const xCalc02 = (clientX - imageCenterX) * 0.0000004;
        const yCalc02 = (clientY - imageCenterY) * 0.0000004;

        setXTranslate(xCalc);
        setYTranslate(yCalc);
        setXTranslate01(xCalc01);
        setYTranslate01(yCalc01);
        setXTranslate02(xCalc02);
        setYTranslate02(yCalc02);
      };
      skewItemContainer.addEventListener("mousemove", handleMouseMove);

      // Animation text
      gsap.set([charsIndex, charsIndex01], {
        opacity: 0,
      });

      // Animation using GSAP
      gsap.set(tModel.current, {
        scale: "4.5",
        x: "-2%",
        y: "-44%",
      });
      gsap.set(aboutTxt01.current, {
        y: "150%",
        opacity: 0,
      });
      gsap.set(aboutTxt02.current, {
        y: "200%",
        opacity: 0,
      });
      gsap.set(aboutNumber.current, {
        y: "150%",
        opacity: 0,
      });
      gsap.set(botImage.current, {
        y: "30%",
        opacity: 0,
      });
      gsap.set(aboutDesc.current, {
        opacity: 0,
      });
      gsap.set(aboutVideo.current, {
        scaleX: 0.8,
        scaleY: 0.5,
        x: "-60%",
        y: "0%",
        rotateY: "64deg",
      });

      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".project-item-intro",
          start: "top+=200 top",
          end: "bottom 30%",
          scrub: true,
          stagger: 0.2,
        },
      });

      let t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger-key-one",
          start: "top+=200 top",
          end: "bottom-=200 bottom",
          scrub: true,
          onEnter: function () {},
          onEnterBack: function () {},
          onLeaveBack: ({ progress, direction, isActive }) => {
            gsap.set([textModel02.current], {
              opacity: 0,
            });
          },

          onLeave: function () {
            // console.log("onLeave");
          },
        },
      });

      let t4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".project",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          // markers:true,
        },
      });

      let t5 = gsap.timeline({
        scrollTrigger: {
          trigger: triggerVideo.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      let t6 = gsap.timeline({
        scrollTrigger: {
          trigger: triggerAni.current,
          start: "top center",
          end: "bottom center",
          // markers:true,
          // scrub: 2,
          onLeaveBack: () => {
            gsap.set([textModel.current], {
              opacity: 0,
            });
          },
          onEnter: ({ progress, direction, isActive }) => {
            // console.log("progress",progress, "direction", direction, "isActive",isActive)
            gsap.set([textModel.current, textModel02.current], {
              opacity: 1,
            });
          },
        },
      });

      let t7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top 30%",
          end: "bottom 30%",
          // markers: true,
          onEnter: () => setScrambleActive(true),
        },
      });

      let t8 = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger-key-two",
          start: "top bottom",
          end: "bottom bottom",
          // markers: true,
          scrub: true,
        },
      });

      t2.to(
        inTro.current,
        {
          opacity: "0",
          scrub: true,
          duration: 1,
        },
        "key0"
      );

      t3.to(
        aboutTxt01.current,
        {
          y: "0%",
          opacity: "1",
          duration: 4,
          stagger: 1,
          ease: "power4.inOut",
        },
        "key0"
      )
        .to(
          aboutTxt02.current,
          {
            y: "0",
            opacity: "1",
            duration: 4,
            delay: 0.1,
            ease: "power4.inOut",
          },
          "key0"
        )
        .to(
          aboutNumber.current,
          {
            opacity: "1",
            stagger: 1,
          },
          "key0"
        )
        .to(
          botImage.current,
          {
            y: "-50%",
            opacity: "1",
            duration: 4,
            delay: 0.2,
            ease: "power4.inOut",
          },
          "key0"
        )
        .to(
          aboutDesc.current,
          {
            opacity: "1",
            // stagger:.5,
            duration: 4,
            ease: "power4.inOut",
          },
          "key0"
        );

      t4.to(
        tModel.current,
        {
          scale: ".6",
          x: "2%",
          y: "20%",
          duration: 3,
          // rotate: "1deg",
          ease: "power1.inOut",
        },
        "key0"
      ).to(
        tModel.current,
        {
          scale: "2",
          x: "2%",
          y: "-8%",
          duration: 2,
          rotateY: -91.86,
          // delay: 0.1,
          transform: "matrix(1, -0.05, 0.05, 1, 0, 0)",
        },
        "key1"
      );

      t5.to(
        aboutVideo.current,
        {
          opacity: 1,
          scale: 1,
          x: "0%",
          y: "8%",
          rotateY: "0",
          stagger: 0.5,
          ease: "expoScale(0.4,7,none)",
        },
        "key0"
      );

      t6.to(
        [charsIndex, charsIndex01],
        {
          opacity: 1,
          stagger: 0.03,
          delay: 0.3,
          duration: 0.2,
          ease: "power3.inOut",
        },
        "key0"
      ).fromTo(
        ".handle",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          repeat: -1,
          yoyo: true,
        },
        "key0"
      );

      t8.to(
        aboutTxt01.current,
        {
          duration: 1,
          y: "-150%",
          opacity: "0",
          ease: "power.out",
        },
        "key0"
      )
        .to(
          aboutTxt02.current,
          {
            duration: 1,
            y: "-150%",
            opacity: "0",
            ease: "power.out",
          },
          "key0"
        )
        .to(
          aboutNumber.current,
          {
            duration: 1,
            opacity: "0",
            stagger: 1,
            ease: "power.out",
          },
          "key0"
        )
        .to(
          botImage.current,
          {
            duration: 1,
            y: "-80%",
            opacity: "0",
            ease: "power.out",
          },
          "key0"
        )
        .to(
          aboutDesc.current,
          {
            duration: 5,
            opacity: "0",
            ease: "power.out",
          },
          "key0"
        )
        .to(
          shapeRef.current,
          {
            duration: 1,
            opacity: 1,
            scale: 1,
            rotateY: 90,
            y: "-20%",
            stagger: 0.5,
          },
          "key0"
        );

      const blockValue = blockValueRef.current;
      const dataValue = blockValue
        ?.querySelector(".test")
        ?.getAttribute("data-value");
      if (dataValue) {
        setTxt(dataValue);
      }
      setShuffle(0);
      setMojicount(0);
      setOutput("");

      return () => {
        skewItemContainer.removeEventListener("mousemove", handleMouseMove);
        if (t2) t2.kill();
        if (t3) t3.kill();
        if (t4) t4.kill();
        if (t5) t5.kill();
        if (t6) t6.kill();
        if (t7) t7.kill();
        if (t8) t8.kill();
      };
    });
  }, [txt]);

  useEffect(() => {
    if (scrambleActive) {
      const intervalId = setInterval(scramble, speed);
      return () => clearInterval(intervalId);
    }
  }, [scrambleActive, output, mojicount, shuffle, txt]);

  const skewStyle = {
    transform: `matrix3d(1, 0, 0, ${xTranslate}, 0, 1, 0, ${yTranslate}, 0, 0, 1, 0, 0, 0, 0, 1)`,
  };
  const skewStyle01 = {
    transform: `matrix3d(1, 0, 0, ${xTranslate01}, 0, 1, 0, ${yTranslate01}, 0, 0, 1, 0, 0, 0, 0, 1)`,
  };
  const skewStyle02 = {
    transform: `matrix3d(1, 0, 0, ${xTranslate02}, 0, 1, 0, ${yTranslate02}, 0, 0, 1, 0, 0, 0, 0, 1)`,
  };

  return (
    <div className="project">
      <div className="project-item-trigger" ref={triggerVideo}></div>
      <div className="project-item-trigger-ani" ref={triggerAni}></div>
      <div className="project-model-re">
        <div className="project-model">
          <div className="skew" ref={tModel}>
            <div
              className="project-model-inner skew__item"
              style={skewStyle}
              ref={matrix3D}
            >
              <div className="project-model-mask" ref={modelMask}>
                <div className="project-model-bg">
                  <div className="inner" style={skewStyle02}>
                    <Image src={modelBg} alt="Image Error" />
                  </div>
                </div>
                <div className="project-model-avatar">
                  <div className="inner" style={skewStyle01}>
                    <Image src={modelAvatar} alt="Image Error" />
                  </div>
                </div>
                <div className="text-model" ref={textModel}>
                  <div className="handle"></div>
                  <div className="spltjs">ANIMUS CHARACTER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-item project-item-intro">
        <div className="intro" ref={inTro}>
          <div className="container">
            <p className="intro-desc">
              KPR is a brand that focuses on collective narrative and empowering
              storytellers. Keepers is a living story, an uncharted world
              waiting to be explored, to be imagined.
            </p>
            <div className="intro-list">
              <div className="intro-item">
                <div className="intro-number">01K</div>
                <div className="intro-tt">KEEP.</div>
              </div>
              <div className="intro-item">
                <div className="intro-number">02P</div>
                <div className="intro-tt">PROJECT.</div>
              </div>
              <div className="intro-item">
                <div className="intro-number">03R</div>
                <div className="intro-tt">REIMAGINE.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-item-two project-item-about">
        <div className="trigger-key-one"></div>
        <div className="trigger-key-two"></div>
        <div className="about">
          <div className="container">
            <div className="about-wrap">
              <div className="about-left">
                <div className="about-tt">
                  <div className="number">
                    <div className="inner" ref={aboutNumber}>
                      001
                    </div>
                  </div>
                  <div className="about-tt-wrap">
                    <span className="txt" ref={aboutTxt01}>
                      A FAMILIAR WORLD... SET
                    </span>
                    <span className="txt" ref={aboutTxt02}>
                      ON A DIFFERENT PATH.
                    </span>
                  </div>
                </div>
                <div className="about-bot">
                  <div className="about-bot-image" ref={botImage}>
                    <Image src={aboutImage} alt="Image Error" />
                  </div>
                  <div className="desc" ref={aboutDesc}>
                    <div className="wrapper block-value" ref={blockValueRef}>
                      <div
                        className="test"
                        data-value="Isolated within the New Eden safe zone, you witness humanity struggling to avoid descending into chaos."
                      >
                        {output}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-right">
                <div className="about-right-inner" ref={aboutVideo}>
                  <div className="about-right-image">
                    <div className="about-right-model">
                      <div className="inner">
                        <Image src={aboutBg} alt="Image Error" />
                      </div>
                    </div>
                    <div className="about-right-avatar">
                      <Image src={aboutImage02} alt="Image Error" />
                    </div>
                    <div className="text-model style-pri" ref={textModel02}>
                      <div className="handle"></div>
                      <div className="spltjs">TRAILER V.004</div>
                    </div>
                  </div>
                  <div className="block-shape">
                    <div className="shape">
                      <div className="scale">
                        <div className="rotate" ref={shapeRef}>
                          <div className="img">
                            <svg
                              width="2835"
                              height="4080"
                              viewBox="0 0 2835 4080"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="hsc-img-path"
                                d="M0 159.235C0 70.1684 73.1534 -1.52668 162.202 0.266758L1713 31.5L1902.5 244H2676C2763.81 244 2835 315.187 2835 403V3711L2585.5 4004L246.611 4079.22C156.841 4082.11 82.5 4010.12 82.5 3920.3V2477L0 2369.5V159.235Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
