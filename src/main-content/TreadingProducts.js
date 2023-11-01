import React from 'react';

const TreadingProducts = () => {
  const products = [
    {
      id: 1,
      url: './images/p1.png',
      title: 'Melt Flow Indexer',
      description: 'Melt Flow Indexer NMF-101',
    },
    {
      id: 2,
      url: './images/p2.png',
      title: 'Melt Flow Indexer',
      description: 'Melt Flow Indexer NMF-101',
    },
    {
      id: 3,
      url: './images/p1.png',
      title: 'Melt Flow Indexer',
      description: 'Melt Flow Indexer NMF-101',
    },
    {
      id: 4,
      url: './images/p7.png',
      title: 'Melt Flow Indexer',
      description: 'Melt Flow Indexer NMF-101',
    },
    {
      id: 5,
      url: './images/p5.png',
      title: 'Melt Flow Indexer',
      description: 'Melt Flow Indexer NMF-101',
    },
    {
      id: 6,
      url: './images/p6.png',
      title: 'Melt Flow Indexer',
      description: 'Melt Flow Indexer NMF-101',
    },
  ];
  return (
    <div className='container'>
      <h4 className='text-center'>Treading at Labnix</h4>
      <div className='d-flex flex-row flex-wrap'>
        {products.map((image, index) => (
          <div key={index} className='card col-lg-4'>
            <div className='row'>
              <div className='col-md-4'>
                <img
                  src={image.url}
                  alt={image.description}
                  height='60px'
                  width='70px'
                />
              </div>

              <div className='col-md-8'>
                <div className='card-body'>
                  <h5 className='card-title'>{image.title}</h5>
                  <p className='card-text'>{image.description}</p>
                </div>
              </div>
            </div>

            <div className='card-footer'>
              <div className='row'>
             
                  <div className='btn-group' role='group'>
                    <button className='btn btn-success  '>View</button>
                    <button className='btn btn-success  '>Quote</button>
                    <button className='btn btn-success'>catalog</button>
                  </div>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreadingProducts;
