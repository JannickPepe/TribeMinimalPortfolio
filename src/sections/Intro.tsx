"use client";

import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  // Ensure text is split before animation runs
  useEffect(() => {
    if (!scope.current) return;

    const heading = scope.current.querySelector("h1");
    if (!heading) return;

    new SplitType(heading, {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  // Animation effect with safety checks
  useEffect(() => {
    if (inView && scope.current) {
      const words = scope.current.querySelectorAll(".word");
      console.log("Words found:", words.length, words);

      if (words.length > 0) {
        animate(
          words,
          {
            transform: "translateY(0%)",
          },
          {
            duration: 0.5,
            delay: stagger(0.2),
          }
        );
      }
    }
  }, [animate, inView, scope]);

  return (
    <section ref={scope} id="intro" className="section mt-12 md:mt-16 lg:mt-20">
      <div className="container">
        <h1 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          Building beautiful websites with clean code, and thoughtful design to help your business grow and stand out online
        </h1>
      </div>
    </section>
  );
};

export default Intro;
