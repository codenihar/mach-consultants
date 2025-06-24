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
    id: "1",
    title: "Tech Conference 2023",
    category: "conference",
    featured_image_url:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    placeOfEvent: "San Francisco Convention Center",
    dateOfEvent: "2023-11-15",
    timeOfEvent: "09:00",
    description:
      "Annual tech conference featuring the latest innovations in AI and web development.",
    created_at: "2023-10-01T10:00:00Z",
    updated_at: "2023-10-05T14:30:00Z",
    contentBlocks: [
      {
        block_type: "header",
        headerBlock: { text: "About the Event" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "Join us for the biggest tech gathering of the year with keynote speakers from leading tech companies.",
          link: "https://techconf.example.com",
        },
      },
    ],
  },
  {
    id: "2",
    title: "Art Exhibition Opening",
    category: "art",
    featured_image_url:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
    placeOfEvent: "Modern Art Museum",
    dateOfEvent: "2023-12-05",
    timeOfEvent: "18:30",
    description: "Exhibition of contemporary artists from around the world.",
    created_at: "2023-09-15T09:00:00Z",
    updated_at: "2023-09-20T11:45:00Z",
    contentBlocks: [
      {
        block_type: "header",
        headerBlock: { text: "Featured Artists" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "This exhibition showcases works from emerging talents alongside established masters.",
          link: "https://artmuseum.example.com/exhibitions",
        },
      },
    ],
  },
  {
    id: "3",
    title: "Community Charity Run",
    category: "sports",
    featured_image_url:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
    placeOfEvent: "Central Park",
    dateOfEvent: "2023-10-22",
    timeOfEvent: "07:00",
    description: "5K run to raise funds for local children's hospital.",
    created_at: "2023-08-10T14:00:00Z",
    updated_at: "2023-09-01T16:20:00Z",
    contentBlocks: [
      {
        block_type: "header",
        headerBlock: { text: "Event Details" },
      },
      {
        block_type: "paragraph",
        paragraphBlock: {
          text: "All proceeds will go directly to the children's hospital. Participants will receive a t-shirt and medal.",
          link: "https://charityrun.example.com/register",
        },
      },
    ],
  },
];
