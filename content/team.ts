import { Department } from '../types';
import { asset } from '../utils/asset';

const IMMAGINE_PERSONA_SEGNAPOSTO = asset("user-3.webp");

export const TEAM_CONTENT = {
  titolo: "TEAM",
  descrizione:
    "We are a multidisciplinary group of students from Politecnico di Milano, united by the passion for innovation and sustainability.",
  testoGruppoNonTrovato: "Group not found.",
  linkTornaAlTeam: "Back to Team",
  etichettaCapoReparto: "Capo Reparto",
  etichettaMembri: "Membri",
  testoMembriInArrivo: "Members information coming soon.",
  albo: {
    titolo: "ALBO",
    testo:
      "L'Albo raccoglie tutti gli ex studenti del Politecnico di Milano che, nel corso degli anni, hanno contribuito alla crescita e ai successi di Green Mecc. Il loro impegno, la loro passione e le competenze acquisite durante il percorso nel team hanno reso possibile i traguardi raggiunti. Essere parte di questa realtà significa entrare a far parte di una comunità che continua a crescere e a ispirare le generazioni future di ingegneri.",
    immagine: asset("T0-Albo.jpg"),
    testoAlternativoImmagine: "Albo Green Mecc",
  },
};

export const DEPARTMENTS_INFO = [
  {
    id: "supervisor",
    title: "Academic Supervisor",
    icon: asset("departments/structure.svg"),
    image: asset("T7-ACADEMIC SUPERVISOR.jpg"),
    description:
      "Provides institutional guidance and academic oversight, linking the team with the university's research goals and ensuring alignment with educational objectives.",
  },
  {
    id: "management",
    title: "Management",
    icon: asset("departments/management-3.svg"),
    image: asset("mission/T6-MANAGEMENT.jpg"),
    description:
      "The main task is to manage and coordinate the work of all team members. Every year, the seasonal objectives are established, and the team is formed. Experience gained over many seasons is the basis for success.",
  },
  {
    id: "chassis",
    title: "Chassis & Subsystem",
    icon: asset("departments/chassis.svg"),
    image: asset("mission/T5-CHASSIS & SUBSYSTEM.jpg"),
    description:
      "Responsible for designing, manufacturing, and assembling the chassis and subsystems. The design process utilizes advanced CAD software and Finite Element simulations (FEM). Experts in composite materials processing.",
  },
  {
    id: "drivetrain",
    title: "Drivetrain",
    icon: asset("departments/engineering.svg"),
    image: asset("mission/T4-DRIVETRAIN.jpg"),
    description:
      "Responsible for the design of the vehicle's drivetrain. The main working areas involve the electric motors, the custom transmission system, and the high-efficiency wheel hubs.",
  },
  {
    id: "electronics",
    title: "Strategy & Electronics",
    icon: asset("departments/circuit.svg"),
    image: asset("mission/T3-STRATEGY & ELECTRONICS.jpg"),
    description:
      "Develops a reliable and efficient electrical system. Accurate numerical models are created to simulate vehicle behavior and optimize race strategy. On-track tests validate these models.",
  },
  {
    id: "aerodynamics",
    title: "Aerodynamics",
    icon: asset("departments/aerodynamic.svg"),
    image: asset("mission/T2-AERODYNAMICS.jpg"),
    description:
      "Responsible for defining the external shape of the vehicle body to optimize aerodynamic efficiency. Fluid dynamic analyses are carried out using advanced CFD simulations.",
  },
  {
    id: "communication",
    title: "Communication",
    icon: asset("departments/bullhorn-2.svg"),
    image: asset("T1-COMMUNICATION.webp"),
    description:
      "Manages social media, the website, and PR. A communication plan is defined to narrate the team's journey to the Shell Eco-marathon, engaging sponsors and the public.",
  },
];

export const TEAM_STRUCTURE: Department[] = [
  {
    title: "Management",
    members: [
      { name: "Pietro", surname: "Stabile", role: "Team Leader", email: "pietro.stabile@polimi.it", image: IMMAGINE_PERSONA_SEGNAPOSTO },
    ],
  },
  {
    title: "Chassis & Subsystem",
    members: [
      { name: "Stefano", surname: "Chiarito", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Giacomo Giovanni", surname: "Moroni", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Leonardo", surname: "Nava", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Carola", surname: "Bragotto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Simone", surname: "Viterale", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Marco", surname: "Marelli", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Angelo", surname: "Balconi", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Oscar Eduardo", surname: "Alfonso Dextre", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Francesco", surname: "Lo Sardo", image: IMMAGINE_PERSONA_SEGNAPOSTO },
    ],
  },
  {
    title: "Drivetrain",
    members: [
      { name: "Giacomo", surname: "Bertocchi", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Leonardo", surname: "Mattiuzzi", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Filippo", surname: "Mariani", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Alessandro", surname: "Cavalli", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Tommaso", surname: "Colombo", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Giorgio", surname: "Ramundo", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Massimiliano", surname: "De Palma", image: IMMAGINE_PERSONA_SEGNAPOSTO },
    ],
  },
  {
    title: "Strategy & Electronics",
    members: [
      { name: "Federico", surname: "Meli", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Riccardo", surname: "Marinò", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Andrea", surname: "Terragni", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Alessandro", surname: "Giani", image: IMMAGINE_PERSONA_SEGNAPOSTO },
    ],
  },
  {
    title: "Aerodynamics",
    members: [
      { name: "Lorenzo", surname: "Perfetti", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Lorenzo", surname: "Morellini", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Matteo", surname: "Lorenzini", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Daniele", surname: "Marcora", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Ali", surname: "Nazir", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Marco", surname: "Schifone", image: IMMAGINE_PERSONA_SEGNAPOSTO },
    ],
  },
  {
    title: "Communication",
    members: [
      { name: "Raffaello", surname: "Morga", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Asia", surname: "Scalia", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Carolina", surname: "Bonato", image: IMMAGINE_PERSONA_SEGNAPOSTO },
    ],
  },
];
