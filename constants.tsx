
import { DistrictInfo, Statistics, Landmark, Person } from './types';

export const MIRISHKOR_INFO: DistrictInfo = {
  name: "Mirishkor tumani",
  region: "Qashqadaryo viloyati",
  population: "120,000+",
  area: "3.1 ming km²",
  established: "2003-yil",
  description: "Mirishkor tumani Qashqadaryo viloyatining g'arbiy qismida joylashgan bo'lib, asosan qishloq xo'jaligi va chorvachilikka ixtisoslashgan. Tuman o'zining mehnatsevar xalqi va keng paxta dalalari bilan mashhur."
};

export const DISTRICT_STATS: Statistics[] = [
  { label: "Aholi", value: 122400, unit: "kishi", color: "#3B82F6" },
  { label: "Maydon", value: 3100, unit: "km²", color: "#10B981" },
  { label: "Mahallalar", value: 42, unit: "ta", color: "#F59E0B" },
  { label: "Maktablar", value: 54, unit: "ta", color: "#EF4444" }
];

export const LANDMARKS: Landmark[] = [
  {
    id: 1,
    title: "Mirishkor Markaziy Masjidi",
    description: "Tumanning eng yirik va go'zal me'moriy obidalaridan biri.",
    image: "https://picsum.photos/seed/mosque/600/400"
  },
  {
    id: 2,
    title: "Yangi Mirishkor Bog'i",
    description: "Aholi dam olishi uchun zamonaviy sharoitlarga ega istirohat bog'i.",
    image: "https://picsum.photos/seed/park/600/400"
  },
  {
    id: 3,
    title: "Tarixiy Pomuq Qishlog'i",
    description: "Qadimiy urf-odatlar va an'analar saqlanib qolgan maskan.",
    image: "https://picsum.photos/seed/village/600/400"
  }
];

export const FAMOUS_PEOPLE: Person[] = [
  {
    id: 1,
    name: "Zokir Eshonqulov",
    role: "Olim, Professor",
    bio: "Ilm-fan rivojiga ulkan hissa qo'shgan atoqli olim.",
    image: "https://picsum.photos/seed/person1/200/200"
  },
  {
    id: 2,
    name: "G'ulom Mirzo",
    role: "Shoir",
    bio: "Mirishkor tabiatini va odamlarini kuylagan iste'dodli ijodkor.",
    image: "https://picsum.photos/seed/person2/200/200"
  }
];
