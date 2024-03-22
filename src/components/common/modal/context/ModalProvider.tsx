'use client'
import React, { PropsWithChildren, createContext, useState } from "react";

// Define the type for the context value
type ModalUIContextType = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context
export const ModalUIContext = createContext<ModalUIContextType | undefined>(undefined);

// Context Wrapper component
export const ModalUIProvider: React.FC<PropsWithChildren> = ({ children=undefined }) => {
  // State to manage the modal's open/close state
  const [openModal, setOpenModal] = useState<boolean>(false);

  // Create the context value
  const contextValue: ModalUIContextType = {
    openModal,
    setOpenModal,
  };

  return (
    // Provide the context value to the children
    <ModalUIContext.Provider value={contextValue}>
      {children}
    </ModalUIContext.Provider>
  );
};
