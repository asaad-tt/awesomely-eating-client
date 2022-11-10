import React, { useEffect, useState } from "react";
import Reviews from "./Reviews";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("https://awesomely-eating-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setRefresh(!refresh);
        setReviews(data);
      })
      .catch((error) => console.log(error));
  }, [refresh]);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <Reviews key={review._id} review={review}></Reviews>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviews;
