"use client";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from 'next/link';

export default function Works() {
    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-10 text-center">Works</h1>
            <div className="grid grid-cols-3 gap-6">
                <Link href="https://github.com/jerezorayle/jeo-portfolio" target="_blank" rel="noopener noreferrer">
                    <div className="group relative h-107 w-full cursor-pointer">
                        <Card className="relative w-full h-full pt-0 bg-zinc-950 group-hover:bg-zinc-900 transition-colors duration-300 ease-in-out">
                            <SquareArrowOutUpRight className="absolute top-2 right-2 h-5 w-5 text-zinc-400 group-hover:text-white group-hover:border-white transition-colors duration-150 z-10" />

                            <div className="overflow-hidden rounded-t-xl">
                                <Image
                                    src="/works-portfolio.png"
                                    alt="Portfolio Website Image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-60 object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                            </div>

                            <CardHeader>
                                <CardTitle className="text-md font-bold">My Portfolio Website</CardTitle>
                                <CardDescription className="text-xs">
                                    Free-style designed. Coded in Visual Studio Code by Yours Truly. Made using React, Next.js, ShadCN and Tailwind.
                                </CardDescription>
                            </CardHeader>

                            <CardFooter>
                                <div className="flex gap-2 flex-wrap">
                                    <Badge>React</Badge>
                                    <Badge>Next.js</Badge>
                                    <Badge>Shadcn</Badge>
                                    <Badge>Tailwind</Badge>
                                </div>
                            </CardFooter>
                        </Card>
                    </div></Link>
                <div className="group relative h-107 w-full cursor-pointer">
                    <Card className="relative w-full h-full pt-0 bg-zinc-950 group-hover:bg-zinc-900 transition-colors duration-300 ease-in-out">
                        <SquareArrowOutUpRight className="absolute top-2 right-2 h-5 w-5 text-zinc-400 group-hover:text-zinc-950 group-hover:border-white transition-colors duration-150 z-10" />

                        <div className="overflow-hidden rounded-t-xl">
                            <Image
                                src="/works-hris.png"
                                alt="Portfolio Website Image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-60 object-cover object-top transition-all duration-300 ease-in-out grayscale group-hover:scale-105 group-hover:grayscale-0"
                            />
                        </div>

                        <CardHeader>
                            <CardTitle className="text-md font-bold">Human Resources Information System [HRIS]</CardTitle>
                            <CardDescription className="text-xs">
                                A web-based application for managing employee data, leave records, and benefits.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <div className="flex gap-2 flex-wrap">
                                <Badge>C#, ASP .NET Core, EF Core</Badge>
                                <Badge>SQL</Badge>
                                <Badge>Vue</Badge>
                                <Badge>Node.js</Badge>
                                <Badge>Typescript</Badge>
                                <Badge>Shadcn</Badge>
                                <Badge>Tailwind</Badge>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}