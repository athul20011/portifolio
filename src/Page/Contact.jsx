
import React from 'react'
import { blueGrey,  deepOrange,blue} from '@mui/material/colors'
import { Box,} from '@mui/material'
import './Contact.css'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { motion } from "framer-motion"
function Contact({mode}) {

  return (
    <div className='con' >
      <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50' }} viewport={{ once: true }} >
      <Box bgcolor={mode?blueGrey[500]:blueGrey[1000]} width={'100%'} height={'80vh'} >
 <div style={{width:'100%', padding:'50px',alignContent:'center'}} id='contact'>
    <div className="container ">
        <div style={{width:'100%', textAlign:'center'}}>
        <h1 style={{fontWeight:'bolder'}}>GET IN <span style={{color:'lightblue'}}>CONTACT</span></h1>
        </div>
    <div className="row">
  <div className="col-md-4" style={{color:'white'}}>
    <div style={{padding:'10px'}} >
        <h5> <i class="fa-solid fa-location-dot fa-1x" ></i>  Adress Point  </h5>
        <p> Melarcode(po) <br /> PALAKKAD(dt) pin:678703 </p> 
    </div>
    <div style={{padding:'10px'}} >
        <h5> <i class="fa-regular fa-envelope fa-1x"></i>  Mail Me</h5>
        <p>novaclear47@gmail.com</p>
    </div>
    <div style={{padding:'10px'}}>
        <h5> <i class="fa-solid fa-phone fa-1x"></i>  Call Me</h5>
        <p>+91 9947471298</p>
    </div>
  </div>
  <div className="col-md-8" style={{marginTop:'50px'}}>
    <div className="row" style={{marginBottom:'40px'}}>
        <div className="col-md-6">
        <MDBInput  label='Name' id='form1' type='text'placeholder='Name' />
        </div>
        <div className="col-md-6">
        <MDBInput label='Email' id='form1' type='text' placeholder='Email' />
        </div>
    </div>
  <div className="row" style={{marginBottom:'40px'}}>
    <div className="col-md-12">
    <MDBInput label='Subject' id='form1' type='text'placeholder='Subject' />
    </div>
  </div>
  <div className="row" >
    <div className="col-md-12">
    <MDBTextArea label='Message' id='textAreaExample' rows={4} placeholder='Message' />
    </div>
  </div>
  <button className='btn' style={{color:'black', backgroundColor:'lightblue', border:'1px solid', borderRadius:'5px', marginTop:'15px'}}>Sent</button>
  </div>
  </div>
</div>
</div>
    </Box>   
      </motion.div>
    </div>
   
  )
}

export default Contact