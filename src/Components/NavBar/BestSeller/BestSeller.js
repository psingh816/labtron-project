import React from 'react';

const BestSeller = () => {
  const bestSeller = [
    {
      name: 'Flow Indexer NMFI',
      link: 'flow indexer nmfi',
    },
    {
      name: 'Melt Flow Indexer NMFI-101',
      link: 'melt flow',
    },
    {
      name: 'NMFI-101 Melt Flow Indexer',
      link: '101',
    },
    {
      name: 'Videohive',
      link: 'videohive',
    },
    {
      name: 'Melt Flow Indexer',
      link: 'mfi',
    },
    {
      name: 'Melt Flow Indexer',
      link: 'mfi',
    },
  ];

  return (
    <div className='box'>
      {bestSeller.map((el, i) => (
        <div className='bestSeller' key={i}>
          <a href={`/${el.link}`}>{el.name}</a>
        </div>
      ))}
    </div>
  );
};

export default BestSeller;
