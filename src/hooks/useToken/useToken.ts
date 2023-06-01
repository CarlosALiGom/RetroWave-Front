import jwt_decode from "jwt-decode";
import { UserDataDecodedStructure } from "../../store/user/types";

const useToken = () => {
  const getTokenData = (token: string): UserDataDecodedStructure => {
    const tokenData: { name: string; sub: string } = jwt_decode(token);
    const userData: UserDataDecodedStructure = {
      id: tokenData.sub,
      name: tokenData.name,
    };
    return userData;
  };
  return { getTokenData };
};

export default useToken;
