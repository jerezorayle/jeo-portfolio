"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect } from "react";

export default function About() {

    useEffect(() => {

        const cover = document.querySelector(".cover-fade");
        const image = document.querySelector(".image-fade");

        setTimeout(() => {
            cover?.classList.add("fade-in");
        }, 100);

        setTimeout(() => {
            image?.classList.add("slide-in");
        }, 300);
        }, []);
        
    return (
        <div className="space-y-16">
            <div className="flex justify-between items-center gap-12">
                <div className="border-r-18 border-b-18 border-2 border-white rounded-full hidden-before cover-fade">
                    <div className="relative w-[800px] h-[410px] rounded-lg m-4 hidden-before image-fade">
                        <Image
                            src="/cover.png"
                            alt="Descriptive text"
                            fill
                            className="object-cover object-top rounded-xl"
                            unoptimized
                            priority
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-5">
                    <Card className="w-[250px] border-none bg-background">
                        <CardHeader className="font-bold text-start text-6xl">
                            <CardTitle>10+</CardTitle>
                            <CardDescription className="text-lg">Projects Completed</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[250px] border-none bg-background">
                        <CardHeader className="font-bold text-start text-6xl">
                            <CardTitle>4+</CardTitle>
                            <CardDescription className="text-lg">Certifications</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[250px] border-none bg-background">
                        <CardHeader className="font-bold text-start text-6xl">
                            <CardTitle>5+</CardTitle>
                            <CardDescription className="text-lg">Years of Experience</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-2xl font-bold uppercase mt-6">Biography</h1>
                <p className="mt-4 text-md text-left">
                    When I was a kid, I had the passion of finding solutions to every problems and analyzing things. 
                    I used to be the one who they approach whenever there's an issue with something needed to get fixed. 
                    I loved the challenge of taking things apart and putting them back all together and I'd always enjoyed doing it.
                </p>
                <p className="mt-4 text-md text-left">
                    Now, I can apply the same approach I learned whenever I program, code, and build web/software applications especially when there a problem arising (eg. bugs, errors, inaccuracy, etc). 
                    I also learned to organize my way to make things easier, usable and efficient in the long run - applying software engineering principles I learned throughout the years of experience in coding.
                </p>
                <blockquote className="mt-6 border-l-4 pl-6 italic">
                    "When you fall in love with the process rather than the product, you don’t have to wait to give yourself permission to be happy..."
                </blockquote>
            </div>

            <div>
                <h1 className="text-2xl font-bold uppercase mt-6">Skills</h1>
                <div className="flex flex-row gap-4 flex-wrap mt-10">
                    <Badge className="p-1">C#, ASP .NET Core, Repository-Service Design Pattern</Badge>
                    <Badge className="p-1">VueJS</Badge>
                    <Badge className="p-1">React</Badge>
                    <Badge className="p-1">Next.js, Node.js</Badge>
                    <Badge className="p-1">HTML, CSS, JavaScript, TypeScript</Badge>
                    <Badge className="p-1">Tailwind CSS, Bootstrap</Badge>
                    <Badge className="p-1">Git, GitHub</Badge>
                    <Badge className="p-1">Agile Methodologies</Badge>
                    <Badge className="p-1">RESTful APIs</Badge>
                    <Badge className="p-1">Software Development Life Cycle (SDLC)</Badge>
                    <Badge className="p-1">Problem Solving</Badge>
                    <Badge className="p-1">Analytical Thinking</Badge>
                    <Badge className="p-1">Team Collaboration</Badge>
                    <Badge className="p-1">Communication Skills</Badge>
                </div>
            </div>

            <div className="flex justify-start items-start mt-10">
                <div className="flex flex-col items-start justify-start h-[86vh] col-span-2 mt-10">
                    <h1 className="text-2xl font-bold uppercase mt-6">Education</h1>
                    <div className="mt-8">
                        <p className="mt-4 text-md text-left text-xs font-semibold">2015 — 2019</p>
                        <div className="border-l-6 pl-10 p-6 m-3">
                            <h2 className="font-bold text-lg">Bachelor of Science in Computer Science</h2>
                            <p className="text-sm text-zinc-400">Holy Angel University | Angeles City Pampanga</p>
                            <p className="text-sm text-zinc-300">Relevant courses included Object-Oriented Programming and Principles, Computer Optimizations and Algorithms, Full-stack Web Development</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
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
