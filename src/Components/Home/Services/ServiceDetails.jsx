import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from "../../../Context/UserContext";
import AllReviews from "../../AllReviews/AllReviews";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, title, img, price, description } = service;
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;
    console.log(text);

    const review = {
      serviceId: _id,
      serviceName: title,
      userName: user?.displayName,
      serviceImage: img,
      email: user?.email,
      uid: user?.uid,
      text,
      photoURL: user?.photoURL,
    };

    // get review

    // create review
    fetch("https://awesomely-eating-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h3 className="text-3xl text-primary text-center font-semibold py-10">
        your satisfaction is our main priority{" "}
      </h3>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 ">
        <div>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <PhotoProvider>
                <PhotoView src={img}>
                  <img src={img} alt="biriany" />
                </PhotoView>
              </PhotoProvider>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="text-xl font-semibold">
                Price: <span className="text-primary">{price}$</span>
              </p>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>add your valuable review </h3>
          <form onSubmit={handleSubmit}>
            <textarea
              className="textarea w-full textarea-success"
              name="text"
              placeholder="make a comment"
            ></textarea>
            <input
              type="submit"
              className="btn btn-primary"
              value="add review"
            />
          </form>
          <div>
            <AllReviews></AllReviews>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
