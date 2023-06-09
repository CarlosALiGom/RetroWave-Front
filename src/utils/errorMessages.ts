interface ErrorMessagesStructure {
  wrongCredentials: string;
  synthsNotFound: string;
  synthNotDeleted: string;
  synthNotAdded: string;
}

export const errorMessages: ErrorMessagesStructure = {
  wrongCredentials: "Wrong Credentials",
  synthsNotFound: "Sorry, synths can't be loaded",
  synthNotDeleted: "Error deleting synth",
  synthNotAdded: "Error adding synth",
};
