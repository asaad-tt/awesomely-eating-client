import React from "react";

const PersonalReview = ({ singleReview, handleDelete }) => {
  console.log(singleReview);

  const { _id, userName, serviceName, text, serviceImage } = singleReview;

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
            <div className="badge badge-outline">Edit</div>
            <div
              onClick={() => handleDelete(_id)}
              className="badge badge-outline"
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalReview;