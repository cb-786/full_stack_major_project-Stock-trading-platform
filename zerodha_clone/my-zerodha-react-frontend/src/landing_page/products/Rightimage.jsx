import React from 'react';


function Rightimage({
    imageUrl,
    productName,
    productDescription,
    learnMore
  }) {
    return (
      <div className="container p-2 mt-5">
        <div className="row mt-5">
          <div className="col-6 ">
            <div>
              <h1>{productName}</h1>
              <p className="mt-4">{productDescription}</p>
              <div>
                <a href={learnMore} style={{ textDecoration: "none" }}>
                  Learn More
                </a>
              </div>
              <div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <img src={imageUrl} alt="" />
          </div>


        </div>
      </div>
    );
}

export default Rightimage;