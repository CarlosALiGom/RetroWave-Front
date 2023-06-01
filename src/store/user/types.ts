export interface UserDataDecodedStructure {
  id: string;
  name: string;
}
export interface UserTokenStructure extends UserDataDecodedStructure {
  token: string;
}

export interface UserDataStructure extends UserTokenStructure {
  isLogged: boolean;
}
