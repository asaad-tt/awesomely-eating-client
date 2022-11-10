import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../Hooks/useTitle";
import PersonalReview from "./PersonalReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useTitle("My reviews");

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/myReviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {reviews.map((singleReview) => (
          <PersonalReview
            key={singleReview._id}
            singleReview={singleReview}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          ></PersonalReview>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
