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
    id: "management",
    title: "Management",
    icon: asset("departments/management-3.svg"),
    image: asset("mission/T6-MANAGEMENT.jpg"),
    description:
      "The main task is to manage and coordinate the work of all team members. Every year, the seasonal objectives are established, and the team is formed. Experience gained over many seasons is the basis for success.",
  },
  {
    id: "chassis",
    title: "Chassis",
    icon: asset("departments/chassis.svg"),
    image: asset("mission/T5-CHASSIS & SUBSYSTEM.jpg"),
    description:
      "The Chassis Department is responsible for the design, structural analysis, and manufacturing of our vehicle's chassis. Our goal is to reduce the vehicle’s weight to minimize energy consumption while maintaining high stiffness and ensuring protection for the driver. We also design all removable body parts such as the doors, the bonnet and the trunk. We work with carbon composite materials, for which we also produce the moulds. Our workflow encompasses surface modelling of the components, structural optimizations and hands-on lamination of the chassis and the other carbon fiber parts.",
  },
  {
    id: "mechanical-design",
    title: "Mechanical Design",
    icon: asset("departments/engineering.svg"),
    image: asset("mission/T4-DRIVETRAIN.jpg"),
    description:
      "The mechanical design department is responsible for the technical development of the vehicle, from defining design solutions to manufacturing the components. Activities include CAD design, the integration of mechanical and electrical systems, weight and efficiency optimization, the validation of technical solutions, and support for the production and assembly of the prototype.",
  },
  {
    id: "strategy",
    title: "Strategy",
    icon: asset("departments/circuit.svg"),
    image: asset("mission/T3-STRATEGY & ELECTRONICS.jpg"),
    description:
      "The department develops virtual vehicle and circuit modeling using MATLAB and SIMULINK, facilitating the identification of optimized driving paradigms designed to drive down fuel consumption and streamline overall performance efficiency.",
  },
  {
    id: "electronics",
    title: "Electronics",
    icon: asset("departments/circuit.svg"),
    image: asset("mission/T3-STRATEGY & ELECTRONICS.jpg"),
    description:
      "Responsible for the design, development, and integration of the vehicle’s electrical architecture and control systems. The process includes custom PCB engineering and power management for the powertrain, alongside the implementation of real-time data acquisition, sensor fusion, and telemetry for performance optimization.",
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
    id: "design-communication",
    title: "Design & Communication",
    icon: asset("departments/bullhorn-2.svg"),
    image: asset("T1-COMMUNICATION.webp"),
    description:
      "Responsible for defining and managing the team’s visual identity and communication strategy across digital and physical platforms. The department handles social media content production (photography, video, and motion graphics), develops official merchandise, designs graphic and presentation materials, and creates the vehicle livery, ensuring a consistent and cohesive team identity.",
  },
  {
    id: "logistics-pr",
    title: "Logistics & PR",
    icon: asset("departments/structure.svg"),
    image: asset("T7-ACADEMIC SUPERVISOR.jpg"),
    description:
      "The Logistics & PR department plays a dual role within the Green Mecc Team. On one hand, it is responsible for organizing and managing all non-strictly technical activities, such as the arrangement of the workshop, the recruitment of new members, and the organization of events the Team is invited to attend by the Politecnico di Milano. On the other hand, the department handles the search for and management of sponsorships, an activity that stems from the needs highlighted by the other departments. This process is carried out by managing the administrative and organizational procedures necessary to establish contracts or agreements capable of meeting the identified needs.",
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
    title: "Chassis",
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
    title: "Mechanical Design",
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
    title: "Strategy",
    members: [
      { name: "Federico", surname: "Meli", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Riccardo", surname: "Marinò", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Andrea", surname: "Terragni", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Alessandro", surname: "Giani", image: IMMAGINE_PERSONA_SEGNAPOSTO },
    ],
  },
  {
    title: "Electronics",
    members: [],
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
    title: "Design & Communication",
    members: [
      { name: "Raffaello", surname: "Morga", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Asia", surname: "Scalia", role: "Capo Reparto", image: IMMAGINE_PERSONA_SEGNAPOSTO },
      { name: "Carolina", surname: "Bonato", image: IMMAGINE_PERSONA_SEGNAPOSTO },
    ],
  },
  {
    title: "Logistics & PR",
    members: [],
  },
];
