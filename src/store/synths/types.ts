export interface SynthStructure {
  name: string;
  brand: string;
  imageUrl: string;
  description: string;
  yearOfCreation: string;
  type: string;
}

export interface SynthDataStructure extends SynthStructure {
  _id: string;
}