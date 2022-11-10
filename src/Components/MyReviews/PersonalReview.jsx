import React from "react";

const PersonalReview = ({ singleReview, handleDelete, handleEdit }) => {
  console.log(singleReview);

  const { _id, serviceName, text, serviceImage } = singleReview;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={serviceImage} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p>
            <span className="font-semibold">my review:</span> {text}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleEdit(_id)}
              className="badge badge-outline"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="badge badge-outline"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalReview;
