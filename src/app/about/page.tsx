"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect } from "react";
import "animate.css/animate.compat.css"
import ScrollAnimation from "react-animate-on-scroll";
import { Scroll } from "lucide-react";

export default function About() {

    useEffect(() => {

        const cover = document.querySelector(".cover-fade");
        const image = document.querySelector(".image-fade");
        const biography = document.querySelector(".biography-fade");
        const bg = document.querySelector(".bg-slide");

        const cards = document.querySelectorAll(".card-slide");
        console.log(cards);

        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("slide-in-right");
            }, index * 600);
        });

        setTimeout(() => {
            cover?.classList.add("fade-in");
        }, 100);

        setTimeout(() => {
            image?.classList.add("slide-in");
        }, 200);

        setTimeout(() => {
            biography?.classList.add("fade-in");
        }, 100);

        setTimeout(() => {
            bg?.classList.add("slide-in-right");
        }, 100);
    }, []);

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-center gap-12">
                <div className="border-r-18 border-b-18 border-2 border-white rounded-xl hidden-before cover-fade">
                    <div className="relative w-[800px] h-[410px] rounded-lg m-4 hidden-before image-fade">
                        <Image
                            src="/cover.png"
                            alt="Descriptive text"
                            fill
                            className="object-cover object-top rounded-xl z-10"
                            unoptimized
                            priority
                        />
                    </div>
                    <div className="absolute h-90 w-90 bg-white rounded-full top-13 left-52 z-[-1] hidden-before bg-slide"></div>
                </div>
                <div className="flex flex-col items-start justify-start gap-5">
                    <div className="hidden-before card-slide">
                        <Card className="w-[250px] border-none bg-background">
                            <CardHeader className="font-bold text-start text-6xl">
                                <CardTitle>10+</CardTitle>
                                <CardDescription className="text-lg">Projects Completed</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                    <div className="hidden-before card-slide">
                        <Card className="w-[250px] border-none bg-background">
                            <CardHeader className="font-bold text-start text-6xl">
                                <CardTitle>4+</CardTitle>
                                <CardDescription className="text-lg">Certifications</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                    <div className="hidden-before card-slide">
                        <Card className="w-[250px] border-none bg-background">
                            <CardHeader className="font-bold text-start text-6xl">
                                <CardTitle>6+</CardTitle>
                                <CardDescription className="text-lg">Years of Experience</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start hidden-before biography-fade">
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
                <blockquote className="mt-6 border-l-6 pl-6 italic text-sm">
                    “When you fall in love with the process rather than the product, you don't have to wait to give yourself permission to be happy. You can be satisfied anytime your system is running. And a system can be successful in many different forms, not just the one you first envision.” — James Clear [Atomic Habits]
                </blockquote>
            </div>


            <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                <h1 className="text-2xl font-bold uppercase">Skills</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="border-3 border-zinc-600 border-solid rounded-xl p-10">
                    <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                        <div className="flex flex-row gap-3 flex-wrap">
                            <h3 className="text-sm">Strong Skills: </h3>
                            <Badge className="p-1">C#, ASP .NET Core API, Entity Framework Core, LINQ, MVC</Badge>
                            <Badge className="p-1">VueJS</Badge>
                            <Badge className="p-1">ReactJS</Badge>
                            <Badge className="p-1">Shadcn</Badge>
                            <Badge className="p-1">Next.js, Node.js</Badge>
                            <Badge className="p-1">HTML, CSS, JavaScript, TypeScript</Badge>
                            <Badge className="p-1">Tailwind CSS, Bootstrap</Badge>
                            <Badge className="p-1">SQL, NoSQL, MongoDB, ElasticSearch</Badge>
                            <Badge className="p-1">JSON Web Tokens</Badge>
                            <Badge className="p-1">Git, GitHub</Badge>
                            <Badge className="p-1">Repository-Service Design Pattern, Onion Architecture, CQRS Design Pattern</Badge>
                            <Badge className="p-1">Agile Methodologies</Badge>
                            <Badge className="p-1">Object-Oriented Programming, Dependency Injection</Badge>
                            <Badge className="p-1">RESTful APIs</Badge>
                            <Badge className="p-1">Problem Solving</Badge>
                            <Badge className="p-1">Analytical Thinking</Badge>
                            <Badge className="p-1">Team Collaboration</Badge>
                            <Badge className="p-1">Communication Skills</Badge>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <div className="flex flex-row gap-3 flex-wrap mt-6">
                            <h3 className="text-sm">Additional Experience: </h3>
                            <Badge className="p-1">Java, Spring Boot</Badge>
                            <Badge className="p-1">Arduino</Badge>
                            <Badge className="p-1">Python</Badge>
                            <Badge className="p-1">R Scripting</Badge>
                        </div>
                    </ScrollAnimation>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="flex justify-start items-start">
                    <div className="flex flex-col items-start justify-start col-span-2">
                        <h1 className="text-2xl font-bold uppercase mt-6">Work Experience</h1>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <div className="mt-6">
                                <p className="mt-4 text-md text-left text-xs font-semibold">February 2023 - Present</p>
                                <div className="border-l-6 pl-10 p-6 m-3 mb-0">
                                    <h2 className="font-bold text-lg">Software Engineer</h2>
                                    <p className="text-sm text-zinc-400">Tingcloud Documentary and Marketing Services OPC | Makati City, NCR</p>
                                    <p className="text-sm text-zinc-300">ASP .NET Web Development, Documented-API Implementation</p>
                                    <p className="text-xs mt-4 text-zinc-400"> ASP .NET Core 8.0, Entity Framework Core, Docker, Microservices, Code-First Approach, VueJS + ShadCN, Tailwind, TypeScript, Javascript, API Management, Repository-Service Pattern, Onion Architecture, Dependency Injection, AutoMapper</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <div className="mt-0">
                                <p className="mt-4 text-md text-left text-xs font-semibold">June 2021 - February 2023</p>
                                <div className="border-l-6 pl-10 p-6 m-3 mb-0">
                                    <h2 className="font-bold text-lg">.NET Developer</h2>
                                    <p className="text-sm text-zinc-400">KonganBuddies Marketing Inc. | Makati City, NCR</p>
                                    <p className="text-sm text-zinc-300">ASP .NET Web Development, Documented-API Implementation</p>
                                    <p className="text-xs mt-4 text-zinc-400"> ASP .NET Core 6.0, Microservices, VueJS + Quasar, API Management, Java/ Spring Boot, Repository-Service Pattern, Elastic Search, MySQL, MongoDB, Dependency Injection, AutoMapper, TelegramBot API, Redis</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <div className="mt-0">
                                <p className="mt-4 text-md text-left text-xs font-semibold">October 2020 - June 2021</p>
                                <div className="border-l-6 pl-10 p-6 m-3 mb-0">
                                    <h2 className="font-bold text-lg">Graphics Designer</h2>
                                    <p className="text-sm text-zinc-400">FilAm Software Technology | Angeles City Pampanga</p>
                                    <p className="text-sm text-zinc-300">Worked as a graphics designer focusing on web design, poster creations, motion graphics design and product design</p>
                                    <p className="text-xs mt-4 text-zinc-400">Adobe Softwares: Photoshop, Illustrator, After Effects and Premier Pro.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <div className="mt-0">
                                <p className="mt-4 text-md text-left text-xs font-semibold">October 2019 - June 2020</p>
                                <div className="border-l-6 pl-10 p-6 m-3 mb-0">
                                    <h2 className="font-bold text-lg">Data Engineer</h2>
                                    <p className="text-sm text-zinc-400">FilAm Software Technology | Angeles City Pampanga</p>
                                    <p className="text-sm text-zinc-300">Worked with the Data Science Team (Ecuiti Inc.) as a data engineer automating process for data analyzation.</p>
                                    <p className="text-xs mt-4 text-zinc-400">R for Data Science, Google Ads, and Selenium</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <div className="mt-0">
                                <p className="mt-4 text-md text-left text-xs font-semibold">May 2019 - October 2019</p>
                                <div className="border-l-6 pl-10 p-6 m-3 mb-0">
                                    <h2 className="font-bold text-lg">Software Engineer</h2>
                                    <p className="text-sm text-zinc-400">FilAm Software Technology | Angeles City Pampanga</p>
                                    <p className="text-sm text-zinc-300">Worked with the software development team focusing on agile software development, application testing and maintenance of the web application built using Microsoft .Net Core</p>
                                    <p className="text-xs mt-4 text-zinc-400">C#, ASP .NET Core, ASP .NET MVC, Entity Framework, Javascript / JQuery,
                                        Front-end Designing (Bootstrap, CSS, etc), Object-Oriented Programming,
                                        HTML, Data-Tables, Kendo UI, Database Design / SQL, Software Design
                                        Patterns / Architectures, SOLID Principles, Azure DevOps, and Git</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <div className="mt-0">
                                <p className="mt-4 text-md text-left text-xs font-semibold">November 2018 - March 2019</p>
                                <div className="border-l-6 pl-10 p-6 m-3 mb-0">
                                    <h2 className="font-bold text-lg">Software Engineer Intern</h2>
                                    <p className="text-sm text-zinc-400">MVP Asia Pacific Inc | Clark Pampanga</p>
                                    <p className="text-sm text-zinc-300">Collaborated with senior developers to implement backend logic, API endpoints, and data access layers using Entity Framework or ADO.NET.</p>
                                    <p className="text-xs mt-4 text-zinc-400">Object-Oriented Programming Approach, SOLID and KISS Design Principles, Gang of Four Design Patterns, Repository and Service Design Pattern Implementation, and Sprint Planning</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="flex justify-start items-start">
                    <div className="flex flex-col items-start justify-start col-span-2">
                        <h1 className="text-2xl font-bold uppercase mt-6">Education</h1>
                        <div className="mt-6">
                            <p className="mt-4 text-md text-left text-xs font-semibold">2015 — 2019</p>
                            <div className="border-l-6 pl-10 p-6 m-3">
                                <h2 className="font-bold text-lg">Bachelor of Science in Computer Science</h2>
                                <p className="text-sm text-zinc-400">Holy Angel University | Angeles City Pampanga</p>
                                <p className="text-sm text-zinc-300">Relevant courses included Object-Oriented Programming and Principles, Computer Optimizations and Algorithms, Full-stack Web Development</p>
                                <p className="text-xs mt-4 text-zinc-400">Oct 2015 Award: Dean's List - Certificate of Academic Excellence</p>
                                <p className="text-xs text-zinc-400">Mar 2016 Award: Dean's List - Certificate of Academic Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

            <style jsx>{`
            .hidden-before {
            opacity: 0;
            transform: translateX(-50px);
            }

            .slide-in {
            animation: slideIn 0.8s ease-out forwards;
            }

            .slide-in-right {
            animation: slideInRight 0.8s ease-out forwards;
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

            @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
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
