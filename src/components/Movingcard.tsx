"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { div } from "framer-motion/client";
 
function Movingcard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2]  relative flex flex-col items-center justify-center overflow-hidden"> 
       <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2> 
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-6"> <div className="w-full max-w-6xl">
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="fast"
    />
  </div>
  </div>
        </div>
  
  )
}
const testimonials = [
    {
      quote:
        "Music expresses that which cannot be put into words and that which cannot remain silent.",
      name: "Victor Hugo",
      title: "Author and Poet",
    },
    {
      quote:
        "Without music, life would be a mistake.",
      name: "Friedrich Nietzsche",
      title: "Philosopher",
    },
    {
      quote:
        "Music can change the world because it can change people.",
      name: "Bono",
      title: "Lead Singer of U2",
    },
    {
      quote:
        "Where words fail, music speaks.",
      name: "Hans Christian Andersen",
      title: "Author",
    },
    {
      quote:
        "One good thing about music, when it hits you, you feel no pain.",
      name: "Bob Marley",
      title: "Singer-Songwriter",
    },
  ];
  
export default Movingcard
