import React from 'react';


function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center' >

               
            <img src='/landing.png' alt='landingimage' className='mb-5'/> 
            <h1 className='mt-5'> Invest in everything </h1>
            <p> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
            <btn className = ' p-2 btn btn-primary fs-5'   style={{margin : "0 auto", width : "20%"}}>
                Sign up for free
            </btn>
            </div>
            
        </div>
     );
}

export default Hero;