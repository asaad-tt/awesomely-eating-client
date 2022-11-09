import React from "react";
import order from "../../../asset/delivery/food.svg";
import cook from "../../../asset/delivery/cook.svg";
import delivery from "../../../asset/delivery/foodGuy.svg";
import rating from "../../../asset/delivery/ratingGuy.svg";

const WorkingProcess = () => {
  return (
    <div className="py-10">
      <h3 className="text-3xl text-center py-10">How it Works </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto">
        <div>
          <div className="flex justify-center">
            <img src={order} width="200" alt="" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl my-2">Place your Order</h3>
            <p>
              You choose your favourite dish and area to see all the kitchens
              that operate in that area and their menus and place your order
              with only three total clicks.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img src={cook} width="150" height="150" alt="" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl my-2">Place your Order</h3>
            <p>
              You choose your favourite dish and area to see all the kitchens
              that operate in that area and their menus and place your order
              with only three total clicks.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img src={delivery} width="150" alt="" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl my-2">Place your Order</h3>
            <p>
              You choose your favourite dish and area to see all the kitchens
              that operate in that area and their menus and place your order
              with only three total clicks.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img src={rating} width="150" alt="" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl my-2">Place your Order</h3>
            <p>
              You choose your favourite dish and area to see all the kitchens
              that operate in that area and their menus and place your order
              with only three total clicks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
