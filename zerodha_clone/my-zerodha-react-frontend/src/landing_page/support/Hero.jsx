import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="g-5 mt-5 mb-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 mt-5 mb-5">
        <div className="col-6 p-5 mt-5 mb-5">
          <h1>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg. how do I activate F&O" />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5 mt-5 mb-5">
          <h1 className="fs-4">Featured</h1>
          <a href="">Current Takeovers and Delisting - January 2024</a>
          <a href="">Latest Intraday leverages - MIS & CO</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
