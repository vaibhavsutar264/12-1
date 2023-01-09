import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const UserInfoCard = () => {
    return (
        <Box className='single-card'>
            <Typography variant='h4'>emma smith</Typography>
            <Button href='mailto:johndeo@company.com'>johndeo@company.com</Button>
            <Box component='span'>Created on 02 Sep 21</Box>
        </Box>
    )
}

export default UserInfoCard
