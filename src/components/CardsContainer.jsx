import { Typography } from "@mui/material"
import { Cards } from "./Cards"

import { useState } from 'react';


import { Filter } from './Filter';


export const CardsContainer = () => {
  const [filter, setFilter] = useState('');
  return (
    <>
      <Filter setFilter={setFilter} />
  
    <Cards filter={filter}/>
    </>
  )
}
