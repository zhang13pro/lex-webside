import { defineStore } from "pinia"

export const state = () => ({
  page: "index",
  indexedUser: 0,
  users: [
    {
      job: "coder",
      name: "Lex Zhang",
      img: "/profile1.jpg",
      location: "Hangzhou",
      bio: "Coding is easy,coding is what i do",
      following: 26,
      followers: 7,
      photos: 94,
      days: 132,
      trips: ["Shanghai", "Xian", "Nanchang", "Fuzhou", "Hangzhou"],
    },
    {
      job: "coder",
      name: "Sophia Gonzalez",
      img: "/profile2.jpg",
      location: "San Francisco",
      bio: "Had a brief careerwith jack-in-the-boxes in Phoenix, AZ. Spent several months managing squirt guns and implementing toy elephants.",
      following: 789,
      followers: 2748,
      photos: 94,
      days: 32,
      trips: ["Honolulu", "Burmuda", "Los Cabos", "San Antonio"],
    },
    {
      job: "coder",
      name: "Ben Allen",
      img: "/profile3.jpg",
      location: "Boston",
      bio: "Bacon nerd. Freelance twitter practitioner. Social media nerd. Pop culture junkie. Proud alcohol advocate. Food geek.",
      following: 140,
      followers: 789,
      photos: 32,
      days: 5,
      trips: ["Honolulu", "Peru", "San Francisco"],
    },
    {
      job: "coder",
      name: "Jill Fernandez",
      img: "/profile4.jpg",
      location: "Seattle",
      bio: "Prone to fits of apathy. Writer. Devoted gamer. Web scholar. Hipster-friendly music advocate. Problem solver. Student. Twitter fanatic.",
      following: 590,
      followers: 1705,
      photos: 45,
      days: 12,
      trips: ["Honolulu", "Tokyo", "Osaka"],
    },
    {
      job: "coder",
      name: "Cynthia Obel",
      img: "/profile5.jpg",
      location: "Kentucky",
      bio: "Producing at the fulcrum of modernism and purpose to craft an compelling and authentic narrative. My opinions belong to myself.",
      following: 590,
      followers: 1705,
      photos: 45,
      days: 12,
      trips: ["Honolulu", "Tokyo", "Osaka"],
    },
  ],
  places: [
    {
      name: "Honolulu",
      stars: 4,
      rating: 8.9,
      img: "/honolulu.jpg",
      description:
        "Ocean breezes rustle palm trees along the harborfront, while in the cool, mist-shrouded Ko??olau Range, forested hiking trails offer postcard city views. At sunset, cool off with an amble around Magic Island or splash in the ocean at Ala Moana Beach.",
    },
    {
      name: "Santorini",
      stars: 4,
      rating: 7.8,
      img: "/santorini.jpg",
      description:
        "With multicoloured cliffs soaring above a sea-drowned caldera, Santorini looks like a giant slab of layered cake. The main island of Thira will take your breath away with its snow-drift of white Cycladic houses lining the cliff tops and, in places, spilling like icy cornices down the terraced rock.",
    },
    {
      name: "Cusco",
      stars: 3,
      rating: 7.4,
      img: "/peru.jpg",
      description:
        "Wandered the cobblestone streets and quaint lanes of the town, which has been designated a UNESCO World Heritage site. A walking tour revealed historic architecture, colonial landmarks and alluring shops and restaurants.",
    },
  ],
})
