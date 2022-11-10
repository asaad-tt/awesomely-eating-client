import React from "react";
import order from "../../../asset/delivery/food.svg";
import cook from "../../../asset/delivery/cook.svg";
import delivery from "../../../asset/delivery/foodGuy.svg";
import rating from "../../../asset/delivery/ratingGuy.svg";

const WorkingProcess = () => {
  return (
    <div className="py-10">
      <h3 className="text-3xl font-semibold text-center py-10">
        How it Works!!{" "}
      </h3>
      <div className="grid gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto">
        <div className="border-2 p-5 border-indigo-600 rounded">
          <div className="flex justify-center">
            <img src={order} width="200" alt="" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold my-2">Place your Order</h3>
            <p>
              You choose your favorite dish and area to see all the kitchens
              that operate in that area and their menus and place your order
              with only three total clicks. you can pay us cash, online payment
              as your wish.
            </p>
          </div>
        </div>
        <div className="border-2 p-5 border-indigo-600 rounded">
          <div className="flex justify-center">
            <img src={cook} width="150" height="150" alt="" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold my-2">Homechef's cooking</h3>
            <p>
              Our homechef's receive your order instantly and start cooking you
              delicious meals, all prepared in our well furnished kitchens
            </p>
          </div>
        </div>
        <div className="border-2 p-5 border-indigo-600 rounded">
          <div className="flex justify-center">
            <img src={delivery} width="150" alt="" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold my-2">Order delivery</h3>
            <p>
              One of our delivery guy will pick up your order from the
              homechef's kitchen and deliver it to your doorstep. we are
              punctual in our time. so your food is on time
            </p>
          </div>
        </div>
        <div className="border-2 p-5 border-indigo-600 rounded">
          <div className="flex justify-center">
            <img src={rating} width="150" alt="" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold my-2">Rate your experience</h3>
            <p>
              We love feedback! You can rate your experience with Awesomely
              Eating along with rating every dish you have tried.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
