import { Box, Typography, Paper } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import CustomizedAccordions from '../components/Accordions';
import ImageCollage from '../components/ImageCollage';
import { BottomNavigation } from '@mui/material';
import BasicModal from '../components/Modal';

const Tour = () => {
  return (
    <Container sx={{width: 900}}>
        <Typography variant='h3' component='h1' marginTop={3}>
            Explore the world in Vegas
        </Typography>
        <Box marginTop={3} sx={{display: 'flex'}}>
            <img src="https://cdn.aarp.net/content/dam/aarp/travel/destinations/2022/03/1140-las-vegas-sign.jpg" alt="" height={325} />
            <ImageCollage />
        </Box>
        <Box>
            <Typography variant='h6' component='h4' marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant='paragraph' component='p' marginTop={3}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nesciunt quaerat eligendi tempore. Impedit, adipisci. A neque ab provident ipsa veritatis eligendi maxime dolore, hic nisi ad nesciunt dolor id numquam. Corporis tempora temporibus unde, dolorem illum blanditiis laborum doloremque.
            </Typography>
        </Box>
        <Box marginBottom={10}>
            <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
                Frequently Asked Questions
            </Typography>
            <CustomizedAccordions />
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BasicModal />
            </BottomNavigation>
        </Paper>
    </Container>
  )
}

export default Tour;