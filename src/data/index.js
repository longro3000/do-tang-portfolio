// ABOUTME: All site content — projects, categories, services, process steps, press, contact.
// ABOUTME: Edit this file to update portfolio content without touching component code.

export const CATEGORIES = [
  { id: "fashion",  label: "Fashion",  n: "01" },
  { id: "artists",  label: "Artists",  n: "02" },
  { id: "weddings", label: "Weddings", n: "03" },
];

export const PROJECTS = [
  {
    id: "runaway-bride",
    category: "weddings",
    title: "Runaway Bride",
    location: "Saigon",
    year: "2025",
    cover: { tone: "warm-dark", tag: "RUNAWAY / SAIGON / 01" },
    tagline: "A fashion-inspired wedding story exploring movement and chaos in urban space.",
    concept: "Shot across three mornings in District 1, the series abandons the traditional stillness of wedding photography for a cinematic study of flight. The bride moves through markets, motorbikes, and midday glare — her dress a white interruption in a city that refuses to pause.",
    credits: [
      ["Photography", "Do Tang"],
      ["Styling",     "Mai Nguyen"],
      ["Talent",      "Lé & Khoa"],
      ["Publication", "Commissioned"],
    ],
    images: [
      { ratio: "3/4",  tone: "warm-dark", tag: "OPENING / WHITE DRESS AGAINST MARKET" },
      { ratio: "4/3",  tone: "warm",      tag: "MOTORBIKE / MOTION BLUR" },
      { ratio: "3/4",  tone: "cool-dark", tag: "INTERIOR / CORRIDOR LIGHT" },
      { ratio: "3/4",  tone: "warm",      tag: "HANDS / DETAIL" },
      { ratio: "16/9", tone: "warm-dark", tag: "WIDE / STREET / DUSK" },
      { ratio: "3/4",  tone: "cool",      tag: "PORTRAIT / BRIDE" },
      { ratio: "4/3",  tone: "warm",      tag: "CROWD / BLUR" },
      { ratio: "3/4",  tone: "cool-dark", tag: "CLOSING / DEPARTURE" },
    ],
  },
  {
    id: "maison-antwerp",
    category: "fashion",
    title: "Maison",
    location: "Antwerp",
    year: "2024",
    cover: { tone: "cool-dark", tag: "MAISON / ANTWERP / AW24" },
    tagline: "A study in negative space for a Belgian ready-to-wear house.",
    concept: "Twelve looks, one room, one window. The campaign strips the editorial fashion shoot down to its bones — single source light, architectural posing, and a palette borrowed from the building itself.",
    credits: [
      ["Photography", "Do Tang"],
      ["Direction",   "Studio 0300"],
      ["Styling",     "Elise Vandamme"],
      ["Publication", "Brand campaign"],
    ],
    images: [
      { ratio: "3/4",  tone: "cool-dark", tag: "LOOK 01 / WINDOW LEFT" },
      { ratio: "3/4",  tone: "cool",      tag: "LOOK 02 / SEATED" },
      { ratio: "4/3",  tone: "cool-dark", tag: "INSTALLATION SHOT" },
      { ratio: "3/4",  tone: "cool",      tag: "LOOK 03 / PROFILE" },
      { ratio: "3/4",  tone: "warm",      tag: "LOOK 04 / ARCH" },
      { ratio: "16/9", tone: "cool-dark", tag: "WIDE / CORRIDOR" },
    ],
  },
  {
    id: "khanh-linh",
    category: "artists",
    title: "Khánh Linh, at home",
    location: "Hanoi",
    year: "2025",
    cover: { tone: "warm", tag: "ARTIST / HANOI / 2025" },
    tagline: "An afternoon with the composer in her studio, between two records.",
    concept: "A slow, conversational portrait session. No strobes, no set. The work looks for the gestures musicians make when they forget a camera is in the room.",
    credits: [
      ["Photography", "Do Tang"],
      ["Subject",     "Khánh Linh"],
      ["Publication", "The Face — online"],
    ],
    images: [
      { ratio: "3/4",  tone: "warm",      tag: "OPENING / PIANO" },
      { ratio: "4/3",  tone: "warm-dark", tag: "HANDS / KEYS" },
      { ratio: "3/4",  tone: "warm",      tag: "WINDOW / AFTERNOON" },
      { ratio: "3/4",  tone: "cool",      tag: "PROFILE" },
      { ratio: "16/9", tone: "warm-dark", tag: "WIDE / ROOM" },
    ],
  },
  {
    id: "telma-paris",
    category: "fashion",
    title: "Telma",
    location: "Paris",
    year: "2024",
    cover: { tone: "warm-dark", tag: "TELMA / PARIS / SS24" },
    tagline: "A twelve-page editorial on repetition and small variance.",
    concept: "Shot entirely on the same staircase over six hours. The story tracks a single model through twelve near-identical frames, each diverging from the last by a gesture, a garment, a quality of light.",
    credits: [
      ["Photography", "Do Tang"],
      ["Magazine",    "Telma — Issue 14"],
      ["Styling",     "Camille Roux"],
    ],
    images: [
      { ratio: "3/4",  tone: "warm-dark", tag: "PLATE 01" },
      { ratio: "3/4",  tone: "warm",      tag: "PLATE 02" },
      { ratio: "3/4",  tone: "warm-dark", tag: "PLATE 03" },
      { ratio: "3/4",  tone: "warm",      tag: "PLATE 04" },
      { ratio: "4/3",  tone: "warm-dark", tag: "SPREAD / CENTERFOLD" },
      { ratio: "3/4",  tone: "warm",      tag: "CLOSING" },
    ],
  },
  {
    id: "wildroot",
    category: "weddings",
    title: "Wildroot",
    location: "Dolomites",
    year: "2024",
    cover: { tone: "cool", tag: "WILDROOT / DOLOMITES" },
    tagline: "An elopement photographed across two valleys and one late storm.",
    concept: "Commissioned as a documentary rather than a wedding. No staged first-looks, no ceremony script — just two people, an officiant, a ridge line, and enough weather to make the afternoon feel earned.",
    credits: [
      ["Photography", "Do Tang"],
      ["Planning",    "Private"],
    ],
    images: [
      { ratio: "16/9", tone: "cool",      tag: "OPENING / RIDGE" },
      { ratio: "3/4",  tone: "cool-dark", tag: "PORTRAIT / COUPLE" },
      { ratio: "4/3",  tone: "cool",      tag: "DETAIL / RINGS" },
      { ratio: "3/4",  tone: "warm-dark", tag: "CEREMONY" },
      { ratio: "16/9", tone: "cool-dark", tag: "STORM / CLOSING" },
    ],
  },
  {
    id: "minh-duc",
    category: "artists",
    title: "Minh Đức",
    location: "Berlin",
    year: "2023",
    cover: { tone: "cool-dark", tag: "ARTIST / BERLIN" },
    tagline: "Portraits of the painter in the last week before his first European show.",
    concept: "Four sittings across five days. The final selection refuses the working-artist cliché: no paint on hands, no canvas behind. Just a person, mid-decision.",
    credits: [
      ["Photography", "Do Tang"],
      ["Subject",     "Minh Đức"],
      ["For",         "Galerie Weisshaus"],
    ],
    images: [
      { ratio: "3/4",  tone: "cool-dark", tag: "SITTING 01" },
      { ratio: "3/4",  tone: "warm-dark", tag: "SITTING 02" },
      { ratio: "4/3",  tone: "cool-dark", tag: "STUDIO / WIDE" },
      { ratio: "3/4",  tone: "warm",      tag: "SITTING 03" },
    ],
  },
];

