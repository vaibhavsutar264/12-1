import React, { useState } from 'react'
import Download from '../../assets/images/svg/download.svg';
import { useParams } from 'react-router-dom'
import {
    Box,
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    TextField,
    TextareaAutosize,
    FormGroup,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import { useSelector } from '../../redux/store'
import { dataTables } from '../../utils/constants'
import { isAbsolute } from 'path'
import Close from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const RaiseTicket = ({ handleShow, showIt }: any) => {


    return (
        <Box sx={{
            bgcolor: '#fff',
            boxShadow: 24,
            height: '100vh',
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '50%',
            padding: '56px',
            zIndex: 10,
            overflowY: 'auto',
            transition: 'transform 350ms 0ms ease-in',
            transform: `translateX(${showIt ? 0 : 100}%)`,
        }}>
            <CloseIcon onClick={handleShow} sx={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                cursor: 'pointer'
            }} />
            <Stack>
                <Typography variant='h5' component='h1' sx={{
                    maxWidth: 'unset',
                    textAlign: 'left',
                    mb: '40px',
                    padding: 0,
                    fontSize: '24px',
                    lineHeight: '22px',
                    color: '#303030',
                    fontWeight: 700,
                    fontFamily: 'ubuntu',
                }}>Raise a Ticket</Typography>

                <Typography variant='h6' color='#73768A' component='h2' sx={{
                    maxWidth: 'unset',
                    textAlign: 'left',
                    textTransform: 'capitalize',
                    color: '#73768A',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontFamily: 'ubuntu',
                }}>invoice number</Typography>
                <Typography variant='h6' component='h3' sx={{
                    maxWidth: 'unset',
                    textAlign: 'left',
                    mb: '32px',
                    color: '#000000',
                    fontSize: '22px',
                    lineHeight: '25px',
                    fontWeight: 700,
                    fontFamily: 'ubuntu',
                }}>AM2398756710</Typography>

                {/* First form starts here */}
                <Box
                    component="form"
                    className='raise-ticket-input'
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexWrap: 'wrap',
                    }} noValidate autoComplete="off"
                >
                    <TextField label="service ref*" variant="outlined" type="text" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '40%',
                        textTransform: 'capitalize',
                    }} />
                    <TextField label="dispute amount($)*" variant="outlined" type="number" helperText="Amount should be less than 50$" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '40%',
                        textTransform: 'capitalize',
                    }} />
                    <FormControl fullWidth
                        sx={{
                            flexBasis: '40%',
                        }}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth
                        sx={{
                            flexBasis: '40%',
                        }}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextareaAutosize
                        className='raise-ticket-textarea'
                        aria-label="minimum height"
                        minRows={3}
                        maxRows={3}
                        placeholder="Describe Your Complaint"
                        style={{ marginBottom: '32px' }}
                    />
                    <Box className='raise-ticket-file-upload' sx={{
                        flexBasis: '100%',
                        marginBottom: '50px',
                    }}>
                        <Stack direction='row' spacing={2}>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <AttachFileIcon />
                            </IconButton>
                            <Box sx={{
                                borderRadius: '22px',
                                width: 'auto',
                                padding: '9px 20px',
                                border: '1px solid #70707080',
                                color: '#131523',
                                fontSize: '12px',
                                lineHeight: '13px',
                                fontWeight: 600,
                                fontFamily: 'ubuntu',
                                display: 'flex',
                                gap: '8px',
                                alignItems: 'center',
                            }} component='span'><img src={Download} alt='pdf icon' />Document 1.PDF</Box>
                        </Stack>
                    </Box>
                </Box>



                <Box>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='h5' component='h1' sx={{
                            maxWidth: 'unset',
                            textAlign: 'left',
                            mb: '40px',
                            padding: 0,
                            fontSize: '24px',
                            lineHeight: '22px',
                            color: '#303030',
                            fontWeight: 700,
                            fontFamily: 'ubuntu',
                        }}>Contact Person</Typography>
                        <Button variant='outlined' color='error' startIcon={<AddIcon />} sx={{
                            borderRadius: '20px',
                        }}>Add</Button>
                    </Stack>
                </Box>

                {/* Second form starts here */}
                <Box
                    component="form"
                    className='raise-ticket-input'
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexWrap: 'wrap',
                        mb: '68px',
                    }} noValidate autoComplete="off"
                >
                    <TextField label="contact person" variant="outlined" type="text" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '40%',
                        textTransform: 'capitalize',
                        color: '#344857',
                        fontSize: '16px',
                        lineHeight: '18px',
                        fontWeight: 700,
                        fontFamily: 'ubuntu',
                    }} />
                    <TextField label="mobile number" variant="outlined" type="number" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '40%',
                        textTransform: 'capitalize',
                    }} />
                    <TextField label="email" variant="outlined" type="email" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '40%',
                        textTransform: 'capitalize',
                    }} />
                    <TextField label="contact person" variant="outlined" type="text" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '40%',
                        textTransform: 'capitalize',
                    }} />
                    <TextField label="mobile number" variant="outlined" type="number" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '40%',
                        textTransform: 'capitalize',
                    }} />
                    <TextField label="email" variant="outlined" type="email" sx={{
                        border: '1px solid #eee',
                        borderRadius: '10px !important',
                        flexBasis: '40%',
                        textTransform: 'capitalize',
                    }} />
                </Box>

                <Box>
                    <Stack direction='row' spacing={2}>
                        <Button variant='contained' color='error' sx={{
                            textTransform: 'uppercase',
                            borderRadius: '23px',
                            paddingX: '48px',
                            pt: '10px',
                            pb: '8px',
                            fontFamily: 'ubuntu',
                        }}>submit</Button>
                        <Button variant='outlined' color='error' sx={{
                            textTransform: 'uppercase',
                            borderRadius: '23px',
                            paddingX: '48px',
                            pt: '10px',
                            pb: '8px',
                            color: '#092133',
                            fontFamily: 'ubuntu',
                        }} onClick={handleShow}>cancel</Button>
                    </Stack>
                </Box>
            </Stack>
        </Box >
    )
}

export default RaiseTicket
