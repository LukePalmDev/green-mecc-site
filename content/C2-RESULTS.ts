import { Result } from '../types';
import { numberedAsset } from '../utils/asset';

const resultImage = (order: number, year: string) =>
  numberedAsset('results', 'R', order, year, 'webp', 'upper', false);

export const RESULTS_CONTENT = {
  titolo: "RESULT",
};

export const RESULTS: Result[] = [
  {
    year: "2026",
    competition: "Shell Eco-marathon Europe",
    location: "Silesia Ring, Kamień Śląski, Poland",
    vehicle: "Eros",
    category: "Urban concept, battery electric",
    result: "2nd place in the Innovation Award, 3rd place in the on-track efficiency competition and qualification for the 2027 Global Championship",
    image: resultImage(6, "2026"),
  },
  {
    year: "2024",
    competition: "Shell Eco-marathon Europe",
    location: "Circuit Paul Armagnac, Nogaro, FR",
    vehicle: "Asteria",
    category: "Urban concept, battery electric",
    result: "3rd place at the Mileage Challenge with 230 km/kWh and 2nd place at Driver's Championship",
    image: resultImage(5, "2024"),
  },
  {
    year: "2023",
    competition: "Shell Eco-marathon Europe",
    location: "Circuit Paul Armagnac, Nogaro, FR",
    vehicle: "Asteria",
    category: "Urban concept, battery electric",
    result: "4th place with 202 km/kWh",
    image: resultImage(4, "2023"),
  },
  {
    year: "2022",
    competition: "Shell Eco-marathon Europe",
    location: "TT Circuit Assen, Assen, NL",
    vehicle: "Asteria",
    category: "Urban concept, battery electric",
    result: "5th place with 230 km/kWh",
    image: resultImage(3, "2022"),
  },
  {
    year: "2011",
    competition: "Shell Eco-marathon Europe",
    location: "Lausitz EuroSpeedway, GER",
    vehicle: "Apollo",
    category: "Prototype, solar",
    result: "1st place and WORLD RECORD (1108 km/kWh)",
    image: resultImage(2, "2011"),
  },
  {
    year: "2010",
    competition: "Shell Eco-marathon America",
    location: "Houston, USA",
    vehicle: "Apollo",
    category: "Prototype, solar",
    result: "1st place",
    image: resultImage(1, "2010"),
  },
];
