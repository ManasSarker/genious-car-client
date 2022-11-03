import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero bg-base-200 my-20 rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            alt=""
            src={person}
            className=" w-4/5 h-full rounded-lg shadow-2xl"
          />
          <img
            alt=""
            src={parts}
            className="absolute w-3/5 rounded-lg shadow-2xl right-5 top-1/2 border-8"
          />
        </div>
        <div className="w-1/2 p-8">
          <p className="text-2xl text-orange-600 font-bold">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified
            <br />& of experience
            <br />
            in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-active btn-secondary">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
