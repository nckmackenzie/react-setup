import React, { useState, useContext } from 'react';

const NavContext = React.createContext();

export const NavProvider = ({ children }) => {
  const [toggleSubmenu, setToggleSubmenu] = useState(false);

  const toggleHandler = () => {
    setToggleSubmenu(!toggleSubmenu);
  };

  const closeSubMenu = () => {
    setToggleSubmenu(false);
  };
  return (
    <NavContext.Provider value={{ toggleSubmenu, toggleHandler, closeSubMenu }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  return useContext(NavContext);
};
