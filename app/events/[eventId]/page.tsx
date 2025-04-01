"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  registerLink: string; // ✅ Added registration link field
}

const events: Event[] = [
  {
    id: "event-1",
    title: "CodeAstraa",
    date: "April 5 - April 6, 2025",
    description:
      "Code Astra is a 24-hour offline hackathon at the IEEE International Summit 2025, organized by Galgotias Tech Council. Participants in teams of 2-4 will develop innovative solutions in domains such as AI, cybersecurity, IoT, fintech, healthcare, edtech, sustainability, and blockchain.",
    image:
      "https://res.cloudinary.com/dgna3swph/image/upload/v1743049376/code_astraa_ml2mx8.png",
    registerLink: "https://unstop.com/p/codeastraa-iccsai-young-minds-2025-galgotias-university-gu-greater-noida-1446795", // ✅ Unique link
  },
  {
    id: "event-2",
    title: "IMAGIX",
    date: "April-2, 2025",
    description:
      "ImagiX is the ultimate UI/UX and graphic design competition, challenging participants to create user-friendly, visually stunning, and impactful designs based on a given theme. Open to teams of 1-3, this offline event spans 4-6 hours, fostering creativity and collaboration.",
    image:
      "https://res.cloudinary.com/dgna3swph/image/upload/v1743044755/Instagram_post_-_23_1_aizqyb.jpg",
    registerLink: "https://unstop.com/p/imagix-iccsai-young-minds-2025-galgotias-university-gu-greater-noida-1446432", // ✅ Unique link
  },
  {
    id: "event-3",
    title: "Tech Trivia Blitz",
    date: "April-3, 2025",
    description:
      "Tech Trivia Blitz is a high-energy quiz competition designed to challenge participants’ knowledge in programming, hardware, cybersecurity, and emerging technologies. Conducted offline, participants can compete individually or in teams of 2-3.",
    image:
      "https://res.cloudinary.com/dgna3swph/image/upload/v1743044724/Instagram_post_-_24_clksj7.jpg",
    registerLink: "https://unstop.com/p/tech-trivia-blitz-iccsai-young-minds-2025-galgotias-university-gu-greater-noida-1446781", // ✅ Unique link
  },
  {
    id: "event-4",
    title: "Decode The Code",
    date: "April-3, 2025",
    description:
      "Decode the Code is a fast-paced coding challenge where participants analyze, debug, and correct code under time constraints. This competition tests logical thinking, debugging skills, and problem-solving abilities in C, C++, Java, and Python.",
    image:
      "https://res.cloudinary.com/dgna3swph/image/upload/v1743044761/Instagram_post_-_25_tbordv.jpg",
    registerLink: "https://unstop.com/p/decode-the-code-iccsai-young-minds-2025-galgotias-university-gu-greater-noida-1446773", // ✅ Unique link
  },
  {
    id: "event-5",
    title: "Follow The Line",
    date: "April-4, 2025",
    description:
      "Line Following Robot Competition challenges participants to design and program an autonomous robot that follows a predefined track with speed, accuracy, and stability.",
    image:
      "https://res.cloudinary.com/dgna3swph/image/upload/v1743044768/Instagram_post_-_28_nq0xci.jpg",
    registerLink: "https://unstop.com/p/follow-the-line-iccsai-young-minds-2025-galgotias-university-gu-greater-noida-1446790", // ✅ Unique link
  },
  {
    id: "event-6",
    title: "Design The Canvas (Poster Making)",
    date: "April-4, 2025",
    description:
      "SDG Poster Design Competition aims to promote awareness of the United Nations Sustainable Development Goals (SDGs) through creative poster design. Participants will visually represent sustainability, global challenges, and solutions aligned with the SDGs.",
    image:
      "https://res.cloudinary.com/dgna3swph/image/upload/v1743044763/Instagram_post_-_29_ihvgdg.jpg",
    registerLink: "https://unstop.com/p/design-canvas-sdg-poster-making-competition-iccsai-young-minds-2025-galgotias-university-gu-greater-noida-1446801", // ✅ Unique link
  },
  {
    id: "event-7",
    title: "Pitch Me 3.0 ",
    date: "April-6, 2025",
    description:
      "Pitch Me 3.0 – The Tech Revival Edition is an innovative competition where participants analyze failed tech startups and propose strategies that could have saved them. Instead of pitching their own ideas, they will act as founders, identifying key failures and presenting solutions for revival.",
    image:
      "https://res.cloudinary.com/dgna3swph/image/upload/v1743049816/pitch_me_3.0_gdvtno.jpg",
    registerLink: "https://unstop.com/p/pitch-me-30-tech-revival-edition-iccsai-young-minds-2025-galgotias-university-gu-greater-noida-1446805", // ✅ Unique link
  },
  {
    id: "event-8",
    title: "Click Licious",
    date: "April 5 - April 6, 2025",
    description:
      "Clicklicious presents ClickQuic, an on-spot photo story competition that challenges participants to craft compelling visual narratives centered on engineering. This solo offline event tests technical photography skills. Editing is allowed, but AI-based enhancements are prohibited.",
    image:
      "https://res.cloudinary.com/dgna3swph/image/upload/v1743049816/Instagram_post_-_32_ct8vco.jpg",
    registerLink: "https://unstop.com/p/clicklicious-iccsai-young-minds-2025-galgotias-university-gu-greater-noida-1449674", // ✅ Unique link
  },
  
];

const EventDetails = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen pt-16"> {/* ✅ Fixed navbar issue */}
      
      {/* ✅ Full-width Banner */}
      <div className="w-full relative bg-gray-100 dark:bg-gray-900">
        <div className="hidden sm:block relative w-full h-[50vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]">
          <Image
            src="https://res.cloudinary.com/dgna3swph/image/upload/v1743042740/Instagram_post_-_34_d5vuva.png"
            alt="Event Banner"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>

      {/* ✅ Heading */}
      <h2 className="text-5xl md:text-7xl font-bold text-center text-gray-900 dark:text-gray-100 mt-10">
        Our Events
      </h2>

      {/* ✅ Event Cards Section */}
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ event }: { event: Event }) => {
  const [showFullText, setShowFullText] = useState(false);
  const description = showFullText
    ? event.description
    : event.description.slice(0, 100) + (event.description.length > 100 ? "..." : "");

  return (
    <div className="relative bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg overflow-hidden group transition-all w-full max-w-[450px] mx-auto 
    h-auto md:h-auto p-3 md:p-6">
      
      {/* Event Image */}
      <div className="relative w-full aspect-[4/3] md:h-[450px] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="w-full h-full transition-all duration-500 group-hover:opacity-30 
          object-cover md:object-contain"
        />
        {/* Hidden Details (Show on Hover) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50">
          <h3 className="text-lg font-bold text-white">{event.title}</h3>
          <p className="text-xs text-white mt-1">{event.date}</p>
        </div>
      </div>

      {/* Event Details */}
      <div className="text-center mt-2 md:mt-4">
        <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-gray-100">{event.title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 md:mt-2">
          {description}{" "}
          {event.description.length > 100 && (
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-blue-600 dark:text-blue-400 font-semibold"
            >
              {showFullText ? "Show Less" : "Read More"}
            </button>
          )}
        </p>

        {/* Register Button */}
        <a
          href={event.registerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 md:mt-5 inline-block w-full px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default EventDetails;
