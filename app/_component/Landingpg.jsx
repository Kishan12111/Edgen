"use client";
import React from "react";
import {BackgroundLines} from "@/components/ui/background-lines.jsx";
import {TypewriterEffect} from "../../components/ui/typewriter-effect.jsx";
import {Button} from "../../components/ui/button.jsx";



import Link from "next/link";


function Landingpg() {
  const words = [
    {
      text: "Your ",
    },
    {
      text: "Journey",
    },
    {
      text: "Begins ",
    },
    {
      text: "Here ",
    },
    {
      text: "with ",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Edgen! ",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div>
<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
<TypewriterEffect words={words} />
        </h2>

        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center text-semibold">
          A One-Stop Personalized Career & Education Advisor
        </p>
        <Button className="mx-auto mt-8 relative z-100">
          <Link href="/dashboard/test">Check Your Future</Link>
        </Button>
      </BackgroundLines>
    </div>
  );
}

export default Landingpg;
