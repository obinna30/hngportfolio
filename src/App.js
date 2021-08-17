import Header from "./Components/Header";

import "./App.css";
import About from "./Components/About";
import { useEffect, useState } from "react";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
    </div>
  );
};

export default App;
