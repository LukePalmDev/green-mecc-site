import { Partner } from '../types';
import { asset } from '../utils/asset';

export const SPONSORS_CONTENT = {
  titolo: "SPONSORS",
  descrizione:
    "A sincere thank you goes to our sponsors! Thanks to the support of several companies, the team is able to successfully complete its project. We are deeply grateful because this contribution goes far beyond building a vehicle: it fosters the professional and personal growth of many students every year.",
};

export const PARTNERS: Partner[] = [
  { name: "AM Costruzioni Modelli", logo: asset("sponsor/2026/am-costruzioni.webp") },
  { name: "Altair", logo: asset("sponsor/2026/altair.webp"), url: "https://altair.com/" },
  { name: "Ansys", logo: asset("sponsor/2026/ansys.webp"), url: "https://www.ansys.com/", surface: "dark" },
  { name: "Athlon", logo: asset("sponsor/2026/athlon.webp"), surface: "dark" },
  { name: "Brembo", logo: asset("sponsor/2026/brembo.webp"), url: "https://www.brembo.com/" },
  { name: "CloudHPC", logo: asset("sponsor/2026/cloudhpc.webp") },
  { name: "CIT", logo: asset("sponsor/2026/cit.webp") },
  { name: "CIMA 1915", logo: asset("sponsor/2026/cima-1915.webp"), surface: "dark" },
  { name: "Dewesoft", logo: asset("sponsor/2026/dewesoft.webp") },
  { name: "Digifarm", logo: asset("sponsor/2026/digifarm.webp") },
  { name: "Digital Area 102", logo: asset("sponsor/2026/digital-area-102.webp") },
  { name: "Discacciati", logo: asset("sponsor/2026/discacciati.webp") },
  { name: "EasyEDA & JLCPCB", logo: asset("sponsor/2026/easyeda-jlcpcb.webp") },
  { name: "Elesa", logo: asset("sponsor/2026/elesa.webp") },
  { name: "Mako Shark", logo: asset("sponsor/2026/mako-shark.webp") },
  { name: "NOPE Engineering", logo: asset("sponsor/2026/nope-engineering.webp") },
  { name: "P.PLAST", logo: asset("sponsor/2026/pplast.webp") },
  { name: "RS", logo: asset("sponsor/2026/rs.webp") },
  { name: "SmartCAE", logo: asset("sponsor/2026/smartcae.webp") },
  { name: "Circuito Tazio Nuvolari", logo: asset("sponsor/2026/tazio-nuvolari.webp") },
];
