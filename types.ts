
export interface DistrictInfo {
  name: string;
  region: string;
  population: string;
  area: string;
  established: string;
  description: string;
}

export interface Statistics {
  label: string;
  value: number;
  unit: string;
  color: string;
}

export interface Landmark {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Person {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}
