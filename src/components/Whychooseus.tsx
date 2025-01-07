
"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
  
const content = [
    {
      title: "Collaborative Learning",
      description:
        "Learn and practice music together with peers, instructors, and fellow students. Collaborate on compositions, share your progress, and receive real-time feedback to refine your skills. Our platform fosters a community of passionate learners.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
          Collaborative Learning
        </div>
      ),
    },
    {
      title: "Real-Time Practice Feedback",
      description:
        "Receive instant feedback as you practice. Whether you're playing an instrument, singing, or composing, our platform provides insights to help you improve in real time. Stay motivated and make the most of your practice sessions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--red-500))] flex items-center justify-center text-white">
          Real-Time Feedback
        </div>
      ),
    },
    {
      title: "Music Theory and Composition",
      description:
        "Explore the depths of music theory and unlock your creativity with our composition tools. Learn at your own pace with engaging lessons, interactive exercises, and personalized guidance to enhance your musical understanding.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
          Music Theory & Composition
        </div>
      ),
    },
    {
      title: "Performance Showcases",
      description:
        "Showcase your talent in live virtual or in-person performances. Share your progress, gain confidence, and connect with an audience that appreciates your musical journey. Let your music speak to the world.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Performance Showcases
        </div>
      ),
    },
    {
        title: "Real-Time Practice Feedback",
        description:
          "Receive instant feedback as you practice. Whether you're playing an instrument, singing, or composing, our platform provides insights to help you improve in real time. Stay motivated and make the most of your practice sessions.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--red-500))] flex items-center justify-center text-white">
            Real-Time Feedback
          </div>
        ),
      },
      {
        title: "Music Theory and Composition",
        description:
          "Explore the depths of music theory and unlock your creativity with our composition tools. Learn at your own pace with engaging lessons, interactive exercises, and personalized guidance to enhance your musical understanding.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
            Music Theory & Composition
          </div>
        ),
      },
  ];
  
function Whychooseus() {
  return (
    <div className="p-10">
        {/* content must be array */}
    <StickyScroll content={content} />
  </div>
  )
}

export default Whychooseus
