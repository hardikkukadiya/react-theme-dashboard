import React, { createContext, useState, useContext } from 'react';
const NewContext = createContext();
export const NewContextProvider = ({ children }) => {
    const [data, setData] = useState(null);  
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(false);
  const [formData, setFormData] = useState({
    img: "",
    name: "",
    amount: "",
    date: "",
    status: "pending"
  }); 

  return (
      <NewContext.Provider value={{
          data, setData,
      products, setProducts,
      isOpen, setIsOpen,
      view, setView,
      formData, setFormData
      }}>
      {children}
    </NewContext.Provider>
  );
};

export const useNewContext = () => {
  return useContext(NewContext);
};
