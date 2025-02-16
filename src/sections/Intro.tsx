"use client";

import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";
import useTextRevealAnimaton from "@/hooks/useTextRevealAnimation";

const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimaton();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation])


  return (
    <section ref={sectionRef} id="intro" className="section mt-12 md:mt-16 lg:mt-20">
      <div className="container">
        <h1 ref={scope} className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          Building beautiful websites with clean code, and thoughtful design to help your business grow and stand out online
        </h1>
      </div>
    </section>
  );
};

export default Intro;
