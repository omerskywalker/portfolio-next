"use client"

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Tailwind</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>University of Louisiana-Monroe</li>
                <li>Juno College - Advanced JS</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Engineer - Lumen Technologies</li>
                <li>Front End Developer - Macy's Technology</li>
                <li>Freelance Developer - Self Employed</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
           setTab(id); 
        })
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image className="rounded-3xl" src="/images/microphone.jpg" alt="coding graphic" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus voluptates similique maxime, quasi inventore tempora totam provident nihil possimus facilis, sint modi sunt laborum deleniti perspiciatis tempore sit vero.

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque enim dignissimos inventore dolorem facere minima similique harum possimus impedit aliquam obcaecati, eligendi cupiditate fugiat provident quis nemo hic vel. Dolore?

                        <br /> <br></br>

                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius molestias harum amet consequatur repellendus, vitae voluptatibus cum tenetur vel officia obcaecati corrupti. Alias laborum, fugiat blanditiis necessitatibus adipisci quibusdam.
                    </p>
                    <div className="flex flex-row mt-8 justify-start">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} >Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} >Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"} >Experience</TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;