export const PRESS = [
  { name: "Vogue PhotoVogue", note: "Selected Photographer" },
  { name: "The Face",         note: "Online feature, 2025" },
  { name: "Telma Magazine",   note: "Issue 14 — editorial" },
  { name: "Numéro Berlin",    note: "Contributor" },
];

export const SERVICES = [
  {
    n: "01",
    title: "Fashion Editorials & Campaigns",
    body: "Brand stories, look-books, and magazine editorials produced with a European editorial sensibility. From single-location campaigns to multi-day productions across Europe and Southeast Asia.",
  },
  {
    n: "02",
    title: "Artist & Talent Portraiture",
    body: "Long-form portrait work with musicians, writers, painters, and creatives. Most commonly commissioned for press, album artwork, and gallery publications.",
  },
  {
    n: "03",
    title: "Editorial Weddings",
    body: "Documentary-driven, fashion-literate wedding photography. For couples who want something closer to a magazine story than a traditional album — small guest counts preferred.",
  },
];

export const PROCESS = [
  ["01", "Brief",   "A short conversation or written brief. What you want, where, when, and why."],
  ["02", "Concept", "A treatment, a mood board, a shot list. Revisions included until you're right."],
  ["03", "Shoot",   "One to four days on location. Small crew by default; larger on request."],
  ["04", "Deliver", "Edited selects in ten working days. Full retouched set in four to six weeks."],
];

export const CONTACT = {
  managerName:  "Anh Vu",
  managerRole:  "Agent & Management",
  email:        "bookings@do-tang.com",
  response:     "Replies within 24–48 hours",
  based:        "Paris ↔ Saigon",
  availability: "Booking from June 2026",
};
