import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { RoodMap, roodmaps} from '../models/roodmap';
import Navbar from '../components/Navbar';

export default function AlignItemsList() {
  return (
    <>
     <Navbar />
     <div className=""> 
     <h1>RoodMap</h1> 
     <ul>
      {roodmaps.map((roodmap, key) => (
      <li key={key}>
          <h3>{roodmap.name}</h3>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {roodmap.items.map((p, i) => (
             <ListItem alignItems="flex-start" key={i} >
                <ListItemAvatar>
                   <Avatar alt="Travis Howard" src={p.avatar} />
                </ListItemAvatar>
                         <ListItemText
                  primary= {p.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                       <p>{p.description}</p>
                     </Typography>
                      <b>{p.following}</b>
                    </React.Fragment>
                 }
                 />
             </ListItem>       

             ))}
           </List>   
      </li>
      ))}
     </ul>
     </div>
    </>       
  );
} 

       
