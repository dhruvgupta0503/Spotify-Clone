import React from 'react';
import "./Footer.css";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousSharpIcon from '@mui/icons-material/SkipPreviousSharp';
import SkipNextSharpIcon from '@mui/icons-material/SkipNextSharp';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid'
function Footer() {
  return (
    <div className="footer">
    <div className="footer__left">
      <img src='https://i.scdn.co/image/75755793c8dab4768679cece09d3416c7debc841' alt=''
        className="footer__albumLogo"
        
      />
      <div className='footer__songInfo'>
      <img src="" alt="" />
      <h4>Love Someone</h4>
      <p>Lukas Graham</p>
          
      </div>
      
       </div>
       <div className='footer__center'> 
       <ShuffleIcon className='footer__green'/>
       <SkipPreviousSharpIcon className='footer__icon'/>
       <PlayCircleIcon fontSize='large'
       className='footer__icon'/>
       <SkipNextSharpIcon className='footer__icon'/>
       <RepeatIcon className='footer__green'/>  
       </div>
       <div className='footer__right'>
       <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider  />
          </Grid>
        </Grid>

       </div>
    </div>
  )
}

export default Footer