import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const router = useParams();
  const { id } = router;
  // console.log(id);

  useEffect(() => {
    fetch(`https://awesomely-eating-server.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefresh(!refresh);
        setReviews(data);
      })
      .catch((error) => console.log(error));
  }, [refresh, id]);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
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
