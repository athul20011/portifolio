import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { motion } from 'framer-motion'
import img6 from '../img2/discal.jpg'
import img7 from '../img2/con-app.jpg'

function ReactProject() {
  return (
    <div>
        <Stack direction={'row'} gap={1} justifyContent={'start'} flexWrap={'wrap'}>
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
              <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
                
                <img width={'100%'} height={'100%'}  src={img6} alt="Discount Calculator" />
                
              </motion.div>
             <Typography variant='h6' fontSize={15} component={'p'} color={'light'} textAlign={'center'} py={2} >Discount Calculator</Typography>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'} src="https://i.postimg.cc/d0jvbs9D/EMI-calculator.png" alt="EMI calculator" />
              </motion.div>
              <Typography variant='h6' fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py ={2}>EMI calculator</Typography>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src={img7} alt="Random Quotes Generator" />
              </motion.div>
              <Typography variant='h6' fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >contact app</Typography>
           </Box>
           
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240}>
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src="https://i.postimg.cc/rFRT8C9B/Doctor-Appoinment.png" alt="Doctor Appoiment Booking" />
              </motion.div>
              <Typography variant='h6' fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >Doctor Appoiment Booking</Typography>
           </Box>

           
        </Stack>
    </div>
  )
}

export default ReactProject