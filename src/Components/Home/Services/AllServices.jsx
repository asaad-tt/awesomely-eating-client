import React from "react";
import { Link } from "react-router-dom";

const AllServices = ({ service }) => {
  const { _id, title, img, price, description } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl">
            {description.length > 100 ? (
              <p>{description.slice(0, 100) + "..."}</p>
            ) : (
              <p>{description}</p>
            )}
          </p>
          <p className="text-xl font-semibold">
            Price: <span className="text-primary">{price}$</span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
