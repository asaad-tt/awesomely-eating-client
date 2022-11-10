import React, { useEffect, useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import AllServices from "./AllServices";

import { RiseLoader } from "react-spinners";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useTitle("Services");

  useEffect(() => {
    fetch("https://awesomely-eating-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      {loading ? (
        <>
          <RiseLoader
            color={`#44bd32`}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            style={{ margin: "auto" }}
          />
          <p className="text-2xl">Please wait......</p>
        </>
      ) : (
        <div>
          <h3 className="text-3xl text-center text-primary py-10">
            Explore All of our dishes
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <AllServices key={service._id} service={service}></AllServices>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
