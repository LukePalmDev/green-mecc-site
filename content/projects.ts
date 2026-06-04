import { Vehicle } from '../types';
import { asset } from '../utils/asset';

export const PROJECTS_CONTENT = {
  titolo: "PROJECT",
};

export const VEHICLES: Vehicle[] = [
  {
    id: "asteria",
    name: "Asteria",
    year: "2022",
    image: asset("vehicles/M6-Asteria.webp"),
    description: [
      "Battery electric powered urban concept vehicle.",
      "Optimized chassis to minimize mass and maximize structural stiffness.",
      "Lightweight optimization procedures for wheel hubs and rims.",
      "Revised motor controller for efficiency increase.",
    ],
  },
  {
    id: "leto",
    name: "Leto",
    year: "2019",
    image: asset("vehicles/M5-Leto.webp"),
    description: [
      "Urban Concept battery electric category.",
      "CFRP structure designed for stiffness and aerodynamics.",
      "External shape derived from advanced fluid dynamic analyses.",
    ],
  },
  {
    id: "daphne",
    name: "Daphne",
    year: "2011",
    image: asset("vehicles/M4-Daphne.webp"),
    description: [
      "Urban Concept category.",
      "CFRP monocoque.",
      "Powered by two 200 W electric DC brushed motors.",
      "Best performance: 130 km/kWh at Shell Eco-marathon 2018.",
    ],
  },
  {
    id: "apollo",
    name: "Apollo",
    year: "2010",
    image: asset("vehicles/M3-Apollo.webp"),
    description: [
      "Powered by solar energy.",
      "Photovoltaic cell system installed on a wing body.",
      "Win of 2010 American competition.",
      "World Record in 2011: 1108 km/kWh (approx 9757 km/l equivalent).",
    ],
  },
  {
    id: "artemide",
    name: "Artemide",
    year: "2009",
    image: asset("vehicles/M2-Artemide.webp"),
    description: [
      "Powered by hydrogen fuel cell.",
      "Italian record for fuel cell prototypes (2741 km/l).",
      "Shell Eco-marathon Design Award winner.",
    ],
  },
  {
    id: "whynot",
    name: "Why Not?",
    year: "2005",
    image: asset("vehicles/M1-WhyNot.webp"),
    description: [
      "First Shell Eco-marathon vehicle by PoliMi.",
      "Trellis frame with aluminum tubes.",
      "Converted to hydrogen-electric in 2008.",
      "Bosch Technical Innovation Award.",
    ],
  },
];
