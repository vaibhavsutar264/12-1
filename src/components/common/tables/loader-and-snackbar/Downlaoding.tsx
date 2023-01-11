import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { SnackbarContent } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import CloseIcon from '@mui/icons-material/Close';



export default function Downlaoding({ open, SnakData, close }: any) {
    const [state, setState] = React.useState<any>({
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal } = state;


    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => { close(false) }}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Stack spacing={2} sx={{ maxWidth: 300 }} style={{ position: 'fixed', top: 100, right: 0, zIndex: 1000, maxWidth: '300px' }} className='cdr-downloading'>
            {/* {buttons} */}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={7500}
                action={action}
                onClose={() => { close(false) }}
                message={<div className='snackbar-content--container'>
                    <IconButton aria-label="progress">
                        <RotateRightIcon />
                    </IconButton>
                    <div className='snackbar-content'>
                        <p> {SnakData.type} is Downloading</p><p>The download of {SnakData.invoice} is in progress</p></div></div>}
                key={vertical + horizontal}
            />
        </Stack>
    );
}
