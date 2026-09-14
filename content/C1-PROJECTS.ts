import { Vehicle } from '../types';
import { numberedAsset } from '../utils/asset';

const vehicleImage = (order: number, name: string) =>
  numberedAsset('vehicles', 'V', order, name);

export const PROJECTS_CONTENT = {
  titolo: "PROJECTS",
};

export const VEHICLES: Vehicle[] = [
  {
    id: "eros",
    name: "Eros",
    year: "2026",
    image: vehicleImage(7, "Eros"),
    description: [
      "Battery electric Urban Concept vehicle",
      "Lightweight composite monocoque optimized for minimum mass and maximum stiffness",
      "Aerodynamically optimized body incorporating vortex generators",
      "Electric powertrain (PMSM) optimized for vehicle's operating conditions",
    ],
  },
  {
    id: "asteria",
    name: "Asteria",
    year: "2022",
    image: vehicleImage(6, "Asteria"),
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
    image: vehicleImage(5, "Leto"),
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
    image: vehicleImage(4, "Daphne"),
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
    image: vehicleImage(3, "Apollo"),
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
    image: vehicleImage(2, "Artemide"),
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
    image: vehicleImage(1, "Why Not"),
    description: [
      "First Shell Eco-marathon vehicle by PoliMi.",
      "Trellis frame with aluminum tubes.",
      "Converted to hydrogen-electric in 2008.",
      "Bosch Technical Innovation Award.",
    ],
  },
];
