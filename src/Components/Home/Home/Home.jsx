import React from "react";
import useTitle from "../../../Hooks/useTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Service from "../Services/Service";
import WorkingProcess from "../WorkingProcess/WorkingProcess";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <About></About>
      <WorkingProcess></WorkingProcess>
    </div>
  );
};

export default Home;
