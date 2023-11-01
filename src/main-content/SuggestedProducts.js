import React from 'react';
import LeftSuggestedProducts from './LeftSuggestedProduct';
import RightSuggestedProducts from './RightSuggestedProducts';

const SuggestedProducts = () => {
  return (
    <div className='container'>
      <h5 className='text-center'>Suggested Products</h5>
      <div className='card'>
        <div className='d-flex flex-row '>
           <LeftSuggestedProducts />
           <RightSuggestedProducts />
        </div>
      
      </div>
    </div>
  );
};

export default SuggestedProducts;
