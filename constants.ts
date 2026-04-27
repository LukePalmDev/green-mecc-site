import { Department, Partner, Result, Vehicle } from './types';
import { asset } from './utils/asset';

const PLACEHOLDER_PERSON = asset("user-3.webp");

export const TEAM_STRUCTURE: Department[] = [
  {
    title: "Management",
    members: [
      { name: "Pietro", surname: "Stabile", role: "Team Leader", email: "pietro.stabile@polimi.it", image: PLACEHOLDER_PERSON },
    ]
  },
  {
    title: "Chassis & Subsystem",
    members: [
      { name: "Stefano", surname: "Chiarito", image: PLACEHOLDER_PERSON },
      { name: "Giacomo Giovanni", surname: "Moroni", image: PLACEHOLDER_PERSON },
      { name: "Leonardo", surname: "Nava", image: PLACEHOLDER_PERSON },
      { name: "Carola", surname: "Bragotto", image: PLACEHOLDER_PERSON },
      { name: "Simone", surname: "Viterale", image: PLACEHOLDER_PERSON },
      { name: "Marco", surname: "Marelli", image: PLACEHOLDER_PERSON },
      { name: "Angelo", surname: "Balconi", image: PLACEHOLDER_PERSON },
      { name: "Oscar Eduardo", surname: "Alfonso Dextre", image: PLACEHOLDER_PERSON },
      { name: "Francesco", surname: "Lo Sardo", image: PLACEHOLDER_PERSON },
    ]
  },
  {
    title: "Drivetrain",
    members: [
      { name: "Giacomo", surname: "Bertocchi", image: PLACEHOLDER_PERSON },
      { name: "Leonardo", surname: "Mattiuzzi", image: PLACEHOLDER_PERSON },
      { name: "Filippo", surname: "Mariani", image: PLACEHOLDER_PERSON },
      { name: "Alessandro", surname: "Cavalli", image: PLACEHOLDER_PERSON },
      { name: "Tommaso", surname: "Colombo", image: PLACEHOLDER_PERSON },
      { name: "Giorgio", surname: "Ramundo", image: PLACEHOLDER_PERSON },
      { name: "Massimiliano", surname: "De Palma", image: PLACEHOLDER_PERSON },
    ]
  },
  {
    title: "Strategy & Electronics",
    members: [
      { name: "Federico", surname: "Meli", image: PLACEHOLDER_PERSON },
      { name: "Riccardo", surname: "Marinò", image: PLACEHOLDER_PERSON },
      { name: "Andrea", surname: "Terragni", image: PLACEHOLDER_PERSON },
      { name: "Alessandro", surname: "Giani", image: PLACEHOLDER_PERSON },
    ]
  },
  {
    title: "Aerodynamics",
    members: [
      { name: "Lorenzo", surname: "Perfetti", image: PLACEHOLDER_PERSON },
      { name: "Lorenzo", surname: "Morellini", image: PLACEHOLDER_PERSON },
      { name: "Matteo", surname: "Lorenzini", image: PLACEHOLDER_PERSON },
      { name: "Daniele", surname: "Marcora", image: PLACEHOLDER_PERSON },
      { name: "Ali", surname: "Nazir", image: PLACEHOLDER_PERSON },
      { name: "Marco", surname: "Schifone", image: PLACEHOLDER_PERSON },
    ]
  },
  {
    title: "Communication",
    members: [
      { name: "Raffaello", surname: "Morga", image: PLACEHOLDER_PERSON },
      { name: "Asia", surname: "Scalia", image: PLACEHOLDER_PERSON },
      { name: "Carolina", surname: "Bonato", image: PLACEHOLDER_PERSON },
    ]
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: "asteria",
    name: "Asteria",
    year: "2022",
    image: asset("vehicles/Asteria1.webp"),
    description: [
      "Battery electric powered urban concept vehicle.",
      "Optimized chassis to minimize mass and maximize structural stiffness.",
      "Lightweight optimization procedures for wheel hubs and rims.",
      "Revised motor controller for efficiency increase."
    ]
  },
  {
    id: "leto",
    name: "Leto",
    year: "2019",
    image: asset("vehicles/Leto1.webp"),
    description: [
      "Urban Concept battery electric category.",
      "CFRP structure designed for stiffness and aerodynamics.",
      "External shape derived from advanced fluid dynamic analyses."
    ]
  },
  {
    id: "daphne",
    name: "Daphne",
    year: "2011",
    image: asset("vehicles/Daphne1.webp"),
    description: [
      "Urban Concept category.",
      "CFRP monocoque.",
      "Powered by two 200 W electric DC brushed motors.",
      "Best performance: 130 km/kWh at Shell Eco-marathon 2018."
    ]
  },
  {
    id: "apollo",
    name: "Apollo",
    year: "2010",
    image: asset("vehicles/Apollo1.webp"),
    description: [
      "Powered by solar energy.",
      "Photovoltaic cell system installed on a wing body.",
      "Win of 2010 American competition.",
      "World Record in 2011: 1108 km/kWh (approx 9757 km/l equivalent)."
    ]
  },
  {
    id: "artemide",
    name: "Artemide",
    year: "2009",
    image: asset("vehicles/Artemide1.webp"),
    description: [
      "Powered by hydrogen fuel cell.",
      "Italian record for fuel cell prototypes (2741 km/l).",
      "Shell Eco-marathon Design Award winner."
    ]
  },
  {
    id: "whynot",
    name: "Why Not?",
    year: "2005",
    image: asset("vehicles/Whynot1.webp"),
    description: [
      "First Shell Eco-marathon vehicle by PoliMi.",
      "Trellis frame with aluminum tubes.",
      "Converted to hydrogen-electric in 2008.",
      "Bosch Technical Innovation Award."
    ]
  }
];

