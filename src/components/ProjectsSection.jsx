"use client"

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "DebunkTheFud",
    description: "A simplified resource for debunking common criticism towards Bitcoin",
    image: "/images/projects/icfla-img.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "ICFLA",
    description: "A landing page for a local non-profit",
    image: "/images/projects/dtf-img.png",
    tag: ["All", "Client"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "DebunkTheFud",
    description: "A simplified resource for debunking common criticism towards Bitcoin",
    image: "/images/projects/icfla-img.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "ICFLA",
    description: "A landing page for a local non-profit",
    image: "/images/projects/dtf-final.png",
    tag: ["All", "Client"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "DebunkTheFud",
    description: "A simplified resource for debunking common criticism towards Bitcoin",
    image: "/images/projects/icfla-img.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "ICFLA",
    description: "A landing page for a local non-profit",
    image: "/images/projects/dtf-final.png",
    tag: ["All", "Client"],
    gitUrl: "/",
    previewUrl: "/"
  }
]

const ProjectsSection = () => {

  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="Personal" isSelected={tag === "Personal"} />
          <ProjectTag onClick={handleTagChange} name="Client" isSelected={tag === "Client"} />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{filteredProjects.map((project) => {
            const { id, title, description, image, gitUrl, previewUrl } = project;
            return (
              <ProjectCard key={id} title={title} description={description} imgUrl={image} gitUrl={gitUrl} previewUrl={previewUrl} />
            )
        })}</div>
    </>
  )
}

export default ProjectsSection