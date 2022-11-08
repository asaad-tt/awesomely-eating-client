import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { title, img, price, description } = service;
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h3 className="text-3xl text-primary text-center font-semibold py-10">
        your satisfaction is our main priority{" "}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img src={img} alt="biriany" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="text-xl font-semibold">
                Price: <span className="text-primary">{price}$</span>
              </p>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ServiceDetails;
