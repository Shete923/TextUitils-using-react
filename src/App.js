import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import About from "./Components/About";

// import{
//   BrowserRouter as Router,
//   Routes,
//   Route
// }from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState("red");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = theme === "red" ? "#DE3163" : theme === "green" ? "#229954" : "#4e4e08";
      showAlert("Dark mode is enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = theme === "red" ? "#ffe6e6" : theme === "green" ? "#e6ffe6" : "#e67e22";
      showAlert("Light mode is enabled.", "success");
    }
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.style.backgroundColor =
      mode === "dark"
        ? newTheme === "red"
          ? "#DE3163"
          : newTheme === "green"
          ? "#229954"
          : "#e67e22"
        : newTheme === "red"
        ? "#ffe6e6"
        : newTheme === "green"
        ? "#e6ffe6"
        : "#fff5e6";
    showAlert(`${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} theme is applied.`, "success");
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2300);
  };

  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils2" mode={mode} theme={theme} toggleMode={toggleMode} changeTheme={changeTheme}
        aboutText="About TextUtils"
      />

      <Alert alert={alert} />
      <div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter Text To Analyze Below" mode={mode} />
          </div>
      {/* <Routes>
          <Route path="/about"
          element={<About/>}/>
      </Routes> */}
      {/* <Routes>
          <Route path="/" 
          element={<div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter Text To Analyze Below" mode={mode} />
          </div>} /> */}
      {/* </Routes> */}
        {/* </Router> */}
    </>
  );
}

export default App;
