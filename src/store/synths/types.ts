export interface SynthStructure {
  name: string;
  brand: string;
  imageUrl: string;
  description: string;
  yearOfCreation: string;
  type: string;
}

export interface SynthDataStructure extends SynthStructure {
  id: string;
}

export interface ResponseDataStructure {
  synths: SynthDataStructure[];
  totalSynths: number;
}
