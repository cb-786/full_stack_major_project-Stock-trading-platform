import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row p-5 mt-5 border-top">
        <div className="col-5 text-muted" style={{ lineHeight: "1.8" }}>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier. <br /> <br /> Today, our disruptive pricing models and
            in-house technology have made us the biggest stock broker in India.{" "}
            <br /> <br /> Over 1.6+ crore clients place billions of orders every
            year through our powerful ecosystem of investment platforms,
            contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-2"></div>
        <div className="col-5 text-muted" style={{ lineHeight: "1.8" }}>
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            <br /> <br />
            <a href="#">Rainmatter</a>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
            <br /> <br />
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product{" "}
            <a href="#">philosophies.</a>
          </p>
        </div>
      </div>

      <div className="row p-5 mt-5 border-top">
        <div className="col-5 text-muted text-center" style={{ lineHeight: "1.8" }}>

            <img src="profile_pic.jpeg" className="p-3  " style={{borderRadius:"100%",height:"25rem"}}/>
            <h4 className="mt-3">Chirag Bansal</h4>
        </div>
            
        <div className="col-7 text-muted ml-5" style={{ lineHeight: "1.8" }}>
          <h1 className="mb-5">About me</h1>
          <p className="mt-5 text-muted" style={{ lineHeight: "1.8" }}>
            Greetings! I'm Chirag Bansal, a dedicated and enthusiastic coder
            deeply immersed in the world of software development. My journey is
            fueled by a profound passion for crafting robust solutions and
            exploring the intricate logic behind efficient systems. <br />{" "}
            <br />
            Beyond theoretical knowledge, I'm a hands-on developer with a keen
            interest in Full Stack Development. I enjoy bringing ideas to life,
            from designing intuitive front-end interfaces with technologies like
            React.js and CSS, to building powerful back-end systems using
            Node.js, Express.js, and managing data with MySQL and MongoDB.{" "}
            <br /> <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