export const RESULTS: Result[] = [
  {
    year: "2024",
    competition: "Shell Eco-marathon Europe",
    location: "Circuit Paul Armagnac, Nogaro, FR",
    vehicle: "Asteria",
    category: "Urban concept, battery electric",
    result: "3rd place at the Mileage Challenge with 230 km/kWh and 2nd place at Driver's Championship",
    image: asset("result/2024.webp")
  },
  {
    year: "2023",
    competition: "Shell Eco-marathon Europe",
    location: "Circuit Paul Armagnac, Nogaro, FR",
    vehicle: "Asteria",
    category: "Urban concept, battery electric",
    result: "4th place with 202 km/kWh",
    image: asset("result/2023.webp")
  },
  {
    year: "2022",
    competition: "Shell Eco-marathon Europe",
    location: "TT Circuit Assen, Assen, NL",
    vehicle: "Asteria",
    category: "Urban concept, battery electric",
    result: "5th place with 230 km/kWh",
    image: asset("result/2022.webp")
  },
  {
    year: "2011",
    competition: "Shell Eco-marathon Europe",
    location: "Lausitz EuroSpeedway, GER",
    vehicle: "Apollo",
    category: "Prototype, solar",
    result: "1st place and WORLD RECORD (1108 km/kWh)",
    image: asset("result/2011_GER_WR.webp")
  },
  {
    year: "2010",
    competition: "Shell Eco-marathon America",
    location: "Houston, USA",
    vehicle: "Apollo",
    category: "Prototype, solar",
    result: "1st place",
    image: asset("result/2010_USA.webp")
  }
];

export const PARTNERS: Partner[] = [
  { name: "Politecnico di Milano", logo: asset("sponsor/03_Polimi_bandiera-1riga_COL_positivo.webp"), url: "https://www.polimi.it/" },
  { name: "Mecc Polimi", logo: asset("sponsor/logoMecc.webp"), url: "https://www.mecc.polimi.it/" },
  { name: "Maxon", logo: asset("sponsor/logo_Maxon.webp"), url: "https://www.maxongroup.it/" },
  { name: "Brembo", logo: asset("sponsor/Brembo_logo_(2022).svg.webp"), url: "https://www.brembo.com/" },
  { name: "Ansys", logo: asset("sponsor/Ansys_logo_(2019).svg.webp"), url: "https://www.ansys.com/" },
  { name: "Altair", logo: asset("sponsor/1200px-Altair_logo.webp"), url: "https://altair.com/" },
  { name: "Discacciati", logo: asset("sponsor/discacciati-logo.webp"), url: "#" },
  { name: "Ghioni", logo: asset("sponsor/Ingranaggi_Ghioni_logo.webp"), url: "#" },
  { name: "CIT", logo: asset("sponsor/logo_CIT.webp"), url: "#" },
  { name: "Mako Shark", logo: asset("sponsor/makoSharkMod.webp"), url: "#" },
];

export interface DepartmentInfo {
  id: string;
  title: string;
  icon: string;
  image: string;
  description: string;
}

export const DEPARTMENTS_INFO: DepartmentInfo[] = [
  {
    id: "supervisor",
    title: "Academic Supervisor",
    icon: asset("departments/structure.svg"),
    image: asset("img-aboutus.jpg"),
    description: "Provides institutional guidance and academic oversight, linking the team with the university's research goals and ensuring alignment with educational objectives."
  },
  {
    id: "management",
    title: "Management",
    icon: asset("departments/management-3.svg"),
    image: asset("mission/mission1.jpg"),
    description: "The main task is to manage and coordinate the work of all team members. Every year, the seasonal objectives are established, and the team is formed. Experience gained over many seasons is the basis for success."
  },
  {
    id: "chassis",
    title: "Chassis & Subsystem",
    icon: asset("departments/chassis.svg"),
    image: asset("mission/mission2.JPG"),
    description: "Responsible for designing, manufacturing, and assembling the chassis and subsystems. The design process utilizes advanced CAD software and Finite Element simulations (FEM). Experts in composite materials processing."
  },
  {
    id: "drivetrain",
    title: "Drivetrain",
    icon: asset("departments/engineering.svg"),
    image: asset("mission/mission3.jpg"),
    description: "Responsible for the design of the vehicle's drivetrain. The main working areas involve the electric motors, the custom transmission system, and the high-efficiency wheel hubs."
  },
  {
    id: "electronics",
    title: "Strategy & Electronics",
    icon: asset("departments/circuit.svg"),
    image: asset("mission/mission4.jpg"),
    description: "Develops a reliable and efficient electrical system. Accurate numerical models are created to simulate vehicle behavior and optimize race strategy. On-track tests validate these models."
  },
  {
    id: "aerodynamics",
    title: "Aerodynamics",
    icon: asset("departments/aerodynamic.svg"),
    image: asset("mission/mission5.jpg"),
    description: "Responsible for defining the external shape of the vehicle body to optimize aerodynamic efficiency. Fluid dynamic analyses are carried out using advanced CFD simulations."
  },
  {
    id: "communication",
    title: "Communication",
    icon: asset("departments/bullhorn-2.svg"),
    image: asset("img-sfondo.webp"),
    description: "Manages social media, the website, and PR. A communication plan is defined to narrate the team's journey to the Shell Eco-marathon, engaging sponsors and the public."
  }
];
