import React from 'react';

const LeftSuggestedProducts = () => {
  return (
    <div className='container'>
      <div className='row col-lg-12 m-4'>
        <div className='col-md-4'>
          <img
            src='./images/p1.png'
            alt='...'
            height='220px'
            width='150px'
            
          />
        </div>
        <div class='col-md-8'>
          <div class='card-body'>
            <h3 class='card-title text-success'>Haze Measurement devices</h3>
            <h5 className='card-text'>Color & Haze meter NHM 101</h5>
            <p className='card-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.              
            </p>
            <button className='btn btn-success p-3'>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSuggestedProducts;
