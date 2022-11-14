import React, { useContext, useState } from "react";

export const LinkContext = React.createContext({
  link: "",
  setLink: (link) => link,
});

export const useLink = () => useContext(LinkContext);

export const LinkProvider = ({ children }) => {
  const [link, setLink] = useState("");

  return (
    <LinkContext.Provider value={{ link, setLink }}>
      {children}
    </LinkContext.Provider>
  );
};
