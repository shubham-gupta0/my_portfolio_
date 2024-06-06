import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Social } from "@/components/Social";
import { Photo } from "@/components/Photo";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1">
              Hello I'm
              <br />
              <span className="text-accent">Shubham Gupta</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Skilled at creating innovative applications using programming languages like C/C++, Python, and JavaScript, along with databases and frameworks such as SQL, Flutter, and Node.js.
            </p>
            {/* buttans and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://drive.google.com/drive/folders/1I4Sq7PYjR-CobWAvbbb7DwkDV2Po1fG4" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
}
