"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Welcome to my
        <span className="font-medium"> portfolio!</span>, 
        I'm a final year B.Tech student majoring in{" "}
        <span className="font-medium">
          Computer Science and Engineering 
        </span>
        {" "}with a passion for technology and innovation, specializing in{" "}
        <span className="font-medium">
          FullStack Development
        </span>
        .{" "}
        <span className="italic">
          My journey has equipped me with a strong foundation in
        </span>{" "}
        computer science, programming languages, and the principles of
        web development. As <span className="underline">FullStack Developer</span> I
        excel in creating engaging user interfaces , and ensuring a seamless user experience.
      </p>

      <p>
        <span className="italic">My vision is to</span>, contribute to
        innovative projects and create meaningful solutions, and I'm actively{" "}
        <span className="font-medium">seeking a full-time position </span> to
        apply my skills and grow as a developer.
        <span className="font-medium">
          {" "}
          If you're looking for a dynamic and driven developer to join your
          team,
        </span>{" "}
        let's connect and build the future together!{" "}
      </p>
    </motion.section>
  );
}
