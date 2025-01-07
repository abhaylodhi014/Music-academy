"use client";
import React from 'react'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";  

const words =`Music theory is the study of the structure and elements of music, including notes, scales, chords, rhythm, and harmony. It explains how sounds are organized, written, and interpreted. Understanding music theory enhances creativity, helps with reading sheet music, composing, and playing instruments, and deepens appreciation for musical art.`;
function page() {
  return (
    <><div className='p-4 relative z-10 w-full text-center mt-40'>
      <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent sm:text-5xl bg-gradient-to-b from-neutral-50'>Basic of Music Theory</h1>
      <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
      >
        <TextGenerateEffect words={words} />  </p> 
    </div>
       
    <TracingBeam className="px-6  text-white/[0.5]">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
 
            <p className={twMerge( "text-xl mb-4 text-white")}>
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </>
    
  )
}
const dummyContent = [
  {
    title: "Introduction to Music Theory",
    description: (
      <>
        <p>
          Music theory is the study of the elements of music, such as notes,
          scales, chords, rhythm, and harmony. It provides a framework for
          understanding how music works and is essential for reading, writing,
          and appreciating music.
        </p>
        <p>
          The basics of music theory include the musical alphabet (A, B, C, D, E,
          F, G), understanding pitch and rhythm, and reading notation on the
          staff. It is a foundational skill for musicians of all levels.
        </p>
      </>
    ),
    badge: "Basics",
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Notes and Scales",
    description: (
      <>
        <p>
          Notes are the building blocks of music. The musical alphabet consists
          of seven letters: A, B, C, D, E, F, and G. These notes repeat in higher
          or lower ranges, called octaves.
        </p>
        <p>
          Scales are sequences of notes arranged in a specific order. The most
          common scales are the major and minor scales. For example, the C major
          scale consists of the notes C, D, E, F, G, A, and B.
        </p>
        <p>
          Learning scales is important for understanding melodies and harmonies
          in music.
        </p>
      </>
    ),
    badge: "Scales",
    image:
      "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Chords and Harmony",
    description: (
      <>
        <p>
          Chords are combinations of notes played together. They are the
          foundation of harmony in music. A chord typically consists of three
          or more notes played simultaneously.
        </p>
        <p>
          The most basic chords are major and minor chords. For example, a C
          major chord is made up of the notes C, E, and G, while a C minor chord
          includes C, Eb, and G.
        </p>
        <p>
          Harmony is created when chords are played in progression, adding depth
          and emotion to a piece of music.
        </p>
      </>
    ),
    badge: "Harmony",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

export default page
