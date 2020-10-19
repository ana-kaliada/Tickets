import React from 'react';
import './Loader.scss';

const Loader = () => {
  const items = [1, 2, 3, 4, 5];

  return (
    <div className="loader">
      {items.map(() => (
        <div className="loader__item" />
      ))}
    </div>
  );
};

export default Loader;
