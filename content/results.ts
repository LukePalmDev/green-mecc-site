import { Result } from '../types';
import { asset } from '../utils/asset';

export const RESULTS_CONTENT = {
  titolo: "RESULT",
};

export const RESULTS: Result[] = [
  {
    year: "2024",
    competition: "Shell Eco-marathon Europe",
    location: "Circuit Paul Armagnac, Nogaro, FR",
    vehicle: "Asteria",
    category: "Urban concept, battery electric",
    result: "3rd place at the Mileage Challenge with 230 km/kWh and 2nd place at Driver's Championship",
    image: asset("result/R5-2024.webp"),
  },
  {
    year: "2023",
    competition: "Shell Eco-marathon Europe",
    location: "Circuit Paul Armagnac, Nogaro, FR",
    vehicle: "Asteria",
    category: "Urban concept, battery electric",
    result: "4th place with 202 km/kWh",
    image: asset("result/R4-2023.webp"),
  },
  {
    year: "2022",
    competition: "Shell Eco-marathon Europe",
    location: "TT Circuit Assen, Assen, NL",
    vehicle: "Asteria",
    category: "Urban concept, battery electric",
    result: "5th place with 230 km/kWh",
    image: asset("result/R3-2022.webp"),
  },
  {
    year: "2011",
    competition: "Shell Eco-marathon Europe",
    location: "Lausitz EuroSpeedway, GER",
    vehicle: "Apollo",
    category: "Prototype, solar",
    result: "1st place and WORLD RECORD (1108 km/kWh)",
    image: asset("result/R2-2011.webp"),
  },
  {
    year: "2010",
    competition: "Shell Eco-marathon America",
    location: "Houston, USA",
    vehicle: "Apollo",
    category: "Prototype, solar",
    result: "1st place",
    image: asset("result/R1-2010.webp"),
  },
];
