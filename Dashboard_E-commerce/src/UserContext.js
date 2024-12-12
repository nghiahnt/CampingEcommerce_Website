import { createContext, useState } from "react";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();
// const accessToken = cookies.get("accessToken");

const UserType = createContext();

const UserContext = ({ children }) => {
  const [userId, setUserId] = useState(null);
  // const [_accessToken, setAccessToken] = useState(accessToken);

  return (
    <UserType.Provider value={{ userId, setUserId }}>
      {children}
    </UserType.Provider>
  );
};

export { UserType, UserContext };
