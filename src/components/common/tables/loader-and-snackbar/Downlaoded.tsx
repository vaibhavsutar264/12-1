import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { SnackbarContent } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';


export default function Downloaded({ open, InvoiceId, close }: any) {
    const [state, setState] = React.useState<any>({
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, } = state;

    const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ ...newState });
        close(true);
    };


    const buttons = (
        <React.Fragment>
            <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'right',
                })}
            >

            </Button>
        </React.Fragment>
    );

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
        <Stack spacing={2} style={{ position: 'fixed', top: 100, right: 0, zIndex: 1000, maxWidth: '300px' }} className='cdr-downloaded'>
            {buttons}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={7500}
                action={action}
                onClose={() => { close(false) }}
                message={<div className='snackbar-content--container'>
                    <IconButton aria-label="done">
                        <CheckCircleIcon />
                    </IconButton>
                    <div className='snackbar-content'>
                        <p>Successfully Downloaded!</p><p>The file {InvoiceId} has been downloaded Click on the link to open the file https://www.openfile.com/</p></div></div>}
                key={vertical + horizontal}
            />
        </Stack>
    );
}
