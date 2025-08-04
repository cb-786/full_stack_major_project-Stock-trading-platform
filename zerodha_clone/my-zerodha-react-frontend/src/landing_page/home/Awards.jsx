import React from 'react';


function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                    <div className='col-6'>

                    <img src="largestBroker.svg" alt="" />

                    </div>

                    <div className='col-6'>
                            <h1 className='mb-5'>Largest stock broker in India </h1>
                            <p className='mb-5'> 2+ million zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in : </p>
                            
                            <div className='row mb-5' >
                                <div className='col-6'>
                                    <ul>
                                        <li> 
                                            <p> Futures and options</p>
                                        </li>

                                        <li> 
                                            <p> Commodity derivatives </p>
                                        </li>

                                        <li> 
                                            <p> Currency derivatives </p>
                                        </li>
                                    </ul>
                                </div>

                                <div className='col-6'>
                                <ul>
                                        <li> 
                                            <p> Stocks and IPO's</p>
                                        </li>

                                        <li> 
                                            <p>Direct mutual funds </p>
                                        </li>

                                        <li> 
                                            <p> Bonds and Government Securities </p>
                                        </li>
                                    </ul>
                                </div>

                                <img src="pressLogos.png" alt="img" />
                            </div>
                            
                    </div>
            </div>
        </div>
     );
}

export default Awards;