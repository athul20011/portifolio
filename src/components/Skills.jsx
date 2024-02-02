import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { motion } from 'framer-motion';
import './Skills.css'
function Skills({mode}) {
  return (
        <div className='SkillSection'>
      <Box sx={{width: "100%",py:3, bgcolor: mode?blueGrey[500]:blueGrey[1000]}}>
        <Typography variant="h3" textAlign={"center"}>
          Skills
        </Typography>

        <Grid container  px={{xs:0,md:20}} py={5} rowSpacing={{xs:0,md:2}}>
          
              <Grid item xs={12} md={3} >
          <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4}}>
              <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
                    <Card sx={{ width:'100%',maxWidth: '100%' }}>
                      <CardMedia
                        component="img"
                        height={260}
                        sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
                        image="https://i.postimg.cc/0y0nbtxK/html-1051277.png"
                        title="HTML"
                        />
                      <CardContent>
                        <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
                         HTML
                        </Typography>
                      </CardContent>
                    </Card>
              </motion.div>
          </motion.div>
              </Grid>
          
          <Grid item xs={12} md={3}>
            <motion.div whileInView={{x:0,opacity:1,scale:.9}}  initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:0.25}}>
              <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
            <Card sx={{ width:'100%',maxWidth: '100%' }}>
              <CardMedia
                component="img"
                height={260}
                sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
                image="https://i.postimg.cc/BQDMGSVg/css-3-732190.png"
                title="CSS"
                />
              <CardContent sx={{bgcolor:blueGrey[700],color:blueGrey[100]}}>
                <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
                 CSS
                </Typography>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:0.50}}>
              <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
            <Card sx={{ width:'100%',maxWidth: '100%' }}>
              <CardMedia
                component="img"
                height={260}
                sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
                image="https://i.postimg.cc/qvTQBffd/js-5968292.png"
                title="Javascript"
                />
              <CardContent >
                <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
                 JavaScript
                </Typography>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
          </Grid>
                
          
          <Grid item xs={12} md={3}>
            <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:.75}}>
              <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
            <Card sx={{ width:'100%',maxWidth: '100%' }}>            
                  <CardMedia
                    component="img"
                    height={260}
                    sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
                    title="Bootstrap"
                    />
              <CardContent sx={{bgcolor:blueGrey[700],color:blueGrey[100]}}>
                <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
                 Bootstrap
                </Typography>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:1}}>
              <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
            <Card sx={{ width:'100%',maxWidth: '100%' }}>
              <CardMedia
                component="img"
                height={260}
                sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
                image="https://mui.com/static/logo.png"
                title="Material ui"
                />
              <CardContent sx={{bgcolor:blueGrey[700],color:blueGrey[100]}}>
                <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
                 Material Ui
                </Typography>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
          </Grid>

          <Grid item xs={12} md={3}>
            <motion.div whileInView={{x:0,opacity:1,scale:.9}} style={{width:'100%'}} initial={{x:-100,opacity:0,scale:0.8}} transition={{duration:.4,delay:1.25}}>
              <motion.div whileHover={{scale:1.1}} initial={{scale:1}}>
            <Card sx={{ width:'100%',maxWidth: '100%' }}>
              <CardMedia
                component="img"
                height={260}
                sx={{objectFit:'contain',bgcolor:blueGrey[50],py:3}}
                image="https://i.postimg.cc/PfCS2zb0/584830f5cef1014c0b5e4aa1.png"
                title="React"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" letterSpacing={1} textAlign={'center'} fontWeight={700} component="div">
                 React
                </Typography>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default Skills