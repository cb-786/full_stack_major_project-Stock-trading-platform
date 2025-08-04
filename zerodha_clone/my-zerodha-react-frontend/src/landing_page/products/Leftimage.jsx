import React from "react";

function Leftimage({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-2 ">
      <div className="row mt-5">
        <div className="col-6 " >
        <img src= {imageUrl} alt="" />
        </div>
               
        <div className="col-6 p-5">
          <div>
            <h1>{productName}</h1>
            <p className="mt-4">{productDescription}</p>
            <div>
              <a href={tryDemo} style={{textDecoration:"none",marginRight:"30px"}}>Try Demo</a>
              <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
            </div>
            <div>
              <a href={googlePlay}>
                <img src="googlePlayBadge.svg" alt="Google Play Store" className="mt-4" style={{marginRight:"35px"}}/>
              </a>
              <a href={appStore}>
                <img src="appstoreBadge.svg" alt="Apple App Store" className="mt-4"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftimage;
