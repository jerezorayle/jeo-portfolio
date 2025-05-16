"use client";

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const works = [
    {
        title: "My Portfolio Website",
        description:
            "Free-style designed. Coded in Visual Studio Code by Yours Truly. Made using React, Next.js, ShadCN and Tailwind.",
        image: "/works-portfolio.png",
        tech: ["React", "Next.js", "Shadcn", "Tailwind"],
        href: "https://jerezorayle.vercel.app",
    },
    {
        title: "Human Resources Information System [HRIS]",
        description:
            "A web-based application for managing employee data, leave records, and benefits.",
        image: "/works-hris.png",
        tech: [
            "C#, ASP .NET Core, EF Core",
            "MSSQL Server",
            "Vue",
            "Node.js",
            "Typescript",
            "Shadcn",
            "Tailwind",
        ],
        href: "https://github.com/hrisdevteam"
    },
    {
        title: "League of Students for Excellence [LSE-HAU]",
        description:
            "A compound front-end website and web-portal for the organization named League of Students for Excellence of Holy Angel University.",
        image: "/works-lse.png",
        tech: ["PHP", "HTML", "CSS", "MySQL Server"],
        href: "https://github.com/jjjimenez100/LSE-HAU-Portal"
    },
    {
        title: "Becric India",
        description:
            "A web and mobile application for a leading online casino in India.",
        image: "/works-becric.png",
        tech: [
            "C#, ASP .NET Core, EF Core",
            "MSSQL Server",
            "Vue",
            "Node.js",
            "Typescript",
            "Quasar",
        ],
        href: "https://www.becric.com",
    },
    {
        title: "POMELO",
        description:
            "A web-based application for managing employee data, payroll, attendance records, and benefits.",
        image: null,
        tech: [
            "C#, ASP .NET Core, EF Core",
            "MSSQL Server",
            "DB First",
            "DapperORM",
            "HTML, CSS, Javascript, jQuery",
            "Kendo UI",
        ],
    },
    {
        title: "PharmAssist",
        description:
            "A python web-based application chatbot using natural language processing to assist users in finding information about medicines and diagnosing common illnesses.",
        image: null,
        tech: [
            "Python",
            "Flask",
            "Scrapy",
            "BeautifulSoup",
            "HTML, CSS, Javascript",
            "Natural Language Processing",
        ],
    },
];

function WorkCard({
    title,
    description,
    image,
    tech,
    href,
    index,
}: {
    title: string;
    description: string;
    image: string | null;
    tech: string[];
    href?: string;
    index: number;
}) {
    const delay = 0.6 + index * 0.3;

    const cardContent = (
        <Card className="relative w-full h-full pt-0 bg-zinc-950 group-hover:bg-zinc-900 transition-colors duration-300 ease-in-out">
            <SquareArrowOutUpRight className="absolute top-2 right-2 h-5 w-5 text-zinc-400 group-hover:text-white group-hover:filter group-hover:drop-shadow-[0_0_3px_black] transition-colors duration-150 z-10" />
            <div className="overflow-hidden rounded-t-xl">
                <div className="bg-zinc-950 h-60 w-full relative">
                    {image ? (
                        <Image
                            src={image}
                            alt={`${title} Image`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-60 object-cover object-bottom transition-transform duration-300 ease-in-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                    ) : (
                        <div className="w-full h-60 flex flex-col items-center justify-center text-zinc-800 font-bold text-5xl">
                            {title}<span className="text-xs">Image not available.</span>
                        </div>
                    )}

                </div>
            </div>
            <CardHeader>
                <CardTitle className="text-md font-bold">{title}</CardTitle>
                <CardDescription className="text-xs">{description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <div className="flex gap-2 flex-wrap">
                    {tech.map((t, i) => (
                        <Badge key={i}>{t}</Badge>
                    ))}
                </div>
            </CardFooter>
        </Card>
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            <div className="group relative h-107 w-full cursor-pointer">
                {href ? (
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                        {cardContent}
                    </Link>
                ) : (
                    cardContent
                )}
            </div>
        </motion.div>
    );
}

export default function Works() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            >
                <h1 className="text-3xl font-bold mb-10 text-center">Works</h1>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 sm:grid-cols-2 xs:grid-cols-1">
                {works.map((work, i) => (
                    <WorkCard key={i} {...work} index={i} />
                ))}
            </div>
        </div>
    );
}
