"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import React from "react";
import { motion } from "framer-motion"; //
import ColourfulText from "@/components/ui/colourful-text";
import { HeroHighlight } from "@/components/ui/hero-highlight";

function Page() {
    const placeholders = [
   "What are your interests?",
   "What are your subject" 
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
    const onSubmit = (value) => {
    console.log(value);
  };
  return (
    
         <HeroHighlight className="min-h-screen w-full">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl  lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
      </motion.h1>
      <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
        <h3 className="mb-10 sm:mb-20 text-xl text-center sm:text-4xl dark:text-white text-black">
           Answer some of our question to find the <ColourfulText text=" best Career Path for you.." />
        </h3>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </HeroHighlight>
      
    
  );
}

export default Page;
