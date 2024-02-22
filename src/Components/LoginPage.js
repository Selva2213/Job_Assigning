import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Stack, TextField, Typography, Button, CardActions } from '@mui/material';
import './/login.css'
export default function Loginpage()
{
    const navigate=useNavigate();
    return(
        <div className='loginpage'>
          <Box width={700} paddingLeft={60} paddingTop={10}>
            <Card sx={{backgroundColor:'white'}} >
                <CardContent>
                    <Typography gutterBottom variant='h2' color={'brown'}>
                        User Information
                    </Typography>
                    <Stack direction={'column'} spacing={2} width={150}>
                    <TextField label='UserName' variant='standard' color='secondary' type='text' required ></TextField>
                    <TextField label='Email' variant='standard' color='secondary' type='email' required></TextField>   
                    <TextField label='Password' variant='standard' color='secondary' type='password' required></TextField>
                    </Stack>
                </CardContent>
                <CardActions>
                    <Button color='warning' onClick={()=>(navigate(-1))}>Go back</Button>
                    <Button color='warning' onClick={() =>(navigate('/skills'))} >Submit</Button>
                </CardActions>
            </Card>
            <Stack direction={'row'} spacing={2}>
                
            </Stack>
          </Box> 
        </div>
    );
}

