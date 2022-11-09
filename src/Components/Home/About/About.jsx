import React from "react";
import img from "../../../asset/about/chef.jpg";

const About = () => {
  return (
    <div className="about_me bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl mx-auto py-10">
        <div>
          <img className="rounded-full" src={img} alt="" />
        </div>
        <div className="pl-20">
          <h5 className="text-xl font-bold mt-10 text-primary">ABOUT ME</h5>
          <p className="text-xl mt-10">
            My name is Burak. I am passionate about cooking , i love to cook and
            feed people .I am ex masterchef participate from Australia. Long
            time i have been lived in Turkey , where i learn so many things
            about cooking. local favourite turkish dish and others i cooked
            their and people smilingly enjoy mey food . though i met success
            there but i always feel love for my country and my people . <br />
            Most of our people do not get hygienic food . Thats why i came back
            and make my <span className="text-white">Awesomely Eating</span>.
            Last three years i made various type of food and delivered to the
            people . People appriciate me and enjoy my meals . Hope you also
            enjoy my homemade food.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
