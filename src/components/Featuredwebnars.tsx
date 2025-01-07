import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';
 const projects = [
    {
      title: "The Art of Music Composition",
      description:
        "Dive into the world of music composition with experts who will guide you through creating melodies, harmonies, and rhythms. Learn how to bring your musical ideas to life.",
      link: "https://musicacademy.com/composition-webinar",
    },
    {
      title: "Mastering Vocal Techniques",
      description:
        "Join this webinar to explore vocal techniques that enhance your singing skills, including breath control, vocal range expansion, and performance tips.",
      link: "https://musicacademy.com/vocal-techniques",
    },
    {
      title: "Exploring Music Production",
      description:
        "Discover the tools and techniques used in professional music production. From recording to mixing and mastering, this session covers it all.",
      link: "https://musicacademy.com/music-production",
    },
    {
      title: "Jazz Improvisation Essentials",
      description:
        "Learn the essentials of jazz improvisation in this interactive webinar. Understand scales, chords, and techniques to enhance your improvisation skills.",
      link: "https://musicacademy.com/jazz-improvisation",
    },
    {
      title: "Understanding Music Theory",
      description:
        "A comprehensive webinar on music theory, covering scales, intervals, chord progressions, and more. Perfect for musicians at any level.",
      link: "https://musicacademy.com/music-theory",
    },
    {
      title: "Building a Career in Music",
      description:
        "Gain insights into the music industry from seasoned professionals. Learn how to market your music, build an audience, and turn your passion into a career.",
      link: "https://musicacademy.com/music-career",
    },
  ];
function Featuredwebnars() {
  return (
    <div className='p-12 bg-gray-900 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className="text-center">
                  <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBNARS</h2>
                  <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
      </div>
      <div className="mt-10">
      <HoverEffect items={projects} />
    </div>
    <div className='mt-20 text-center'>
        <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
        ViewAll Webnars 
        </Link>
      </div>  
        </div>
      
    </div>
  )
}

  
export default Featuredwebnars
