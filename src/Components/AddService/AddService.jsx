import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Services");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;

    const addServices = {
      email,
      title,
      img,
      price,
      description,
    };

    fetch("https://awesomely-eating-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addServices),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.info("service added successful");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-screen-xl mx-auto w-4/6">
      <h2>Add service item </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="service name"
          className="input input-bordered input-accent w-full mb-3"
        />{" "}
        <br />
        <input
          type="text"
          name="img"
          placeholder="photo url"
          className="input input-bordered input-accent w-full mb-3"
          required
        />{" "}
        <br />
        <input
          type="text"
          name="price"
          placeholder="price"
          className="input input-bordered input-accent w-full mb-3"
          required
        />{" "}
        <br />
        <textarea
          className="textarea textarea-success w-full"
          name="description"
          placeholder="Bio"
        ></textarea>
        <input type="submit" className="btn btn-primary" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
