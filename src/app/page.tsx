"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRightFromLine, Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 items-center justify-center h-[76vh]">
        <div className="font-bold text-6xl text-left leading-20">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}>
            <h1>Hi,</h1>
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.6 }}>
            <h1>
              I am <span className="text-white underline">Jerez</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.9 }}>
            <h1>Software Engineer</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 2.1 }}>
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
            transition={{ duration: 1.1, ease: "easeOut", delay: 2.9 }}>
            <div className="text-zinc-300 ">
              <p className="text-xs font-thin">Freestyle designed. Coded in <span className="font-bold">Visual Studio Code</span> by Yours Truly.</p>
              <p className="text-xs font-thin">Made using <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">ShadCN</span>, <span className="font-bold">Motion</span> and <span className="font-bold">Tailwind</span>.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 30, y: 10, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={{ x: 30, y: 10, opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 1.3 }}>
          <div className="flex justify-end">
            <div className="relative ">
              <Avatar className="w-142 h-180 z-10 relative">
                <AvatarImage src="/front-dark.png" alt="my-image" />
              </Avatar>
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 1.3 }}
                className="absolute top-10 left-8 z-0"
              >
                <div className="bg-white h-140 w-110 rounded-full rotate-60 "></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex gap-4 justify-start items-center h-16">
        <Button size="icon"><Linkedin /></Button>
        <Button size="icon"><Github /></Button>
        <Button size="icon"><Instagram /></Button>
        <Button size="icon"><Facebook /></Button>
      </div>
    </div>
  );
}
