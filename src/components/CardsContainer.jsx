import { useState, useEffect } from 'react';
import { Cards } from './Cards';
import { InfinitySlide } from './infinitySlide/InfinitySlide';
import { Filter } from './Filter';
import React from 'react';
import { IoRocketSharp } from 'react-icons/io5';
import './CardsContainer.css';
import { Spinner } from './Spinner';

export const CardsContainer = () => {
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <InfinitySlide />
      <IoRocketSharp
        style={{
          color: '#d07224',
          fontSize: '30px',
          animation: 'move 5s infinite',
        }}
      />
      {loading ? (
        <Spinner/>
      ) : (
        <>
          <Filter setFilter={setFilter} />
         <Cards filter={filter} />
          </>
      )}
    </>
  );
};
