import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Works() {
    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-10 text-center">Works</h1>
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <Card className="w-full pt-0 bg-zinc-950 hover:border-3 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-100 ease-in">
                        <Image
                            src="/works-portfolio.png"
                            alt="Portfolio Website Image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-60 object-cover object-top rounded-t-xl"
                        />
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
                </div>
                <div>
                    <Card className="w-full pt-0 bg-zinc-950 hover:border-2 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-100 ease-in">
                        <Image
                            src="/path/to/image.jpg"
                            alt="Project Image"
                            width={200}
                            height={300}
                            className="rounded-t-lg"
                        />
                        <CardHeader>
                            <CardTitle className="text-md font-bold">Human Resources Information System [HRIS]</CardTitle>
                            <CardDescription className="text-xs">
                                A web-based application for managing employee data, leave records, and benefits
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