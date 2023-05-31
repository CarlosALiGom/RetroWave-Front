import jwt_decode from "jwt-decode";
import { UserTokenStructure } from "../../store/user/types";

const getTokenData = (token: string): UserTokenStructure => {
  const tokenData: { name: string; sub: string } = jwt_decode(token);
  const userData: UserTokenStructure = {
    id: tokenData.sub,
    name: tokenData.name,
    token,
  };
  return userData;
};

export default getTokenData;
