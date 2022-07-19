import React from 'react'
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Footer = () => {

    const arrayFooter = ['Audio and Subtitles', 'Media Center', 
'Security', 'Contact us'];

  const arrayFooter2 = ['Audio Description', 'Investor Relations', 
'Legal Provisions'];

  const arrayFooter3 = ['Help center', 'Jobs', 
'Cookie Preferences'];


  const arrayFooter4 = ['Gift Cards', 'Terms of Use', 
'Corporate Information'];





    return (
        <div style={{padding: '10px 0px'}}> 
    <Grid container spacing={1} sx={{ width: '80%', margin: 'auto'}}>
           <Grid item xs={4} md={3} sx={{  }}> 
             <List dense={true}>
              { arrayFooter.map((val) => 
                 <ListItem>
                  <ListItemText
                    primary={val} sx={{ color: '#808080' }}
                  />
                </ListItem>
              )}
            </List>
            </Grid>
            <Grid item xs={4} md={3} sx={{  }}> 
             <List dense={true}>
              { arrayFooter2.map((val) => 
                 <ListItem>
                  <ListItemText
                    primary={val} sx={{ color: '#808080' }}
                  />
                </ListItem>
              )}
            </List>
            </Grid>
             <Grid item xs={4} md={3} sx={{ }}> 
             <List dense={true}>
              { arrayFooter3.map((val) => 
                 <ListItem>
                  <ListItemText
                    primary={val} sx={{ color: '#808080' }}
                  />
                </ListItem>
              )}
            </List>
            </Grid>
             <Grid item xs={4} md={3} sx={{}}> 
             <List dense={true}>
              { arrayFooter4.map((val) => 
                 <ListItem>
                  <ListItemText
                    primary={val} sx={{ color: '#808080' }}
                  />
                </ListItem>
              )}
            </List>
            </Grid>
        </Grid>
        <Box sx={{ width: '80%', margin: 'auto', paddingTop:'10px', paddingLeft:'40px'}}> 
          <Button variant="outlined" size="small" sx={{ color: '#808080', border:'1px solid #808080'}}>
          Service Code
        </Button>
        </Box>
         <Box sx={{ width: '80%', margin: 'auto', paddingTop:'20px', paddingLeft:'40px', paddingBottom: '20px'}}> 
          <Typography  sx={{
               color: '#808080'
            }}>© 2022 Movies, All Right Reserved</Typography>
               </Box>
        </div>
    )
}

export default Footer
