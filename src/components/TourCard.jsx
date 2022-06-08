import React from 'react';
import { Paper, Rating } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';



const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          }
        }
      ]
    }
  }
})


const TourCard = () => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img 
            src="https://www.toniagara.com/blog/wp-content/uploads/2019/06/niagara-bus-tours-niagara-bus-tours-from-toronto.jpg" 
            alt="" 
            className='img'
          />
          <Box paddingX={1}>
            <Typography variant='subtitle1' component='h2'>
              Immerse into the Falls
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                5 hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              <Rating name='read-only' value={4.5} readOnly precision={0.5} size="small" />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                4.5
              </Typography>
              <Typography variant='body3' component='p' marginLeft={1.5}>
                (655 reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' component='h3' marginTop={0}>
                From C $147
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  )
}

export default TourCard;