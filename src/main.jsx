import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./animations.css";
import "remixicon/fonts/remixicon.css";
import App from "./App.jsx";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
