import React from 'react'
import { Box, Typography, Button, IconButton } from '@mui/material'
import WorkIcon from '@mui/icons-material/Work';
import GavelIcon from '@mui/icons-material/Gavel';


const UserInfoCard = () => {
    return (
        <Box className='single-card'>

            {/* Top content */}
            <Box>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <WorkIcon />
                </IconButton>
                <Box>
                    <Typography variant='h3'>emma smith</Typography>
                    <Button href='mailto:johndeo@company.com'>johndeo@company.com</Button>
                    <Box component='span'>Created on 02 Sep 21</Box>
                </Box>
            </Box>

            {/* Middle content */}
            <Box>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <WorkIcon />
                </IconButton>
                <Box>
                    <Typography variant='h4'>role</Typography>
                    <Box component='span'>admin</Box>
                </Box>
            </Box>

            {/* Bottom content */}
            <Box>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <WorkIcon />
                </IconButton>
                <Box>
                    <Typography variant='h4'>legal entity</Typography>
                    <Box component='span'>Accenture India Pvt Ltd.</Box>
                </Box>
            </Box>
        </Box>
    )
}

export default UserInfoCard
