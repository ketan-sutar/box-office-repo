import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Starred',
    to: '/Starred',
  },
];

const Navs = () => {
  return (
    <>
      <ul>
        {LINKS.map(items => (
          <li key={items.to}>
            <Link to={items.to}>{items.text}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navs;
