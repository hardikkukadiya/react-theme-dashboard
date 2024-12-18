import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "./context";
import "../public/css/tailwind.css";
import { NewContextProvider } from "./app/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NewContextProvider>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
            <App />
        </MaterialTailwindControllerProvider>
        </ThemeProvider>
      </NewContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
