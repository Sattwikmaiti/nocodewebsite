import React from 'react'




import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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


const Topic = () => {
  return (
    <div > 
   <div className="mom">
   <div className="child">
     <Card sx={{ maxWidth: 800 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={p1}
          alt="green iguana"
        />
        <CardContent>
        <h1 gutterBottom variant="h3" component="" sx={{color:'green'}}>
          &#9733;	&#9733; STATUS	&#9733;	&#9733;
          </h1>
          <h3>Codeforce</h3>
          <Typography variant="" color="text.secondary">
           Upcoming contest : December 11/2022 on 21:05(UTC + 5.5)

           <a  href="https://codeforces.com/contests/1771" target="blank"><h1>LINK</h1> </a>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={buttonSX} size="small" color="primary" >
        <a  href="https://codeforces.com/contests" target="blank"><h1>click on me </h1> </a>
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className="child">
     <Card sx={{ maxWidth: 800 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={p2}
          alt="green iguana"
        />
        <CardContent>
        <h1 gutterBottom variant="h3" component="" sx={{color:'green'}}>
          &#9733;	&#9733; STATUS	&#9733;	&#9733;
          </h1>
          <h3>Codechef</h3>
          <Typography variant="" color="text.secondary">
          Upcoming contest : December 10/2022 on 20:00 IST (long) 

           <a  href="https://www.codechef.com/DEC221" target="blank"><h1>LINK</h1> </a>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={buttonSX} size="small" color="primary" >
        <a  href="https://www.codechef.com/contests?itm_medium=navmenu&itm_campaign=allcontests/" target="blank"><h1>click on me </h1> </a>
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className="child">
     <Card sx={{ maxWidth: 800 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={p3
          }
          alt="green iguana"
        />
        <CardContent>
          <h1 gutterBottom variant="h3" component="" sx={{color:'green'}}>
          &#9733;	&#9733; STATUS	&#9733;	&#9733;
          </h1>
          <h3>LeetCode</h3>
          <Typography variant="" color="text.secondary">
           Upcoming contest : December 10/2022 on 8:00pm(GMT+5:30)

           <a  href="https://leetcode.com/contest/biweekly-contest-93/" target="blank"><h1>LINK</h1> </a>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={buttonSX} size="small" color="primary" >
        <a  href="https://leetcode.com/contest/" target="blank"><h1>click on me </h1> </a>
        </Button>
      </CardActions>
    </Card>
    </div>
    
    </div>
    <div className="mom">
   <div className="child">
     <Card sx={{ maxWidth: 800 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={p4}
          alt="green iguana"
        />
        <CardContent>
          <h1 gutterBottom variant="h3" component="" sx={{color:'green'}}>
          &#9733;	&#9733; STATUS	&#9733;	&#9733;
          </h1>
          <h3>Atcoder</h3>
          <Typography variant="" color="text.secondary">
           Upcoming contest : December 10/2022 on 17:30(local time)

           <a  href="https://atcoder.jp/contests/abc281" target="blank"><h1>LINK</h1> </a>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={buttonSX} size="small" color="primary" >
        <a  href="https://atcoder.jp/contests/" target="blank"><h1>click on me </h1> </a>
        </Button>
      </CardActions>
    </Card>

    </div>
    <div className="child">
     <Card sx={{ maxWidth: 800 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={p5}
          alt="green iguana"
        />
        <CardContent>
          <h1 gutterBottom variant="h3" component="" sx={{color:'green'}}>
          &#9733;	&#9733; STATUS	&#9733;	&#9733;
          </h1>
          <h3>Top Coding Contests</h3>
          <Typography variant="" color="text.secondary">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis ut praesentium fugiat debitis. Sit perspiciatis, culpa earum quo sapiente aliquam vero fugit unde eligendi saepe, facilis dolor minima voluptas?

           <a  href="https://atcoder.jp/contests/abc281" target="blank"><h1>LINK</h1> </a>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={buttonSX} size="small" color="primary" >
        <a  href="https://atcoder.jp/contests/" target="blank"><h1>click on me </h1> </a>
        </Button>
      </CardActions>
    </Card>

    </div>
    
    
   
    
    </div>
    
    
    </div>
    


   
  )
}

export default Topic
