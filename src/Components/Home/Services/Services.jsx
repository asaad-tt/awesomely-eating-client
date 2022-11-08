import React, { useEffect, useState } from "react";
import AllServices from "./AllServices";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://awesomely-eating-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h3 className="text-3xl text-center text-primary py-10">
        Explore All of our dishes
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <AllServices key={service._id} service={service}></AllServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
