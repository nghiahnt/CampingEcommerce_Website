import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

const DecodeToken = async (tokenName) => {
  const cookies = new Cookies();
  try {
    const token = await cookies.get(tokenName);
    if (token) {
      const decodedToken = jwtDecode(token);
      // console.log(decodedToken);
      const userId = decodedToken.userId;
      return userId;
    }
  } catch (error) {
    console.log(error);
  }
};

export default DecodeToken;
