import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog, IconButton, Link } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import PasswordProtected from '../../assets/images/svg/password-protected.svg'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function ModalLoginError({ setShowError, showError }: any) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={showError}
                onClose={() => { setShowError(false) }}
                aria-labelledby="responsive-dialog-title"
                className='modal-login-error'
            >
                <IconButton onClick={() => { setShowError(false) }}><CloseRoundedIcon /></IconButton>
                {/* <img src={PasswordProtected} alt="" /> */}
                <div className='ModalErrorIcon'>
                    <WarningAmberIcon />
                </div>
                <DialogTitle id="responsive-dialog-title" textAlign='center'>
                    {"Oops"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText textAlign='center'>
                        Unable to login. Please try again
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setShowError(false) }}>
                        retry
                    </Button>
                </DialogActions>
                <p className='lighter-text'>Need more help? <Link style={{ cursor: 'pointer' }} color='error' underline='always'>Contact Us</Link></p>
            </Dialog>
        </div>
    );
}

export default ModalLoginError;
