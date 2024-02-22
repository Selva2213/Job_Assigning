import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography} from '@mui/material'
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import LoginIcon from '@mui/icons-material/Login';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
function Hometemp() {
    const navigate=useNavigate();
  return (
    <div className=' body'>
    <Grid container  height={'100vh'}>
      <Grid item xs={6}>
        <Stack spacing={2} direction={'column'}  width={100}>
          <Button variant='contained' size='large' width={2} color='primary' startIcon={<InfoTwoToneIcon/>} onClick={() => navigate('/about')}>About</Button>
          <Button variant='contained' size='large' color='primary' startIcon={<LoginIcon/>} onClick={() => navigate('/loginas')}>Login</Button>
          <Button variant='contained' size='large' color='primary' startIcon={<HelpCenterOutlinedIcon/>} onClick={() => navigate('/help')}>Help</Button>
        </Stack>
      </Grid>
      <Grid item paddingLeft={20} xs={6} >
        <Box width={'auto'}>
          <Card>
            <CardContent>
              <Typography variant='h3' gutterBottom>Goal</Typography>
            </CardContent>
            <CardMedia height={400} width={50}/>
            <CardContent>
              <Typography variant='body1' gutterBottom>This tool concentrate more on the user needs.</Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
    </div>
  )
}

export default Hometemp
