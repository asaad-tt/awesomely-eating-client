import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://awesomely-eating-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div>
        <p className="text-2xl font-bold text-violet-600">Services</p>
        <h3>explore our services items</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {service.map((homeService) => (
          <ServiceCard
            key={homeService._id}
            homeService={homeService}
          ></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center py-10">
        <Link to="/services" className="btn btn-primary btn-wide">
          See All
        </Link>
      </div>
    </div>
  );
};

export default Service;
