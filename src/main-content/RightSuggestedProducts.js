import React from 'react';


const RightSuggestedProducts = () => {
  const products = [
    {
      id: 1,
      url: './images/p1.png',
      title: 'Melt Flow Indexer NMF-101',
    },
    {
      id: 2,
      url: './images/p2.png',
      title: 'Melt Flow Indexer NMF-101',
    },
    {
      id: 3,
      url: './images/p1.png',
      title: 'Melt Flow Indexer NMF-101',
    },
  ];
  return (
    <div className='container'>
      <div className='d-flex flex-row flex-wrap'>
      
        {products.map((image, index) => (
          <div key={index} className='card col-lg-3 m-4'>
            <div className='row'>
            
              <div className='col-md-3'>
                <img
                  src={image.url}
                  alt={image.description}
                  height='200px'
                  width='150px'
                 
                />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{image.title}</h5>
              </div>
              <div className='card-footer'>
              <div className='row'>
                <div className='col-12'>
                  <div className='btn-group' role='group'>
                    <button className='btn btn-success mr-3'>View</button>
                    <button className='btn btn-success mr-3 '>Catalog</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSuggestedProducts;
