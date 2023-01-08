import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Divider } from '@mui/material';


export default function InvoiceAmtFilter() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ position: "relative", top: 0, zIndex: 100, }}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                InvoiceAmtFilter
            </Button>
            <Menu
                id="basic-menu-amt"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem><input type='search' placeholder='Currency' className='inside_search' /></MenuItem>
                <MenuItem>
                    <Button sx={{ color: '#717171', }} variant="text" startIcon={<DeleteIcon />}>
                        INR
                    </Button>
                    <Button sx={{ color: '#717171', }} variant="text" startIcon={<SendIcon />}>
                        USD
                    </Button>
                </MenuItem>
                <MenuItem><input type='search' placeholder='Amount' className='inside_search' /></MenuItem>
                <Divider />
                <MenuItem><ArrowUpwardRoundedIcon />Sorting Ascending (A-Z)</MenuItem>
                <MenuItem><ArrowDownwardRoundedIcon />Sorting Descending (Z-A)</MenuItem>
                <MenuItem>CLEAR</MenuItem>
            </Menu>
        </div>
    );
}
