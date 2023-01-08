import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Divider } from '@mui/material';

export default function StatusFilter() {
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
                StatusFilter
            </Button>
            <Menu
                id="basic-menu-status"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem><CheckBoxOutlineBlankIcon />Select All</MenuItem>
                <Divider />
                <MenuItem><CheckBoxOutlineBlankIcon />Overdue</MenuItem>
                <MenuItem><CheckBoxOutlineBlankIcon />Unpaid</MenuItem>
                <MenuItem><CheckBoxOutlineBlankIcon />Paid</MenuItem>
                <MenuItem>
                    <div>
                        CLEAR
                    </div>
                    <div>
                        APPLY
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
