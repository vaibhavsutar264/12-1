import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { SnackbarContent } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';

export interface State extends SnackbarOrigin {
    open: boolean;
}

export default function CDRError() {
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
            <Button
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'right',
                })}
            >
                Top-Right
            </Button>
        </React.Fragment>
    );

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Stack spacing={2} sx={{ maxWidth: 300 }} style={{ position: 'fixed', top: 100, right: 0, zIndex: 1000, maxWidth: '300px' }} className='cdr-error'>
            {buttons}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={7500}
                action={action}
                onClose={handleClose}
                message={<div className='snackbar-content--container'>
                    <IconButton aria-label="error">
                        <ErrorOutlineIcon />
                    </IconButton>
                    <div className='snackbar-content'>
                        <p>CDR File can&lsquo;t be Prepared</p><p>Please try downloading AM2398756710 again</p></div></div>}
                key={vertical + horizontal}
            />
        </Stack>
    );
}
