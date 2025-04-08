import { createContext, useState} from "react";

export const ActiveContext = createContext();

const ActiveContextProvider = ({ children }) => {
  // Add Style Active Menus
  const [isActive, setIsActive] = useState("Home");
  const [isClick, setIsClick] = useState(false);

  const value = {
    isActive,
    setIsActive,
    isClick,
    setIsClick,
  };



  return (
    <ActiveContext.Provider value={value}>{children}</ActiveContext.Provider>
  );
};

export default ActiveContextProvider;
