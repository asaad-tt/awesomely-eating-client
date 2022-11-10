import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../Hooks/useTitle";
import PersonalReview from "./PersonalReview";
import "./MyReviews.css";
import { toast } from "react-toastify";

const MyReviews = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useTitle("My reviews");

  useEffect(() => {
    fetch(
      `https://awesomely-eating-server.vercel.app/myReviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("awesomely-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, logout]);

  const handleDelete = (id) => {
    const proceed = window.confirm("you want to delete?");
    if (proceed) {
      fetch(`https://awesomely-eating-server.vercel.app/myReviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.info("deleted successfully", { autoClose: 800 });
            // alert("deleted successfully");
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
      {reviews.length ? (
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
      ) : (
        <div className="flex no_review justify-center items-center">
          <h1 className="text-3xl font-bold text-primary">
            No reviews were added{" "}
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
