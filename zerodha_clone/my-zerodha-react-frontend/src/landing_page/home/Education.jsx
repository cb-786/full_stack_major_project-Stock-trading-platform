import React from 'react';


function Education() {
    return ( 
      <div className='container'>
        <div className='row mb-5 mt-5'>
               <div className='col-5 '>
                    <img src='education.svg' style={{width:"85%"}}></img>
               </div>
                

                <div className='col-2'></div>

               <div className='col-5 '>
                                <h1 className='mb-3'>Free and open market education</h1>
                  <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                  <a href='#' style={{textDecoration:"none"}}>
                      See Versity <i class="fa fa-long-arrow-right"></i>
                  </a>

                  <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                  <a href='#' style={{textDecoration:"none"}}>
                      Trading Q&A   <i class="fa fa-long-arrow-right"></i>
                  </a>
               </div>
        </div>
      </div>
     );
}

export default Education;