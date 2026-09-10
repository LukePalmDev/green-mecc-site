import { Department } from '../types';
import { asset, numberedAsset } from '../utils/asset';

const memberImage = (department: string, fileName: string) =>
  asset(`team/members/${department}/${fileName}.webp`);

const departmentIcon = (order: number, name: string) =>
  numberedAsset('departments', 'D', order, name, 'svg', 'lower');

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
  // Il testo completo di Join Us vive ora in C4-JOIN-US.ts (pagina /join-us).
  // Qui resta solo il rimando che chiude la pagina Team.
  rimandoJoinUs: {
    titolo: "JOIN US",
    testo:
      "Recruiting opens on 21 September. Find out how the selection works and which department fits you best.",
    link: "Go to Join Us",
  },
};

export const DEPARTMENTS_INFO = [
  {
    id: "management",
    title: "Management",
    icon: departmentIcon(6, "management"),
    image: asset("team/covers/management.webp"),
    description: [
      "The main task is to manage and coordinate the work of all team members. Every year, the seasonal objectives are established, and the team is formed. Experience gained over many seasons is the basis for success.",
    ],
  },
  {
    id: "chassis",
    title: "Chassis",
    icon: departmentIcon(3, "chassis"),
    image: asset("team/covers/chassis.webp"),
    description: [
      "The Chassis Department is responsible for the design, structural analysis, and manufacturing of our vehicle's chassis. Our goal is to reduce the vehicle’s weight to minimize energy consumption while maintaining high stiffness and ensuring protection for the driver. We also design all removable body parts such as the doors, the bonnet and the trunk. We work with carbon composite materials, for which we also produce the moulds. Our workflow encompasses surface modelling of the components, structural optimizations and hands-on lamination of the chassis and the other carbon fiber parts.",
    ],
  },
  {
    id: "mechanical-design",
    title: "Mechanical Design",
    icon: departmentIcon(5, "engineering"),
    image: asset("team/covers/mechanical-design.webp"),
    description: [
      "The mechanical design department is responsible for the technical development of the vehicle, from defining design solutions to manufacturing the components. Activities include CAD design, the integration of mechanical and electrical systems, weight and efficiency optimization, the validation of technical solutions, and support for the production and assembly of the prototype.",
    ],
  },
  {
    id: "strategy",
    title: "Strategy",
    icon: departmentIcon(4, "circuit"),
    image: asset("team/covers/strategy.webp"),
    coverNeedsZoom: true,
    description: [
      "The department develops virtual vehicle and circuit modeling using MATLAB and SIMULINK, facilitating the identification of optimized driving paradigms designed to drive down fuel consumption and streamline overall performance efficiency.",
    ],
  },
  {
    id: "electronics",
    title: "Electronics",
    icon: departmentIcon(4, "circuit"),
    image: asset("team/covers/electronics.webp"),
    description: [
      "Responsible for the design, development, and integration of the vehicle’s electrical architecture and control systems. The process includes custom PCB engineering and power management for the powertrain, alongside the implementation of real-time data acquisition, sensor fusion, and telemetry for performance optimization.",
    ],
  },
  {
    id: "aerodynamics",
    title: "Aerodynamics",
    icon: departmentIcon(1, "aerodynamic"),
    image: asset("mission/T2-AERODYNAMICS.jpg"),
    description: [
      "Study and optimization of the car's aerodynamics to minimize drag. Through CFD simulations and the analysis of innovative solutions, the department defines the vehicle's external shape, validating the results through track tests to ensure maximum energy efficiency.",
    ],
  },
  {
    id: "design-communication",
    title: "Design & Communication",
    icon: departmentIcon(2, "bullhorn"),
    image: asset("team/covers/design-communication.webp"),
    description: [
      "Responsible for defining and managing the team’s visual identity and communication strategy across digital and physical platforms. The department handles social media content production (photography, video, and motion graphics), develops official merchandise, designs graphic and presentation materials, and creates the vehicle livery, ensuring a consistent and cohesive team identity.",
    ],
  },
  {
    id: "logistics-pr",
    title: "Logistics & PR",
    icon: departmentIcon(7, "structure"),
    image: asset("T7-ACADEMIC SUPERVISOR.jpg"),
    description: [
      "The Logistics & PR department plays a dual role within the Green Mecc Team.",
      "On one hand, it is responsible for organizing and managing all non-strictly technical activities, such as the arrangement of the workshop, the recruitment of new members, and the organization of events the Team is invited to attend by the Politecnico di Milano.",
      "On the other hand, the department handles the search for and management of sponsorships, an activity that stems from the needs highlighted by the other departments. This process is carried out by managing the administrative and organizational procedures necessary to establish contracts or agreements capable of meeting the identified needs.",
    ],
  },
];

