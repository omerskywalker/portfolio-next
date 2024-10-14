"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center pl-4 text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600">Hello, I'm{" "}</span>Omer</h1>

                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600">and I am a {" "}</span>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'developer',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'creator',
                            1000,
                            'programmer',
                            1000,
                            'bitcoiner',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE text-base sm:text-xl mb-6 tracking-wider leading-10">I build modern web applications with a focus on clean code, intuitive design, and seamless user experiences. From front-end elegance to back-end resilience, I bring ideas to life through code.</p>
                    <div>
                        <button className="w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-orange-500 -via-white-500 to-yellow-600 text-white font-bold hover:bg-slate-200">Hire Me</button>
                        <button className="w-full sm:w-fit px-1 py-1 rounded-full bg-gradient-to-br from-orange-500 via-white-500 to-yellow-600  hover:bg-orange-400 text-white font-bold mt-3"><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="bg-[#cc7300] rounded-full w-[400px] h-[400px] lg:w-[350px] lg:h-[350px] relative">
                        <Image priority className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={300} height={300} alt="hero img" src="/images/hero-img.jpeg"></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;