import React from 'react';

const QuickLinks = () => {
  const quickLinks = [
    {
      name: 'Home',
      link: 'home',
    },
    {
      name: 'About',
      link: 'about',
    },
    {
      name: 'Contact',
      link: 'contact',
    },
    {
      name: 'Privacy',
      link: 'privacy',
    },
    {
      name: 'Skills',
      link: 'skills',
    },
    {
      name: 'Carrier',
      link: 'carrier',
    },
  ];

  return (
    <div>
      {quickLinks.map((el, i) => (
        <div key={i + 1}>
          <a href={`/${el.link}`}>{el.name}</a>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
