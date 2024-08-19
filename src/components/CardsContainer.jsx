// import React from "react";
// // import { linearGradient } from "@mui/material"
// import { Cards } from "./Cards"
// import { useState } from 'react';
// import { InfinitySlide } from './infinitySlide/InfinitySlide'
// import { styled } from '@mui/material/styles';
// import CircularProgress, {

// } from '@mui/material/CircularProgress';
// import { Filter } from './Filter';
// import { useEffect } from "react";


// export const CardsContainer = () => {
//   const [filter, setFilter] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simula el tiempo de carga
//     const timer = setTimeout(() => {
//       setLoading(false); // Oculta el spinner después de 3 segundos (o cuando los productos se carguen)
//     }, 3000);

//     // Limpia el temporizador si el componente se desmonta antes de que termine
//     return () => clearTimeout(timer);
//   }, []);


//   return (
//     <>
//     <InfinitySlide/>
     
//     <React.Fragment>
//       <svg width={0} height={0}>
//         <defs>
//           <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//             <stop offset="0%" stopColor="#e01cd5" />
//             <stop offset="100%" stopColor="#1CB5E0" />
//           </linearGradient>
//         </defs>
//       </svg>
//       <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
//     </React.Fragment>
//       <Filter setFilter={setFilter} />
//     <Cards filter={filter}/>
//     </>
//   )
// }

import  { useState, useEffect } from "react";
import { Cards } from "./Cards";
import { InfinitySlide } from './infinitySlide/InfinitySlide';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Filter } from './Filter';
import React from "react";

export const CardsContainer = () => {
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula el tiempo de carga
    const timer = setTimeout(() => {
      setLoading(false); // Oculta el spinner después de 3 segundos (o cuando los productos se carguen)
    }, 3000);

    // Limpia el temporizador si el componente se desmonta antes de que termine
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <InfinitySlide/>
      {loading ? (
        <React.Fragment>
          <svg width={0} height={0}>
            <defs>
              <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e01cd5" />
                <stop offset="100%" stopColor="#1CB5E0" />
              </linearGradient>
            </defs>
          </svg>
          <CircularProgress sx={{margin:'auto', 'svg circle': { stroke: 'url(#my_gradient)' } }} />
        </React.Fragment>
      ) : (
        <>
          <Filter setFilter={setFilter} />
          <Cards filter={filter} />
        </>
      )}
    </>
  );
};