import { randomUUID } from "expo-crypto";

export const CHARACTERS_INFO = [
  {
    id: randomUUID(),
    name: "Beth Harmon",
    image: require("@/assets/images/slide_1.webp"),
    description:
      "Elizabeth 'Beth' Olivia Harmon is a chess prodigy and the main character in the Netflix miniseries, The Queen's Gambit. Orphaned at a young age and scarred from Methuen Home's mistreatment, she is depicted as someone with immense anger and passion, which fuels her chess proficiency — and her susceptibility to substance addiction.",
  },
  {
    id: randomUUID(),
    name: "Benny Watts",
    image: require("@/assets/images/Benny.webp"),
    description:
      "Benjamin Watts is an arrogant, popular, and very intelligent chess prodigy and a main character in the Netflix series, The Queen's Gambit. Initially Beth Harmon's most prominent rival, he then becomes her mentor, close friend and love interest.",
  },
  {
    id: randomUUID(),
    name: "D.L Townes",
    image: require("@/assets/images/Townes_S1.webp"),
    description:
      "D.L. Townes is a journalist, photographer, and avid chess player. He works for Chess Review as photojournalist and for the Lexington Herald-Leader as an associate editor; occupations which have allowed him to follow Harmon's journey across the United States and to Moscow, Russia. A former unrequited love interest, Townes is likely Harmon's closest friend and on par to family.",
  },
  {
    id: randomUUID(),
    name: "Harry Beltik",
    image: require("@/assets/images/Harry_Beltik_S1.webp"),
    description:
      "Harry Beltik is a traditional learner and one of the best chess players in Kentucky. He is left in awe of Beth's talent and enters her life when she is at a low point.",
  },
  {
    id: randomUUID(),
    name: "William Shaibel",
    image: require("@/assets/images/William_Shaibel.webp"),
    description:
      "Mr. Shaibel is a janitor at Beth Harmon's orphanage. He introduces her to the game of chess and opens new doors for the young prodigy.",
  },
  {
    id: randomUUID(),
    name: "Alma Wheatley",
    image: require("@/assets/images/Alma_Wheatley.webp"),
    description:
      "Alma Wheatley (née Benson) is a lonely housewife with an absent husband and her own vices. She and her husband Allston reside at 4400 Reed Lane, Lexington, Kentucky.",
  },
];
