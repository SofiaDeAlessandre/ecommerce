import { Typography } from "@mui/material"
import { Cards } from "./Cards"
import { useState } from 'react';
import { InfinitySlide } from './infinitySlide/InfinitySlide'

import { Filter } from './Filter';


export const CardsContainer = () => {
  const [filter, setFilter] = useState('');
  return (
    <>
    <InfinitySlide/>
      <Filter setFilter={setFilter} />
    <Cards filter={filter}/>
    </>
  )
}
