import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/comic-mono";
// Supports weights 300-800
import "@fontsource-variable/shantell-sans";

const rootElement = document.getElementById("root")
if(rootElement === null) {
  throw new Error("Cannot render the app without element with id: 'root'.")
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
