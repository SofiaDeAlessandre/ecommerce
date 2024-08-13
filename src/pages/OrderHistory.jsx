import { useContext } from "react"
import { FirebaseContext } from "../context/FirebaseContext"
import { Box, Typography } from "@mui/material"
import { IoMdClose } from "react-icons/io"
import { useNavigate } from "react-router"


export const OrderHistory = () => {
     const navigate = useNavigate()
    const {user} = useContext(FirebaseContext)
    
  return (
    <>
    <Box>
    <IoMdClose style={{color:'white'}} onClick={() => navigate('/')} />
        {user?.orders?.map((order, index)=>(
            <Box sx={{border:'white 2px solid'}} key={index}>
            <Typography sx={{color:'white'}}>{order.total}</Typography>
            {order?.cart?.map((cart, index)=>(
                <Box key={index}>
                <Typography sx={{color:'white'}}>{cart.description}</Typography>
                <Typography sx={{color:'white'}}>{cart.quantity}</Typography>
                <Typography sx={{color:'white'}}>{cart.name}</Typography>
                <Typography sx={{color:'white'}}>{cart.price}</Typography>
                <img style={{width:'300px'}} src={cart.image} alt={cart.name}/>
                {/* <Typography sx={{color:'white'}}>{order.fecha}</Typography>  */}
                </Box>
            ))}

            
            </Box>
        ))}
    </Box>
    </>
    
  )
}
