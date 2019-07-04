import React from 'react';
import ConsoleStyles from "../../jss/ConsoleStyles";
import { Typography, Button } from '@material-ui/core';



const Console = ({consoleCard}) => {
 const classes = ConsoleStyles();
 return(
     <section className={classes.root}>
         <section className={classes.description}>
              <Typography gutterBottom variant="h4" align="center">{consoleCard.title}</Typography>  
              <Typography gutterBottom variant="h6" align="center">{consoleCard.quantity} stocks left</Typography>  
              <Typography gutterBottom variant="h6" align="center">${consoleCard.price}</Typography> 
              <Button variant="contained" color="secondary">Add To Cart</Button>
          </section>
          <section className={classes.description}>
                <img  className={classes.image} src={consoleCard.image} alt="this is a image of a platform"/>
          </section>
     </section>
 )

}

export default Console 