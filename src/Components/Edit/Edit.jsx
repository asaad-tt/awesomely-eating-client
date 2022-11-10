import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const router = useParams();
  const { id } = router;

  const [review, setReview] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [id]);

  const handleEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;

    const review = {
      text,
    };

    fetch(`http://localhost:5000/myReviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-types": "application/json()",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.info("review edited successful");
          navigate("/myReviews");
        }
      });
  };

  console.log(review);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto w-4/6">
        <h2>Edit your review</h2>
        <form onSubmit={handleEdit}>
          <textarea
            className="textarea textarea-success w-full"
            name="text"
            placeholder="edit your review"
            defaultValue={review.text}
          ></textarea>
          <input
            type="submit"
            className="btn btn-primary"
            value="Edit review"
          />
        </form>
      </div>
    </div>
  );
};

export default Edit;
