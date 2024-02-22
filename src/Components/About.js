import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button,Box, Card, Typography, CardContent, CardActions } from '@mui/material';
function About() {
  const navigate=useNavigate();
  return (
    <div className='about'>
      <Box width='500px' sx={{paddingTop:'10%',paddingRight:'500px'}}>
        <Card>
          <CardContent>
            <Typography variant='h2' gutterBottom >About us</Typography>
            <Typography variant='body1'>essay, an analytic, interpretative, or
             critical literary composition usually much shorter 
             and less systematic and formal than a dissertation or thesis 
            and usually dealing with its subject from a limited and often personal
             point of view. Category: Arts & Culture.2</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={()=>navigate(-1)}>Go back</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  )
}

 export default About