export const TEAM_STRUCTURE: Department[] = [
  {
    title: "Management",
    members: [
      { name: "Irene", surname: "Marchetti", image: memberImage("management", "irene-marchetti") },
    ],
  },
  {
    title: "Chassis",
    members: [
      { name: "Marco", surname: "Marelli", role: "Capo Reparto", image: memberImage("chassis", "marco-marelli") },
      { name: "Alessandro", surname: "Bernini", image: memberImage("chassis", "alessandro-bernini") },
      { name: "Alessandro", surname: "Peroni", image: memberImage("chassis", "alessandro-peroni") },
      { name: "Elia", surname: "Marcon", image: memberImage("chassis", "elia-marcon") },
      { name: "Giacomo", surname: "Sanguin", image: memberImage("chassis", "giacomo-sanguin") },
      { name: "Laura", surname: "Mognol", image: memberImage("chassis", "laura-mognol") },
      { name: "Mateo Sebastian", surname: "Ormaza Jurado", image: memberImage("chassis", "mateo-sebastian-ormaza-jurado") },
      { name: "Riccardo", surname: "Macchi", image: memberImage("chassis", "riccardo-macchi") },
    ],
  },
  {
    title: "Mechanical Design",
    members: [
      { name: "Leonardo", surname: "Mattiuzzi", role: "Capo Reparto", image: memberImage("mechanical-design", "leonardo-mattiuzzi") },
      { name: "Tommaso", surname: "Colombo", role: "Capo Reparto", image: memberImage("mechanical-design", "tommaso-colombo") },
      { name: "Alessandro", surname: "Ferrario", image: memberImage("mechanical-design", "alessandro-ferrario") },
      { name: "Emanuele", surname: "Ambrosini", image: memberImage("mechanical-design", "emanuele-ambrosini") },
      { name: "Federico", surname: "Benincà", image: memberImage("mechanical-design", "federico-beninca") },
      { name: "Federico", surname: "Greco", image: memberImage("mechanical-design", "federico-greco") },
      { name: "Giacomo", surname: "Moroni", image: memberImage("mechanical-design", "giacomo-moroni") },
      { name: "Loris Costantino", surname: "Catena", image: memberImage("mechanical-design", "loris-costantino-catena") },
      { name: "Luca", surname: "Salerno", image: memberImage("mechanical-design", "luca-salerno") },
      { name: "Matteo", surname: "Cefalo", image: memberImage("mechanical-design", "matteo-cefalo") },
      { name: "Mattia", surname: "Bicchierri", image: memberImage("mechanical-design", "mattia-bicchierri") },
      { name: "Riccardo", surname: "Belli", image: memberImage("mechanical-design", "riccardo-belli") },
      { name: "Riccardo", surname: "Zambelli", image: memberImage("mechanical-design", "riccardo-zambelli") },
    ],
  },
  {
    title: "Strategy",
    members: [
      { name: "Filippo", surname: "Mariani", role: "Capo Reparto", image: memberImage("strategy", "filippo-mariani") },
      { name: "Alessandro", surname: "Carabetta", image: memberImage("strategy", "alessandro-carabetta") },
      { name: "Christian", surname: "Aries", image: memberImage("strategy", "christian-aries") },
      { name: "Davide", surname: "Alfieri", image: memberImage("strategy", "davide-alfieri") },
      { name: "Francesco", surname: "Mazzatinti", image: memberImage("strategy", "francesco-mazzatinti") },
      { name: "Simone", surname: "Valzanìa", image: memberImage("strategy", "simone-valzania") },
    ],
  },
  {
    title: "Electronics",
    members: [
      { name: "Riccardo", surname: "Marinò", role: "Capo Reparto", image: memberImage("electronics", "riccardo-marino") },
      { name: "Simone", surname: "Valzanìa", role: "Capo Reparto", image: memberImage("electronics", "simone-valzania") },
      { name: "Andrea", surname: "Gemelli", image: memberImage("electronics", "andrea-gemelli") },
      { name: "Federico", surname: "Lai", image: memberImage("electronics", "federico-lai") },
      { name: "Fouad", surname: "Rezk", image: memberImage("electronics", "fouad-rezk") },
      { name: "Francesco", surname: "Mazzatinti", image: memberImage("electronics", "francesco-mazzatinti") },
      { name: "Gabriele", surname: "Milnelli", image: memberImage("electronics", "gabriele-milnelli") },
      { name: "Luca", surname: "Pagani", image: memberImage("electronics", "luca-pagani") },
      { name: "Matteo", surname: "Merga", image: memberImage("electronics", "matteo-merga") },
      { name: "Riccardo", surname: "Bellardi", image: memberImage("electronics", "riccardo-bellardi") },
      { name: "Sanaz", surname: "Motie", image: memberImage("electronics", "sanaz-motie") },
    ],
  },
  {
    title: "Aerodynamics",
    members: [
      { name: "Filippo", surname: "Nicoletti", role: "Capo Reparto", image: memberImage("aerodynamics", "filippo-nicoletti") },
      { name: "Alessandro", surname: "Ongaro", image: memberImage("aerodynamics", "alessandro-ongaro") },
      { name: "Ali", surname: "Nazir", image: memberImage("aerodynamics", "ali-nazir") },
      { name: "Andrea", surname: "Sgotto", image: memberImage("aerodynamics", "andrea-sgotto") },
      { name: "Anthony", surname: "Hovig", image: memberImage("aerodynamics", "anthony-hovig") },
      { name: "Benedetta", surname: "Tartaglia", image: memberImage("aerodynamics", "benedetta-tartaglia") },
      { name: "Caterina", surname: "Marson", image: memberImage("aerodynamics", "caterina-marson") },
      { name: "Davide", surname: "La Ferla", image: memberImage("aerodynamics", "davide-la-ferla") },
      { name: "Edoardo", surname: "Berna", image: memberImage("aerodynamics", "edoardo-berna") },
      { name: "Enzo", surname: "Lottin", image: memberImage("aerodynamics", "enzo-lottin") },
      { name: "Gianpaolo", surname: "Battini", image: memberImage("aerodynamics", "gianpaolo-battini") },
      { name: "Leonardo", surname: "Mizzotti", image: memberImage("aerodynamics", "leonardo-mizzotti") },
      { name: "Lizzardo", surname: "Pizzi", image: memberImage("aerodynamics", "lizzardo-pizzi") },
      { name: "Lorenzo", surname: "Tholanda", image: memberImage("aerodynamics", "lorenzo-tholanda") },
      { name: "Luca", surname: "Brusa", image: memberImage("aerodynamics", "luca-brusa") },
      { name: "Mattia", surname: "Conte", image: memberImage("aerodynamics", "mattia-conte") },
      { name: "Mirko", surname: "Ognissanti", image: memberImage("aerodynamics", "mirko-ognissanti") },
      { name: "Nicholas", surname: "Cavaleri", image: memberImage("aerodynamics", "nicholas-cavaleri") },
      { name: "Titouan", surname: "Dubray", image: memberImage("aerodynamics", "titouan-dubray") },
    ],
  },
  {
    title: "Design & Communication",
    members: [
      { name: "Giorgia", surname: "Tagliabue", role: "Capo Reparto", image: memberImage("design-communication", "giorgia-tagliabue") },
      { name: "Pietro", surname: "Bossi", role: "Capo Reparto", image: memberImage("design-communication", "pietro-bossi") },
      { name: "Ekaterina", surname: "Misiura", image: memberImage("design-communication", "ekaterina-misiura") },
      { name: "Luca Vittorio", surname: "Zanetti", image: memberImage("design-communication", "luca-vittorio-zanetti") },
    ],
  },
  {
    title: "Logistics & PR",
    members: [
      { name: "Federico", surname: "Meli", role: "Capo Reparto", image: memberImage("logistics-pr", "federico-meli") },
      { name: "Ali", surname: "Nazir", image: memberImage("logistics-pr", "ali-nazir") },
      { name: "Benedetta", surname: "Tartaglia", image: memberImage("logistics-pr", "benedetta-tartaglia") },
      { name: "Diletta", surname: "Bono", image: memberImage("logistics-pr", "diletta-bono") },
      { name: "Leonardo", surname: "Naletto", image: memberImage("logistics-pr", "leonardo-naletto") },
      { name: "Lorenzo", surname: "Morellini", image: memberImage("logistics-pr", "lorenzo-morellini") },
    ],
  },
];
