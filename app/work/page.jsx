"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "App Development",
    title: "IIIT-NR App",
    description:
      "Developed a Firebase-powered college management app utilizing authentication and real-time database functionalities for streamlined gate pass approvals and optimized campus processes. Enhanced efficiency by centralizing emergency contacts and improving hostel complaint resolution.",
    stack: [
      { name: "Flutter" },
      { name: "Node.js" },
      { name: "Firebase" },
      { name: "Nginx" },
      { name: "Apache" },
      { name: "MySQL" },
      { name: "NoSQL" },
      { name: "Express.js" },
    ],
    image: "/assets/work/app.jpg",
    link: "https://play.google.com/store/apps/details?id=com.iiitnr.gatepass.hms_gatepass",
  },
  {
    num: "02",
    category: "Hackathon Project",
    title: "Smart Predicting System for Solar Energy",
    description:
      "This project was created during the Hackventure hackathon and won 3rd prize. Developed a smart system using Python and machine learning to predict solar energy generation and storage requirements. Utilized Flask to create a web-based interface for easy access and visualization of predictions, aiding efficient resource allocation in off-grid communities.",
    stack: [
      { name: "Python" },
      { name: "Machine Learning" },
      { name: "scikit-learn" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Plotly" },
      { name: "Flask" },
    ],
    image: "/assets/work/suraj.webp",
    link: "https://github.com/shubham-gupta0/solar-prediction",
  },
];

const Work = () => {
  const [project, setproject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentindex = swiper.activeIndex;
    setproject(projects[currentindex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition:{delay:2.4, duration:0.4, ease:"easeIn"}
      }}
      className="min-h-[80vh] flex flex-col justify-center py12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover: text-accent transition-all duration-500 capitalize">
                {/* {" "} */}
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/68">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttan */}
              <div className="flex items-center gap-4 ">
                <Link href={project.link}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className=" object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderButtons containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
