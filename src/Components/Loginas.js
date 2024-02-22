import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { blue } from '@mui/material/colors';
import BlindIcon from '@mui/icons-material/Blind';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import BuildIcon from '@mui/icons-material/Build';
function Loginas() {
  const color = blue[50];
    const navigate=useNavigate();
  return (
    <>
    <Stack sx={{backgroundColor:'#003580'}}>
    <Box width='460px' sx={{paddingLeft:'35%',paddingTop:'200px'}}>
      <Card sx={{backgroundColor:'lightblue'}}>
          <CardContent>
            <Typography gutterBottom variant='h2' component='div'>
              Login as
            </Typography>
            <CardActions>
              <Button color='warning' variant='contained' startIcon={<BlindIcon/>} onClick={()=>navigate('/login')}>Employee</Button>
              <Button color='warning' variant='contained' startIcon={<CoPresentIcon/>} onClick={()=>navigate('/login/loginusers/loginsuccess')}>Job Seeker</Button>
              <Button color='warning' variant='contained' startIcon={<BuildIcon/>} onClick={()=>navigate('/login/loginusers/loginsuccess')}>Admin</Button>
            </CardActions>
          </CardContent>
      </Card>
      <Button sx={{color:{color}}} onClick={()=>navigate(-1)}>Go back</Button>
    </Box>
    </Stack>
    </>
  )
}

export default Loginas
