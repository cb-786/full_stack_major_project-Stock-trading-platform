import React from "react";

function CreateTicket() {
  // Define style objects
  const linkStyle = {
    textDecoration: "none",
    lineHeight: "2.5",
    color: "#ADD8E6", // Added color for better visibility on dark backgrounds
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {/* This div represents the first column (col-4) */}
        <div className="col-6 p-5 mt-5 mb-5">
          <h3>
            <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i> Account Opening
          </h3>
          <ul>
            <li>
              <a href="" style={linkStyle}>Online Account Opening</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Offline Account Opening</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Company, Partnership and HUF Account Opening</a> {/* Combined "Account" and "Opening" to match common phrasing */}
            </li>
          </ul>

          <hr />


          <h3>
            {/* Assuming Font Awesome has an icon for currency, or using a rupee symbol */}
            <i className="fa fa-inr" aria-hidden="true"></i> Funds
          </h3>
          <ul>
            <li>
              <a href="" style={linkStyle}>Add money</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Withdraw money</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Add bank accounts</a>
            </li>
            <li>
              <a href="" style={linkStyle}>eMandates</a>
            </li>
          </ul>
        </div>

        {/* This div represents the second column (col-8) and should be a sibling of col-4,
            not nested inside it. */}
        <div className="col-6 p-5 mt-5 mb-5">
          {/* Your Zerodha Account Section */}
          <h3>
            <i className="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
            
          </h3>
          <ul>
            <li>
              <a href="" style={linkStyle}>Your Profile</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Account modification</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Client Master Report (CMR) and Depository Participant (DP)</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Nomination</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Transfer and conversion of securities</a>
            </li>
          </ul>

          <hr />

          {/* Kite Section */}
          <h3>
            <i className="fa fa-line-chart" aria-hidden="true"></i> Kite
            
          </h3>
          <ul>
            <li>
              <a href="" style={linkStyle}>IPO</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Trading FAQs</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Margin Trading Facility (MTF) and Margins</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Charts and orders</a>
            </li>
            <li>
              <a href="" style={linkStyle}>Alerts and Nudges</a>
            </li>
            <li>
              <a href="" style={linkStyle}>General</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;