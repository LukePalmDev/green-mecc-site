import { Partner } from '../types';
import { asset } from '../utils/asset';

export const SPONSORS_CONTENT = {
  titolo: "SPONSORS",
  descrizione:
    "A sincere thank you goes to our sponsors! Thanks to the support of several companies, the team is able to successfully complete its project. We are deeply grateful because this contribution goes far beyond building a vehicle: it fosters the professional and personal growth of many students every year.",
};

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
