import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price, description } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description.length > 100 ? (
              <p>{description.slice(0, 100) + "..."}</p>
            ) : (
              <p>{description}</p>
            )}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
