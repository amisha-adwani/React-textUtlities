import React, { useState } from "react";
import FirstNav from "./components/FirstNav";
import TextForm from "./components/TextForm";
import SuccessAlert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  const [dark, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (variant, message) => {
    setAlert({
      variant: variant,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  function handleDarkClick() {
    if (dark === "dark") {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "light mode enabled");
      document.title = 'TextUtils - Light Mode'
    } else {
      setDarkMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("success", "dark mode enabled");
      document.title = 'TextUtils - Dark Mode'
    }
    console.log(dark);
  }

  const style = {
    color: dark === "light" ? "black" : "white",
  };

  return (
    <div>
      <Router>
        <FirstNav title="TextUtils" onClick={handleDarkClick} mode={dark} />
        <SuccessAlert alert={alert} />
        <div className="container my-3" style={style}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path='/' element={<TextForm heading="Enter your text" mode={dark} showAlert={showAlert}/>}/>
            </Routes>
        </div>
    </Router >
    </div>
  );
}
