'use client';

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form = formRef.current;
        if (!form) return;

        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

        window.location.href = `mailto:jerezorayle@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="max-w-lg mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}>
                <Card className="bg-background">
                    <CardHeader>
                        <CardTitle className="text-left text-3xl">Contact Me</CardTitle>
                        <CardDescription className="text-left">
                            Get in touch with me by filling out the form below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" type="text" placeholder="Your name" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
            <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 80 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                    className="relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4/4 h-[600px] w-[600px] rounded-full bg-zinc-50 opacity-15 blur-[140px]" />
                </motion.div>
            </div>
        </div>
    );
}
