import React, { useState } from "react";
import FirstNav from "./components/FirstNav";
import TextForm from "./components/TextForm";
import SuccessAlert from "./components/Alert";

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
    } else {
      setDarkMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("success", "dark mode enabled");
    }
    console.log(dark);
  }

  const style = {
    color: dark === "light" ? "black" : "white",
  };

  return (
    <div>
      <FirstNav title="TextUtils" onClick={handleDarkClick} mode={dark} />
      <SuccessAlert alert={alert} />
      <div class="container my-3" style={style}>
        <TextForm heading="Enter your text" mode={dark} showAlert={showAlert} />
      </div>
    </div>
  );
}
