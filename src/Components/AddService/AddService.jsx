import React from "react";

const AddService = () => {
  return (
    <div>
      <h2>Add service item </h2>
      <form action="">
        <input
          type="text"
          placeholder="service name"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="photo url"
          className="input input-bordered input-accent w-full max-w-xs"
          required
        />
        <input
          type="text"
          placeholder="price"
          className="input input-bordered input-accent w-full max-w-xs"
          required
        />
      </form>
    </div>
  );
};

export default AddService;
