export interface TeamMember {
  name: string;
  surname: string;
  role?: string;
  email?: string;
  linkedin?: string;
  image: string;
}

export interface Department {
  title: string;
  members: TeamMember[];
}

export interface Vehicle {
  id: string;
  name: string;
  year: string;
  description: string[];
  image: string;
  category?: string;
}

export interface Result {
  year: string;
  location: string;
  competition: string;
  vehicle: string;
  category: string;
  result: string;
  image: string;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}
