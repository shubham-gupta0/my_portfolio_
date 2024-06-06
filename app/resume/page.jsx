"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiMysql,
  SiOracle,
  SiDart,
  SiGit,
  SiVisualstudiocode,
  SiPowershell,
  SiFirebase,
  SiFlutter,
  SiFlask,
  SiExpress,
  SiSwagger,
  SiNodedotjs,
} from "react-icons/si";

const about = {
  title: "About Me",
  description: "abcd",
  info: [
    {
      fieldname: "Name",
      fieldvalue: "Shubham Gupta",
    },
    {
      fieldname: "Phone",
      fieldvalue: "(+91) 8299752930",
    },
    {
      fieldname: "Nationality",
      fieldvalue: "INDIAN",
    },
    {
      fieldname: "Email",
      fieldvalue: "shubhamgupta.exe@gmail.com",
    },
  ],
};

const experience = {
  icon: "assets/resume/badge.svg",
  title: "My Experience",
  items: [
    {
      company: "Leopardruns Innovation",
      position: "Software Developer Intern",
      duration: "March 2024 - April 2024",
    },
    {
      company: "IIIT-NR",
      position: "App Admin & Developer",
      duration: "August 2023 - Present",
    },
  ],
};

const education = {
  icon: "assets/resume/cap.svg",
  title: "My Education",
  items: [
    {
      institution: "IIIT-NR",
      degree: "B.Tech in DSAI",
      duration: "November 2022 - Present",
    },
  ],
};

const skills = {
  title: "My skills",
  skillList: [
    {
      icon: <SiCplusplus />,
      name: "C/C++",
    },
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiOracle />,
      name: "Oracle",
    },
    {
      icon: <SiDart />,
      name: "Dart",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiNodedotjs />,
      name: "Node.js",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiVisualstudiocode />,
      name: "VS Code",
    },
    {
      icon: <SiPowershell />,
      name: "Powershell",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <SiSwagger />,
      name: "REST",
    },
  ],
};

export const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,

        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                {/* <p className="max--[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* bindu */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                {/* <p className="max--[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* bindu */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldname}</span>
                        <span className="text-xl">{item.fieldvalue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
