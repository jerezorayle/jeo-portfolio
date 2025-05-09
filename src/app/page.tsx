"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const headers = document.querySelectorAll("h1");
    headers.forEach((header, index) => {
      setTimeout(() => {
        header.classList.add("slide-in");
      }, index * 300);
    });

    const avatar = document.querySelector(".avatar-fade");
    setTimeout(() => {
      avatar?.classList.add("fade-in");
    }, 900);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 items-center justify-center h-[90vh]">
        <div className="font-bold text-6xl text-left leading-20 font-proxima">
          <h1 className="hidden-before">Hi,</h1>
          <h1 className="hidden-before">
            I am <span className="text-indigo-600">Jerez</span>.
          </h1>
          <h1 className="hidden-before">Software Engineer.</h1>

          <Button variant="default" size="lg" className="my-16 bg-indigo-600">
            Contact
          </Button>
        </div>

        <div className="flex justify-end">
          <div className="avatar-fade hidden-before">
            <Avatar className="w-145 h-175">
              <AvatarImage src="/front.png" alt="my-image" />
              <AvatarFallback>JO</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hidden-before {
          opacity: 0;
          transform: translateX(-30px);
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
