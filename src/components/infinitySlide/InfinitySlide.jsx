import { Typography } from "@mui/material";
import style from "./infinitySlide.module.css";


export const InfinitySlide = () => {
  return (
    <div className={style.contain}>
      <ul className={style.list}>
        <Typography variant='h6' sx={{color:'white'}}>¡Promociones vigentes: 3 y 6 cuotas sin interés y 20% off abonando en efectivo!</Typography>
      </ul>
      <ul className={style.list}>
        <Typography variant='h6' sx={{color:'white'}}>¡Promociones vigentes: 3 y 6 cuotas sin interés y 20% off abonando en efectivo!</Typography>
      </ul>
    </div>
  )
}
