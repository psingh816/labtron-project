import React from 'react';

const FeaturedProducts = () => {
  const products = [
    { id: 1, url: './images/p1.png', description: 'Salt Spray Chamber Stand' },
    { id: 2, url: './images/p2.png', description: 'Salt Spray Chamber Stand' },
    { id: 3, url: './images/p3.png', description: 'Salt Spray Chamber Stand' },
    { id: 4, url: './images/p5.png', description: 'Salt Spray Chamber Stand' },
    { id: 5, url: './images/p6.png', description: 'Salt Spray Chamber Stand' },
    { id: 6, url: './images/p7.png', description: 'Salt Spray Chamber Stand' },
    { id: 7, url: './images/p8.png', description: 'Salt Spray Chamber Stand' },
    { id: 8, url: './images/p9.png', description: 'Salt Spray Chamber Stand' },
  ];
  return (
    <div className='container'>
      <h4 className='text-center'>Featured Categories</h4>
      <div className='row'>
        {products.map((image) => (
          <div key={image.id} className='col-md-3 mb-4'>
            <div className='card'>
              <img
                src={image.url}
                className='card-img-top'
                alt={image.description}
                height='250px' width='30px'
              />
              <div className='card-body'>
                <h4 className='card-title'>{image.description}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
