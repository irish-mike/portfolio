import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/main.scss";
import "../src/styles/custom.css"; // TODO Remove custiom.css, this should be handled form main.scss
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
