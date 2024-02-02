import React from 'react'
import './Education.css'
import { blueGrey, orange} from '@mui/material/colors'
import { Box, } from '@mui/material'
import { motion } from "framer-motion"

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
  } from 'mdb-react-ui-kit';
function Education({mode}) {
  return (
    <div className='edu'>
      <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50' }} viewport={{ once: true }} >
      <Box sx={{py:3, bgcolor: mode?blueGrey[500]:blueGrey[1000],color:orange}}>
        <h2 className='text-center mb-5'>Education</h2>
         <MDBRow bgcolor={mode?blueGrey[900]:blueGrey[900]} width={'100%'} height={'80vh'}>
      <MDBCol sm='6'>
        <MDBCard className='card1'>
          <MDBCardBody>
            <MDBCardTitle>SSLC</MDBCardTitle>
            <MDBCardText>
              2018
            </MDBCardText>
            <MDBCardText>
              MNKM HSS CHITTLAMCHERY,PALAKKAD
            </MDBCardText>       
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard className='card2'>
          <MDBCardBody>
            <MDBCardTitle>+2</MDBCardTitle>
            <MDBCardText>
              2018-2020
            </MDBCardText>
            <MDBCardText>
              MNKM HSS CHITTLAMCHERY,PALAKKAD
            </MDBCardText>       
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <div className='m-5 p-5'>
    <MDBRow>
      <MDBCol sm='6'>
        <MDBCard className='card3'>
          <MDBCardBody>
            <MDBCardTitle>BSC COMPUTER SCIENCE</MDBCardTitle>
            <MDBCardText>
              2021-2023
            </MDBCardText>
            <MDBCardText>
              THUNJATHEZHUTHAN COLLAGE ELEVANCHERY,PALAKKAD
            </MDBCardText>           
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard className='card4'>
          <MDBCardBody>
            <MDBCardTitle>LUMINAR TECHNOLAB</MDBCardTitle>
            <MDBCardText>
              2023-2024
            </MDBCardText>
            <MDBCardText>
              MEAR(N)STACK DEVELOPEMENT
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>

        </Box>
    </motion.div>
      </div>
        
    
    
  )
}

export default Education