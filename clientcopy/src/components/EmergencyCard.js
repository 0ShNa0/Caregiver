
import { Card,CardMedia,CardHeader,CardContent,Typography} from '@mui/material';

import React from 'react';

import em from '../assets/emergency.png';


const EmergencyCard = ({emergency,steps}) => {
    if (!steps || !Array.isArray(steps)) {
        return null; 
      }

   return (
     <div
     style={{
         display: 'flex',
       justifyContent:"center",
      position:'relative',
       
     
     }}
   >
     <Card raised={true}  
     sx={{
         
         maxWidth :{sx:'72vw',md:'83vw',lg:'81vw'},
         bgcolor:'#fff',
         maxHeight:{sx:'110px',md:'180px',lg:'440px'},
         overflow: 'auto',
        borderRadius:1,
         mt:{sx:'20px',md:'40px',lg:'80px'},
         marginLeft:'auto',
         marginRight:'auto',
         mb:{sx:'20px',md:'40px',lg:'80px'}
    
     }}>
       
          <CardHeader title={<Typography color="black"  justifyContent= 'center' display='flex' borderBottom= '3px solid black'
       alignItems= 'center' fontSize={{sx:'15px',md:'19px',lg:'24px'}} fontFamily='Playfair Display'>{emergency}</Typography>}
       />
     
          < CardContent  style={{ display: 'flex', justifyContent: 'space-between' }} >
          <div style={{ flex: '0 0 30%', maxHeight: '70%', overflow: 'hidden' }}>
          <CardMedia component="img" width="100%" image={em}  />
          </div>
          <Typography
     fontFamily='Playfair Display' float="right" position="relative" marginLeft="15px" >
    
 <div>
   <Typography component="span" fontSize={{sx:'12px',md:'16px',lg:'22px'}} color="red" fontFamily='Playfair Display' alignContent={'center'} display='flex'>Steps to be taken</Typography>
  
   { steps.map((step)=>(
   <React.Fragment>
   <Typography component="span" fontSize={{sx:'12px',md:'16px',lg:'22px'}} color="black" fontFamily='Playfair Display'> * {step}</Typography>
   <br/>
   </React.Fragment>
)
)}

 </div>
 
 
           
         </Typography>
 
          </CardContent>
 
         </Card>
         </div>
   )
 }
 
 export default EmergencyCard;
 
