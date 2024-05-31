import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import NavigationBar from "./components/navbar";
import JsonData from "./data/data.json";
import Header from "./components/header";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";

function App() {
  const [loadingJsonData, setLoadingJsonData] = useState({});
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    setLoadingJsonData(JsonData);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  return (
    <div>
      <NavigationBar ref={navRef} />
      <Header data={loadingJsonData.Header} navHeight={navHeight} />
      <About data={loadingJsonData.About} />
      <Testimonials data={loadingJsonData.Testimonials} />
      <Contact data={loadingJsonData.Contact} />
    </div>
  );
}

export default App;
