import { Typography } from "@mui/material";
import style from "./textSlide.module.css";

export const TextSlide = () => {
  return (
    <li className={style.slide_item}>
        <Typography className={style.slide_text}/>
    </li>
  )
}
