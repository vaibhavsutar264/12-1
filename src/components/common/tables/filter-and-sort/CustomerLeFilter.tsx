import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

export default function CustomerLeFilter({ idForSearch, onChangeForSearch, sortDataAscending, sortDataDescending, headTitle }: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ position: "relative", top: 0, zIndex: 100, }} className='customer-le-menu'>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                CustomerLeFilter{headTitle}
            </Button>
            <Menu
                id="basic-menu-customerle"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem><input id={idForSearch} onChange={onChangeForSearch} placeholder={'Search'} className='inside_search' /></MenuItem>
                <MenuItem onClick={sortDataAscending} ><ArrowUpwardRoundedIcon />Sorting Ascending (A-Z)</MenuItem>
                <MenuItem onClick={sortDataDescending} ><ArrowDownwardRoundedIcon />Sorting Descending (Z-A)</MenuItem>
                <MenuItem>CLEAR</MenuItem>
            </Menu>
        </div>
    );
}
