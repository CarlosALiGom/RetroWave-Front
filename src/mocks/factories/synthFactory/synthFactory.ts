import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { SynthDataStructure } from "../../../store/synths/types";

const synthsDataFactory = Factory.define<SynthDataStructure>(() => ({
  _id: faker.database.mongodbObjectId.toString(),
  name: faker.person.firstName(),
  brand: faker.music.genre(),
  imageUrl: faker.image.url(),
  yearOfCreation: faker.number.int({ min: 1970, max: 2000 }).toString(),
  type: faker.helpers.arrayElement(["Analog", "hibrid", "digital"]),
  description: faker.music.genre(),
}));

export const getSynthDataMock = (data?: SynthDataStructure) => {
  synthsDataFactory.build(data);
};

export const getSynthsDataMock = (
  number: number,
  data?: SynthDataStructure
) => {
  return synthsDataFactory.buildList(number, data);
};
