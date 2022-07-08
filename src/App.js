// this will be the main file where we can write code and make changes
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);               // after 4 seconds remove the alert box
    }, 3000);
  }

  const [mode, setMode] = useState('dark');   // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled!", "success");
      document.title = "TextUtils-Light Mode";              // changing the title of the web page as the mode changes
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled!", "success");
      document.title = "TextUtils-Dark Mode";
    }
  }

  return (
    <>
      {/* importing Navbar.js file from components */}
      {/* <Navbar/> */}

      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About-Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm heading="Enter the text to analyze : " showAlert={showAlert} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;