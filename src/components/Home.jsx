import React from 'react'
import{Row,Col, Card} from 'react-bootstrap'
import './Home.css'
import img from '../image/photo_2023-08-31_22-54-18.jpg'
import { TypeAnimation } from 'react-type-animation';
import { Typography } from '@mui/material';
import { motion } from "framer-motion"
import { blueGrey, deepOrange,indigo,blue} from '@mui/material/colors'
import { Box, } from '@mui/material'
import bgvideo from '../image/vdo.mp4'


function Home({mode}) {
  return (
    <div className='background' >
      {/* <video src={bgvideo} autoPlay muted Loop className="video-bg" /> */}
      <Box sx={{width: "100%",py:3, bgcolor: mode?blueGrey[500]:blueGrey[1000],color:'indigo'}} >
      <Row>
            <Col className='home'>
            <motion.h3 whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4}}>Hello Im,</motion.h3>
            <motion.h1 whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4}}>ATHUL KR</motion.h1>
            
            <div className='title'>
            <motion.div  initial={{ opacity: 0,x:100 }}
                             whileInView={{ opacity: 1 ,x:0}}
                             transition={{ ease: "easeOut", duration: .5,bgcolor:mode?blueGrey[900]:blueGrey[200] }} >
                <Typography sx={{fontSize:{xs:16,md:24}}}  variant='h5'   color={'light'} component='h2'>I am a  
                 
                  <TypeAnimation
      sequence={[
        ' Front End Developer',
        2500,
        ' Back End Developer',
        2500
      ]}
      wrapper="span"
      speed={1}
      style={{fontSize: {xs:16,md:24}, display: 'inline',color:blue[500]}}
      repeat={Infinity}
    />
               
                </Typography>
                  </motion.div>
                  
            {/* <h5 className='title1'>I AM A <span className='text-danger'>MEAR(N)STACK DEVELOPER</span></h5> */}
            </div>
            <motion.a initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50' }} viewport={{ once: true }} href="/">
              <a href="myresume.pdf" download >
              <button className="cv-btn download ">Download CV</button>
              </a>
            </motion.a>
            <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50' }} viewport={{ once: true }} className='m-4' >
                <a className='git'>
                <i class="fa-brands fa-github m-2 text-dark "></i>
                </a>
                <a className='linked'>
                <i class="fa-brands fa-linkedin m-2 text-dark "></i>
                </a>
                <a className='insta'>
                <i class="fa-brands fa-instagram m-2 text-dark "></i>
                </a>
            </motion.div>
            </Col>
            <Col>
            <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50' }} viewport={{ once: true }} className="images m-5 p-5">
                <div className="blue-bg-outer">
                   <div className="white-bg">
                        <div className="blue-bg">
                          <img  src={img} alt="" />
                        </div>
                   </div>
                </div>
            </motion.div>
            </Col>
            
            
        </Row>
      </Box>
        
    </div>
  )
}

export default Home