import React, { useState } from 'react'
import Download from '../../../assets/images/svg/download.svg';
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

import { useSelector } from '../../../redux/store'
import { dataTables } from '../../../utils/constants'
import { isAbsolute } from 'path'
import AddIcon from '@mui/icons-material/Add';
import ModalTicketError from '../../modals/ModalTicketError';

const RaiseTicket = ({ handleShow, showIt }: any) => {
    const [showError, setShowError] = useState(false)
    const handleSubmitTicket =()=>{
        try {
            setShowError(true)
        } catch (error) {
            setShowError(true)
        }
    }

    return (
        <>
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
            zIndex: 1000,
            overflowY: 'auto',
            transition: 'transform 350ms 0ms ease-in',
            transform: `translateX(${showIt ? 0 : 100}%)`,
        }} className='raise-ticket'>
            <CloseIcon onClick={handleShow} sx={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                '&:hover': {
                    cursor: 'pointer',
                }
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
                }} className='raise-ticket--typography'>Raise a Ticket</Typography>

                <Typography variant='h6' color='#73768A' component='h2' sx={{
                    maxWidth: 'unset',
                    textAlign: 'left',
                    textTransform: 'capitalize',
                    color: '#73768A',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontFamily: 'ubuntu',
                }} className='raise-ticket--typography'>invoice number</Typography>
                <Typography variant='h6' component='h3' sx={{
                    maxWidth: 'unset',
                    textAlign: 'left',
                    mb: '32px',
                    color: '#000000',
                    fontSize: '22px',
                    lineHeight: '25px',
                    fontWeight: 700,
                    fontFamily: 'ubuntu',
                }} className='raise-ticket--typography'>AM2398756710</Typography>

                {/* First form starts here */}
                <Box
                    component="form"
                    className='raise-ticket-input'
                    sx={{
                        '& > :not(style)': { m: 1, ml: 0, width: '25ch' },
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& label': {
                            top: '12px',
                        },
                        '& label:not(.MuiFormLabel-filled, .MuiInputLabel-shrink)': {
                            top: '-3px',
                        },
                        '& legend': {
                            display: 'none',
                        }
                    }} noValidate autoComplete="off"
                >
                    <TextField
                            className=''
                            label='service ref'
                            variant='outlined'
                            type="text"
                            sx={{
                                borderRadius: '10px !important',
                                flexBasis: '40%',
                                textTransform: 'capitalize',
                            }}
                        />
                    <TextField
                            className=''
                            label='dispute amount($)'
                            variant='outlined'
                            type="text"
                            helperText="Amount should be less than 50$"
                            sx={{
                                borderRadius: '10px !important',
                                flexBasis: '40%',
                                textTransform: 'capitalize',
                            }}
                        />
                    {/* <FormControl fullWidth
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
                    </FormControl> */}

                    {/* new select 1 */}
                    <Box id="select-entity-form"
                            className=''
                            sx={{
                                flexBasis: '45%',
                                minWidth: '110px',
                                '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                {
                                    top: '1px',
                                    height: 'min-content',
                                    backgroundColor: '#fff !important',
                                },
                                '& [role="button"]': {
                                    color: '#222',
                                    textTransform: 'capitalize',
                                    fontWeight: 400,
                                },
                                '& label': {
                                    top: '12px',
                                    // top: LegalEntity.length > 1 ? '1px' : '-11px',
                                    height: 'min-content',
                                    backgroundColor: '#fff !important',
                                },
                            }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Issue Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={communication}
                                    value='issuetype2'
                                    label="Issue Type"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value='issuetype1'>Issue Type1</MenuItem>
                                    <MenuItem value='issuetype2'>Issue Type2</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>


                    {/* new select 2 */}


                    {/* <FormControl fullWidth
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
                    </FormControl> */}


                    <Box id="select-entity-form"
                            className=''
                            sx={{
                                flexBasis: '45%',
                                minWidth: '110px',
                                '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                                {
                                    top: '1px',
                                    height: 'min-content',
                                    backgroundColor: '#fff !important',
                                },
                                '& [role="button"]': {
                                    color: '#222',
                                    textTransform: 'capitalize',
                                    fontWeight: 400,
                                },
                                '& label': {
                                    top: '12px',
                                    // top: LegalEntity.length > 1 ? '1px' : '-11px',
                                    height: 'min-content',
                                    backgroundColor: '#fff !important',
                                },
                            }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sub Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value='subtype1'
                                    label="Sub Type"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value='subtype1'>Sub Type1</MenuItem>
                                    <MenuItem value='subtype2'>Sub Type2</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
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
                            }} component='span' className='attachment'><img src={Download} alt='pdf icon' />Document 1.PDF</Box>
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
                        }} className='raise-ticket--typography'>Contact Person</Typography>
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
                        '& label': {
                            top: '12px',
                        },
                        '& label:not(.MuiFormLabel-filled, .MuiInputLabel-shrink)': {
                            top: '-3px',
                        },
                        '& legend': {
                            display: 'none',
                        }
                    }} noValidate autoComplete="off"
                >
                    <TextField
                            className=''
                            label='contact person'
                            variant='outlined'
                            type="text"
                            sx={{
                                borderRadius: '10px !important',
                                flexBasis: '40%',
                                textTransform: 'capitalize',
                            }}
                        />
                    <TextField
                            className=''
                            label='mobile number'
                            variant='outlined'
                            type="text"
                            sx={{
                                borderRadius: '10px !important',
                                flexBasis: '40%',
                                textTransform: 'capitalize',
                            }}
                        />
                    <TextField
                            className=''
                            label='email'
                            variant='outlined'
                            type="text"
                            sx={{
                                borderRadius: '10px !important',
                                flexBasis: '40%',
                                textTransform: 'capitalize',
                            }}
                        />
                    <TextField
                            className=''
                            label='contact number'
                            variant='outlined'
                            type="text"
                            sx={{
                                borderRadius: '10px !important',
                                flexBasis: '40%',
                                textTransform: 'capitalize',
                            }}
                        />
                    <TextField
                            className=''
                            label='mobile number'
                            variant='outlined'
                            type="text"
                            sx={{
                                borderRadius: '10px !important',
                                flexBasis: '40%',
                                textTransform: 'capitalize',
                            }}
                        />
                    <TextField
                            className=''
                            label='email'
                            variant='outlined'
                            type="text"
                            sx={{
                                borderRadius: '10px !important',
                                flexBasis: '40%',
                                textTransform: 'capitalize',
                            }}
                        />
                </Box>

                <Box>
                    <Stack direction='row' spacing={2}>
                        <Button variant='contained' color='error' onClick={handleSubmitTicket} sx={{
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
            {showError ? <ModalTicketError /> : ""}
            </>
    )
}

export default RaiseTicket
