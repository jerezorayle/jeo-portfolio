"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightFromLine, Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div>
      {/* Responsive section: image first on mobile, right on desktop */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-8">
        {/* Text Section */}
        <div className="font-bold text-6xl text-left leading-20 w-full md:w-1/2">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
          >
            <h1>Hi,</h1>
          </motion.div>

          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.6 }}
          >
            <h1>
              I am <span className="text-white underline">Jerez</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.9 }}
          >
            <h1>Software Engineer</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 2.1 }}
          >
            <div>
              <Link href="/works" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="my-16 text-indigo-600 border-indigo-600 border-2 font-bold hover:bg-indigo-600 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  <ArrowRightFromLine className="mr-2" />
                  See My Works
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 2.9 }}
          >
            <div className="text-zinc-300">
              <p className="text-xs font-thin">
                Freestyle designed. Coded in <span className="font-bold">Visual Studio Code</span> by Yours Truly.
              </p>
              <p className="text-xs font-thin">
                Made using <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">ShadCN</span>, <span className="font-bold">Motion</span> and <span className="font-bold">Tailwind</span>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 30, y: 10, opacity: 0 }}
          animate={imgLoaded ? { x: 0, y: 0, opacity: 1 } : {}}
          exit={{ x: 30, y: 10, opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 1.3 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-full 
                            w-60 h-80 
                            xs:w-50 xs:h-60
                            sm:w-60 sm:h-80 
                            md:w-[35rem] md:h-[45rem]">
              <Image
                src="/front-dark.png"
                alt="my-image"
                fill
                style={{ objectFit: "cover" }}
                onLoadingComplete={() => setImgLoaded(true)}
                priority
              />
            </div>

            {imgLoaded && (
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 1.3 }}
                className="absolute top-0 left-4 
                  sm:top-3 sm:left-3 
                  md:top-10 md:left-8 
                  z-0"
              >
                <div className="bg-white rounded-full rotate-60 
                                w-46 h-65 
                                xs:w-25 xs:h-40
                                sm:w-45 sm:h-60 
                                md:w-[28rem] md:h-[35rem]">
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Social Buttons */}
      <div className="flex gap-4 justify-start items-center h-16 mt-8">
        <Link href="https://www.linkedin.com/in/jerezorayle" target="_blank" rel="noopener noreferrer">
          <Button size="icon"><Linkedin /></Button>
        </Link>
        <Link href="https://github.com/jerezorayle" target="_blank" rel="noopener noreferrer">
          <Button size="icon"><Github /></Button>
        </Link>
        <Link href="https://instagram.com/javajeo" target="_blank" rel="noopener noreferrer">
          <Button size="icon"><Instagram /></Button>
        </Link>
        <Link href="https://facebook.com/jerezorayle" target="_blank" rel="noopener noreferrer">
          <Button size="icon"><Facebook /></Button>
        </Link>
      </div>

      {/* Push space below */}
      <div className="flex justify-center items-center h-10"></div>
    </div>
  );
}
