import { Partner } from '../types';
import { numberedAsset } from '../utils/asset';

const sponsorLogo = (order: number, name: string) =>
  numberedAsset('sponsor', 'S', order, name);

export const SPONSORS_CONTENT = {
  titolo: "SPONSORS",
  descrizione:
    "A sincere thank you goes to our sponsors! Thanks to the support of several companies, the team is able to successfully complete its project. We are deeply grateful because this contribution goes far beyond building a vehicle: it fosters the professional and personal growth of many students every year.",
};

export const PARTNERS: Partner[] = [
  { name: "AM Costruzioni Modelli", logo: sponsorLogo(1, "AM Costruzioni Modelli") },
  { name: "Altair", logo: sponsorLogo(2, "Altair"), url: "https://altair.com/" },
  { name: "Ansys", logo: sponsorLogo(3, "Ansys"), url: "https://www.ansys.com/", surface: "dark" },
  { name: "Athlon", logo: sponsorLogo(4, "Athlon"), surface: "dark" },
  { name: "Brembo", logo: sponsorLogo(5, "Brembo"), url: "https://www.brembo.com/" },
  { name: "CloudHPC", logo: sponsorLogo(6, "CloudHPC") },
  { name: "CIT", logo: sponsorLogo(7, "CIT") },
  { name: "CIMA 1915", logo: sponsorLogo(8, "CIMA 1915"), surface: "dark" },
  { name: "Dewesoft", logo: sponsorLogo(9, "Dewesoft") },
  { name: "Digifarm", logo: sponsorLogo(10, "Digifarm") },
  { name: "Digital Area 102", logo: sponsorLogo(11, "Digital Area 102") },
  { name: "Discacciati", logo: sponsorLogo(12, "Discacciati") },
  { name: "EasyEDA & JLCPCB", logo: sponsorLogo(13, "EasyEDA & JLCPCB") },
  { name: "Elesa", logo: sponsorLogo(14, "Elesa") },
  { name: "Mako Shark", logo: sponsorLogo(15, "Mako Shark") },
  { name: "NOPE Engineering", logo: sponsorLogo(16, "NOPE Engineering") },
  { name: "P.PLAST", logo: sponsorLogo(17, "P.PLAST") },
  { name: "RS", logo: sponsorLogo(18, "RS") },
  { name: "SmartCAE", logo: sponsorLogo(19, "SmartCAE") },
  { name: "Circuito Tazio Nuvolari", logo: sponsorLogo(20, "Circuito Tazio Nuvolari") },
  { name: "Henkel (Loctite)", logo: sponsorLogo(21, "Henkel Loctite") },
  { name: "CERATIZIT Group", logo: sponsorLogo(22, "Ceratizit Group") },
];
