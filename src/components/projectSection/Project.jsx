import { Box, Container, Tabs,Tab, Typography, AppBar, createTheme, ThemeProvider } from '@mui/material'
import {  deepOrange } from '@mui/material/colors'
import React, { useState } from 'react'
import HtmlCss from './HtmlCss/HtmlCss'
import JavaScript from './JavaScript/JavaScript'
import ReactProject from './React/ReactProject'
import './Project.css'
import { blueGrey} from '@mui/material/colors'
import { motion } from "framer-motion"

function Project({mode}) {
  const theme = createTheme({
    palette: {
    secondary: {
      main: mode?deepOrange[500]:deepOrange[900],
    },
  },
  });
  const [value,setValue] =useState(0)
  const handleTabs=(e,val)=>{
      setValue(val)
  }
  return (

    <div className='projectSection'>
      <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4}}  >
      <ThemeProvider theme={theme}>
    <Box sx={{width: "100%",py:3, bgcolor: mode?blueGrey[500]:blueGrey[1000]}}>
       <Typography variant='h3'textAlign={'center'}>Projects</Typography> 
        <Container  sx={{my:2,minHeight:'80vh'}}>
          <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50' }} viewport={{ once: true }} >
          <AppBar className='bg-light' position='static'>
         <Tabs 
         textColor="light" value={value} centered onChange={handleTabs}>
            <Tab  label='HTML & CSS'  />
            <Tab label='JavaScript' />
            <Tab label='React' />
         </Tabs>
         </AppBar>
          <TabPanel value={value} index={0}>
            <Box width={'100%'}  p={3}>
            <HtmlCss />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <Box width={'100%'}  p={3}>
            <JavaScript/>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <Box width={'100%'}  p={3}>
            <ReactProject />
            </Box>
          </TabPanel>   
          </motion.div>
        
        </Container>
    </Box>
   </ThemeProvider>
      </motion.div>
    </div>
  )
}
function TabPanel(props)
{
  const {children,value,index} = props
  return(
    <div>
      {
        value==index&&(
          <h1>{children}</h1>
        )
      }
    </div>
  )
}

export default Project