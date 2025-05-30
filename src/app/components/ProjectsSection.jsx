"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 1,
    title: "Blink-Tic-Tac-Toe",
    description: "A playful 2-player emoji-based Tic Tac Toe with a twist—older moves vanish, adding strategic depth. Align 3 emojis to win, but plan carefully as only your latest 3 remain on the board!",
    image: "/images/projects/blink-tic-tac.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adamyatiwari12/Blink-Tic-Tac-Toe",
    previewUrl: "https://blink-tic-tac-toe-one.vercel.app/",
  },
  {
    id: 2,
    title: "UX Audit Tool",
    description: "An intelligent UX audit tool that analyzes websites or HTML to give actionable improvement tips. It checks structure, content, and design, with AI-powered feedback on clarity, hierarchy, and trust.",
    image: "/images/projects/ux-audit.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adamyatiwari12/UX-Audit-Tool",
    previewUrl: "https://ux-audit-tool.vercel.app/",
  },
  {
    id: 3,
    title: "NutriTrack",
    description: "A smart nutrition tracker that lets users log meals, track calories and macros, and visualize daily progress. With real-time food search and interactive charts, it promotes healthy eating through clear insights.",
    image: "/images/projects/nutri-track.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adamyatiwari12/Nutrition-Tracker",
    previewUrl: "https://nutrition-tracker-mu.vercel.app/",
  },
  {
    id: 4,
    title: "Job Huntly Demo Website",
    description: "A responsive job hunting demo app where users can browse jobs, apply easily, and track applications.",
    image: "/images/projects/job-huntly.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adamyatiwari12/job-huntly-demo-website",
    previewUrl: "https://job-huntly-demo-website.vercel.app/",
  },
  {
    id: 5,
    title: "Expense Tracker and Splitter",
    description: "A responsive web app to track and split expenses in real-time with a clean and intuitive UI.",
    image: "/images/projects/expense.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adamyatiwari12/Expense-Tracker-and-Splitter",
    previewUrl: "https://expense-tracker-and-splitter.vercel.app/",
  },
  {
    id: 6,
    title: "Tic Tac Toe Game",
    description: "A classic Tic Tac Toe game, allowing two players to compete in a turn-based match.",
    image: "/images/projects/tic-tac.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adamyatiwari12/Tic-Tac-Toe",
    previewUrl: "https://adamyatiwari12.github.io/Tic-Tac-Toe/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-8">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="w-full"
          >
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;