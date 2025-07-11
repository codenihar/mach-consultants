import React from "react";

export type NavItem = {
  name: string;
  route: string;
};

export type Policy = {
  name: string;
  route: string;
};

export type Stat = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

export const Events = [
  {
    id: "2021",
    title: "RISE 2021",
    category: "theme",
    featured_image_url: "/images/rise-2021.png",
    placeOfEvent: "Saint Joseph University, Beirut",
    dateOfEvent: "2022-11-29",
    timeOfEvent: "09:00",
    description:
      "The 1st annual RISE conference under the theme 'Rejuvenating the Relationship of Scholarship and Practice'",
    created_at: "2022-01-01T00:00:00Z",
    updated_at: "2022-11-01T12:00:00Z",
    contentBlocks: [
      {
        block_type: "header",
        headerBlock: { text: "Conference Theme" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "The inaugural RISE conference in 2021 focused on 'Rejuvenating the Relationship of Scholarship and Practice', organized by Saint Joseph University in Beirut and the Network of Organizational Development Experts (NODE).",
          link: null,
        },
      },
      {
        block_type: "header",
        headerBlock: { text: "Event Details" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "The conference took place on November 29-30, 2022, bringing together scholars and practitioners to bridge the gap between academic research and real-world business applications.",
          link: null,
        },
      },
    ],
    sponsors: [
      "/images/2021-sponser-1.png",
      "/images/2021-sponser-2.png",
      "/images/2021-sponser-3.png",
      "/images/2021-sponser-4.jpg",
    ],
  },
  {
    id: "2022",
    title: "RISE 2022",
    category: "theme",
    featured_image_url: "/images/rise-2022.webp",
    placeOfEvent: "Saint Joseph University, Beirut",
    dateOfEvent: "2022-11-28",
    timeOfEvent: "09:00",
    description:
      "The 2nd annual RISE conference under the theme 'Organization Development as Explicit or Implicit Practice'",
    created_at: "2022-01-15T00:00:00Z",
    updated_at: "2022-11-15T12:00:00Z",
    contentBlocks: [
      {
        block_type: "header",
        headerBlock: { text: "Conference Theme" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "The 2022 RISE conference explored 'Organization Development as Explicit or Implicit Practice', continuing its mission to bridge scholarship and practice.",
          link: null,
        },
      },
      {
        block_type: "header",
        headerBlock: { text: "Event Details" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "Organized by Saint Joseph University in Beirut and the Network of Organizational Development Experts (NODE), the conference took place on November 28-29, 2022.",
          link: null,
        },
      },
      {
        block_type: "header",
        headerBlock: { text: "Conference Materials" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "Recordings and materials from RISE 2022 are available for participants.",
          link: "#rise2022-recordings",
        },
      },
    ],
    sponsors: [
      "/images/2022-sponser-1.jpg",
      "/images/2022-sponser-2.png",
      "/images/2022-sponser-3.jpg",
      "/images/2022-sponser-4.png",
      "/images/2022-sponser-5.jpg",
      "/images/2021-sponser-1.png",
      "/images/2021-sponser-2.png",
      "/images/2021-sponser-3.png",
      "/images/2021-sponser-4.jpg",
    ],
  },
  {
    id: "2023",
    title: "RISE 2023",
    category: "theme",
    featured_image_url: "/images/rise-2023.png",
    placeOfEvent: "Saint Joseph University, Beirut",
    dateOfEvent: "2023-11-27 & 2023-11-28",
    timeOfEvent: "09:00",
    description:
      "The 3rd annual RISE conference under the theme 'Revisiting the Reward and Motivation System'",
    created_at: "2023-02-01T00:00:00Z",
    updated_at: "2023-11-20T10:30:00Z",
    contentBlocks: [
      {
        block_type: "header",
        headerBlock: { text: "Conference Theme" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "The 2023 RISE conference examined 'Revisiting the Reward and Motivation System', continuing its tradition of bridging academic research and organizational practice.",
          link: null,
        },
      },
      {
        block_type: "header",
        headerBlock: { text: "Event Details" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "Organized by Saint Joseph University in Beirut and the Network of Organizational Development Experts (NODE), the conference took place on November 27-28, 2023.",
          link: null,
        },
      },
      {
        block_type: "header",
        headerBlock: { text: "Conference Materials" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "Recordings from RISE 2023 will be made available to participants in the coming weeks.",
          link: null,
        },
      },
    ],
    sponsors: [
      "/images/2022-sponser-1.jpg",
      "/images/2022-sponser-2.png",
      "/images/2022-sponser-3.jpg",
      "/images/2022-sponser-4.png",
      "/images/2022-sponser-5.jpg",
      "/images/2021-sponser-1.png",
      "/images/2021-sponser-2.png",
      "/images/2021-sponser-3.png",
      "/images/2021-sponser-4.jpg",
    ],
  },
  {
    id: "2025",
    title: "RISEinEurope 2025",
    category: "theme",
    featured_image_url: "/images/rise-2025.jpeg",
    placeOfEvent: "INSEEC Grande Ecole, Paris",
    dateOfEvent: "2025-04-01 & 2025-04-02",
    timeOfEvent: "09:00",
    description:
      "The 4th annual RISE conference under the theme 'From Thoughts to Assets: Transforming Innovation and Creativity into Value'",
    created_at: "2024-06-01T00:00:00Z",
    updated_at: "2025-03-15T14:20:00Z",
    contentBlocks: [
      {
        block_type: "header",
        headerBlock: { text: "Conference Evolution" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "RISEinEurope 2025 marks the fourth annual conference and first European edition, co-organized by INSEEC Grande Ecole in Paris, Saint Joseph University in Beirut, and the Network of Organization Development Experts (NODE).",
          link: null,
        },
      },
      {
        block_type: "header",
        headerBlock: { text: "2025 Theme" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "Focused on 'From Thoughts to Assets: The Journey of Transforming Innovation and Creativity into Value', the conference explored practical frameworks for value creation.",
          link: null,
        },
      },
      {
        block_type: "header",
        headerBlock: { text: "Event Details" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "The conference took place on April 1-2, 2025 at INSEEC Grande Ecole in Paris, featuring keynotes, workshops, and networking sessions.",
          link: null,
        },
      },
      {
        block_type: "header",
        headerBlock: { text: "Conference Materials" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "Recordings and presentation materials from RISE 2025 will be available to registered participants.",
          link: "#rise2025-recordings",
        },
      },
    ],
  },
];
