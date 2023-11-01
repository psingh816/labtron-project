import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import TreadingProducts from './TreadingProducts';
import SuggestedProducts from './SuggestedProducts';

function MainContent() {
  return (
    <div>
      <FeaturedProducts />
      <TreadingProducts />
      <SuggestedProducts/>
     
    </div>
  );
}

export default MainContent;
