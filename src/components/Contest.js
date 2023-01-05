import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';




import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom'
import p1 from '../cf.png'
import p2 from '../cc.png'
import p3 from '../leet.png'
import p4 from '../at.png'
import p5 from '../ace.png'
const buttonSX = {
  backgroundColor:'lightgreen',
  "&:hover": {
    
   fontSize:'13px',
   backgroundColor:'lightblue'
  },
};


const images = [
  {
    url: p4,
    title: 'ATCODER',
    width: '53%',
    code_url:'https://atcoder.jp/contests/'
  },
  {
    url: p1,
    title: 'CODEFORCE',
    width: '47%',
    code_url:'https://codeforces.com/contests/'
  },
  {
    url: p5,
    title: 'GOOGLE',
    width: '33%',
    code_url:'https://codeforces.com/contests/'
  },
  {
    url: p2,
    title: 'CODECHEF',
    width: '40%',
    code_url:'https://codechef.com/contests/'
  },
  {
    url: p3,
    title: 'LEETCODE',
    width: '27%',
    code_url:'https://leetcode.com/contests/'
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  fontSize:'100px'
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  fontSize:'100px',
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  fontSize:'100px',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const Topic = () => {
  return (
    <>
    <div > 
      
<Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 600, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}



        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                fontSize:'30px'
              }}

              onClick={()=>{window.open(`${image.code_url}`, "_blank")}}
            >
      
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>




    </div>
    
    </>

   
  )
}

export default Topic
