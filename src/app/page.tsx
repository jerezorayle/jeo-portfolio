"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRightFromLine, Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const headers = document.querySelectorAll("h1");
    const button = document.querySelector(".button-fade");
    const description = document.querySelector(".description-fade");

    headers.forEach((header, index) => {
      setTimeout(() => {
        header.classList.add("slide-in");
      }, index * 300);
    });

    setTimeout(() => {
      button?.classList.add("fade-in");
    }, 1800);

    const avatar = document.querySelector(".avatar-fade");
    const avatarBg = document.querySelector(".avatar-bg-fade");

    setTimeout(() => {
      avatar?.classList.add("fade-in");
    }, 900);

    setTimeout(() => {
      avatarBg?.classList.add("slide-in");
    }, 900);

    setTimeout(() => {
      description?.classList.add("fade-in");
    }, 2600);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 items-center justify-center h-[76vh]">
        <div className="font-bold text-6xl text-left leading-20">
          <h1 className="hidden-before">Hi,</h1>
          <h1 className="hidden-before">
            I am <span className="text-white underline">Jerez</span>
          </h1>
          <h1 className="hidden-before">Software Engineer.</h1>

          <div className="hidden-before button-fade">
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

          <div className="text-zinc-300 hidden-before description-fade">
            <p className="text-xs font-thin">Free-style designed. Coded in <span className="font-bold">Visual Studio Code</span> by Yours Truly.</p>
            <p className="text-xs font-thin">Made using <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">ShadCN</span> and <span className="font-bold">Tailwind</span>.</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="avatar-fade hidden-before">
            <Avatar className="w-142 h-172 z-10 relative">
              <AvatarImage src="/front-dark.png" alt="my-image"/>
            </Avatar>
            <div className="bg-white h-140 w-110 absolute top-10 left-8 z-0 rounded-full rotate-60 hidden-before avatar-bg-fade"></div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-start items-center h-16">
        <Button size="icon"><Linkedin/></Button>
        <Button size="icon"><Github/></Button>
        <Button size="icon"><Instagram/></Button>
        <Button size="icon"><Facebook/></Button>
      </div>

      <style jsx>{`

      .stroke-text {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }

        .hidden-before {
          opacity: 0;
          transform: translateX(-50px);
        }

        .slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
