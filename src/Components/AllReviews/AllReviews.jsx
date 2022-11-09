import React, { useEffect, useState } from "react";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews");
  }, []);

  return <div>hello reviews</div>;
};

export default AllReviews;
