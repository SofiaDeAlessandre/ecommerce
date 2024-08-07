import { Typography } from "@mui/material";
import style from "./infinitySlide.module.css";
import { TextSlide } from "./TextSlide";

export const InfinitySlide = () => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <Typography sx={{color:'white'}}>¡Promociones vigentes: 3 y 6 cuotas sin interés y 20% off abonando en efectivo!</Typography>
      </ul>
    </div>
  )
}
