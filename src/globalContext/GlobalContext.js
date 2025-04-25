import React, { createContext, useState } from "react";

// Tạo một context mới
export const GlobalContext = createContext();

// Tạo một component Provider để cung cấp context cho các component con
export const GlobalProvider = ({ children, value }) => {

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
