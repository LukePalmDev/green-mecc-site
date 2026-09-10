import { TeamMember } from '../types';
import { numberedAsset } from '../utils/asset';

type MemberWithoutImage = Omit<TeamMember, 'image'>;

const membersWithImages = (
  department: string,
  members: MemberWithoutImage[],
): TeamMember[] =>
  members.map((member, index) => ({
    ...member,
    image: numberedAsset(
      `team/members/${department}`,
      'TM',
      index + 1,
      `${member.name}-${member.surname}`,
    ),
  }));

const departmentIcon = (order: number, name: string) =>
  numberedAsset('departments', 'D', order, name, 'svg', 'lower');

const departmentCover = (order: number, name: string) =>
  numberedAsset('team/covers', 'TC', order, name);

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
    immagine: numberedAsset("general", "G", 1, "Albo"),
    testoAlternativoImmagine: "Albo Green Mecc",
  },
  rimandoJoinUs: {
    titolo: "JOIN US",
    testo:
      "Recruiting opens on 14 September. Find out how the selection works and which department fits you best.",
    link: "Go to Join Us",
  },
};

export const DEPARTMENTS_INFO = [
  {
    id: "management",
    title: "Management",
    icon: departmentIcon(6, "management"),
    image: departmentCover(1, "Management"),
    description: [
      "The main task is to manage and coordinate the work of all team members. Every year, the seasonal objectives are established, and the team is formed. Experience gained over many seasons is the basis for success.",
    ],
    members: membersWithImages("management", [
      { name: "Irene", surname: "Marchetti" },
    ]),
  },
  {
    id: "chassis",
    title: "Chassis",
    icon: departmentIcon(3, "chassis"),
    image: departmentCover(2, "Chassis"),
    description: [
      "The Chassis Department is responsible for the design, structural analysis, and manufacturing of our vehicle's chassis. Our goal is to reduce the vehicle’s weight to minimize energy consumption while maintaining high stiffness and ensuring protection for the driver. We also design all removable body parts such as the doors, the bonnet and the trunk. We work with carbon composite materials, for which we also produce the moulds. Our workflow encompasses surface modelling of the components, structural optimizations and hands-on lamination of the chassis and the other carbon fiber parts.",
    ],
    members: membersWithImages("chassis", [
      { name: "Marco", surname: "Marelli", role: "Capo Reparto" },
      { name: "Alessandro", surname: "Bernini" },
      { name: "Alessandro", surname: "Peroni" },
      { name: "Elia", surname: "Marcon" },
      { name: "Giacomo", surname: "Sanguin" },
      { name: "Laura", surname: "Mognol" },
      { name: "Mateo Sebastian", surname: "Ormaza Jurado" },
      { name: "Riccardo", surname: "Macchi" },
    ]),
  },
  {
    id: "mechanical-design",
    title: "Mechanical Design",
    icon: departmentIcon(5, "engineering"),
    image: departmentCover(3, "Mechanical Design"),
    description: [
      "The mechanical design department is responsible for the technical development of the vehicle, from defining design solutions to manufacturing the components. Activities include CAD design, the integration of mechanical and electrical systems, weight and efficiency optimization, the validation of technical solutions, and support for the production and assembly of the prototype.",
    ],
    members: membersWithImages("mechanical-design", [
      { name: "Leonardo", surname: "Mattiuzzi", role: "Capo Reparto" },
      { name: "Tommaso", surname: "Colombo", role: "Capo Reparto" },
      { name: "Alessandro", surname: "Ferrario" },
      { name: "Emanuele", surname: "Ambrosini" },
      { name: "Federico", surname: "Benincà" },
      { name: "Federico", surname: "Greco" },
      { name: "Giacomo", surname: "Moroni" },
      { name: "Loris Costantino", surname: "Catena" },
      { name: "Luca", surname: "Salerno" },
      { name: "Matteo", surname: "Cefalo" },
      { name: "Mattia", surname: "Bicchierri" },
      { name: "Riccardo", surname: "Belli" },
      { name: "Riccardo", surname: "Zambelli" },
    ]),
  },
  {
    id: "strategy",
    title: "Strategy",
    icon: departmentIcon(4, "circuit"),
    image: departmentCover(4, "Strategy"),
    description: [
      "The department develops virtual vehicle and circuit modeling using MATLAB and SIMULINK, facilitating the identification of optimized driving paradigms designed to drive down fuel consumption and streamline overall performance efficiency.",
    ],
    members: membersWithImages("strategy", [
      { name: "Filippo", surname: "Mariani", role: "Capo Reparto" },
      { name: "Alessandro", surname: "Carabetta" },
      { name: "Christian", surname: "Aries" },
      { name: "Davide", surname: "Alfieri" },
      { name: "Francesco", surname: "Mazzatinti" },
      { name: "Simone", surname: "Valzanìa" },
    ]),
  },
  {
    id: "electronics",
    title: "Electronics",
    icon: departmentIcon(4, "circuit"),
    image: departmentCover(5, "Electronics"),
    description: [
      "Responsible for the design, development, and integration of the vehicle’s electrical architecture and control systems. The process includes custom PCB engineering and power management for the powertrain, alongside the implementation of real-time data acquisition, sensor fusion, and telemetry for performance optimization.",
    ],
    members: membersWithImages("electronics", [
      { name: "Riccardo", surname: "Marinò", role: "Capo Reparto" },
      { name: "Simone", surname: "Valzanìa", role: "Capo Reparto" },
      { name: "Andrea", surname: "Gemelli" },
      { name: "Federico", surname: "Lai" },
      { name: "Fouad", surname: "Rezk" },
      { name: "Francesco", surname: "Mazzatinti" },
      { name: "Gabriele", surname: "Milnelli" },
      { name: "Luca", surname: "Pagani" },
      { name: "Matteo", surname: "Merga" },
      { name: "Riccardo", surname: "Bellardi" },
      { name: "Sanaz", surname: "Motie" },
    ]),
  },
  {
    id: "aerodynamics",
    title: "Aerodynamics",
    icon: departmentIcon(1, "aerodynamic"),
    image: departmentCover(6, "Aerodynamics"),
    description: [
      "Study and optimization of the car's aerodynamics to minimize drag. Through CFD simulations and the analysis of innovative solutions, the department defines the vehicle's external shape, validating the results through track tests to ensure maximum energy efficiency.",
    ],
    members: membersWithImages("aerodynamics", [
      { name: "Filippo", surname: "Nicoletti", role: "Capo Reparto" },
      { name: "Alessandro", surname: "Ongaro" },
      { name: "Ali", surname: "Nazir" },
      { name: "Andrea", surname: "Sgotto" },
      { name: "Anthony", surname: "Hovig" },
      { name: "Benedetta", surname: "Tartaglia" },
      { name: "Caterina", surname: "Marson" },
      { name: "Davide", surname: "La Ferla" },
      { name: "Edoardo", surname: "Berna" },
      { name: "Enzo", surname: "Lottin" },
      { name: "Gianpaolo", surname: "Battini" },
      { name: "Leonardo", surname: "Mizzotti" },
      { name: "Lizzardo", surname: "Pizzi" },
      { name: "Lorenzo", surname: "Tholanda" },
      { name: "Luca", surname: "Brusa" },
      { name: "Mattia", surname: "Conte" },
      { name: "Mirko", surname: "Ognissanti" },
      { name: "Nicholas", surname: "Cavaleri" },
      { name: "Titouan", surname: "Dubray" },
    ]),
  },
  {
    id: "design-communication",
    title: "Design & Communication",
    icon: departmentIcon(2, "bullhorn"),
    image: departmentCover(7, "Design Communication"),
    description: [
      "Responsible for defining and managing the team’s visual identity and communication strategy across digital and physical platforms. The department handles social media content production (photography, video, and motion graphics), develops official merchandise, designs graphic and presentation materials, and creates the vehicle livery, ensuring a consistent and cohesive team identity.",
    ],
    members: membersWithImages("design-communication", [
      { name: "Giorgia", surname: "Tagliabue", role: "Capo Reparto" },
      { name: "Pietro", surname: "Bossi", role: "Capo Reparto" },
      { name: "Ekaterina", surname: "Misiura" },
      { name: "Luca Vittorio", surname: "Zanetti" },
    ]),
  },
  {
    id: "logistics-pr",
    title: "Logistics & PR",
    icon: departmentIcon(7, "structure"),
    image: departmentCover(8, "Logistics PR"),
    description: [
      "The Logistics & PR department plays a dual role within the Green Mecc Team.",
      "On one hand, it is responsible for organizing and managing all non-strictly technical activities, such as the arrangement of the workshop, the recruitment of new members, and the organization of events the Team is invited to attend by the Politecnico di Milano.",
      "On the other hand, the department handles the search for and management of sponsorships, an activity that stems from the needs highlighted by the other departments. This process is carried out by managing the administrative and organizational procedures necessary to establish contracts or agreements capable of meeting the identified needs.",
    ],
    members: membersWithImages("logistics-pr", [
      { name: "Federico", surname: "Meli", role: "Capo Reparto" },
      { name: "Ali", surname: "Nazir" },
      { name: "Benedetta", surname: "Tartaglia" },
      { name: "Diletta", surname: "Bono" },
      { name: "Leonardo", surname: "Naletto" },
      { name: "Lorenzo", surname: "Morellini" },
    ]),
  },
];
