import { Box, Stack, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { motion } from 'framer-motion'
import img3 from '../img2/cal-java.jpg'
import React from 'react'
import img4 from '../img2/bmi-java.jpg'
import img5 from '../img2/time-java.jpg'

function JavaScript() {
  return (
    <div>
        <Stack direction={'row'} gap={1} justifyContent={'start'} flexWrap={'wrap'}>
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
              <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
                
                <img width={'100%'} height={'100%'}  src={img3} alt="Calculator" />
                
              </motion.div>
             <Typography variant='h6' fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >Calculator</Typography>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'} src={img4} alt="" />
              </motion.div>
              <Typography variant='h6' fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py ={2}>BMI calculator</Typography>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src={img5} alt="Employee Mangement" />
              </motion.div>
              <Typography variant='h6' fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >Country date & time</Typography>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src="https://i.postimg.cc/9FXsgP43/Budget-Calc.png" alt="Budget Calculator" />
              </motion.div>
              <Typography variant='h6' fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >Budget Calculator</Typography>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src="https://i.postimg.cc/y6ywTp8X/Movie-Fetch.png" alt="Movie Details Fetch" />
              </motion.div>
              <Typography variant='h6' fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >Movie Details Fetch</Typography>
           </Box>

           
        </Stack>
    </div>
  )
}

export default JavaScript