import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch as useAppDispatch } from '../../../../redux/store'

export default function CustomerLeFilter({ id, filterData, filterAction, columns, data,idForSearch,onChangeForSearch,sortDataAscending,sortDataDescending, indexNumber, clearFilter}: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useAppDispatch();
    const handelFilter = (value: any, event: any) => {
        dispatch(filterAction(filterData?.element, value, event.target.checked))
    }

    return (
        <div className='customer-le-menu'>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                startIcon={<UnfoldMoreIcon />}
            >
            </Button>
            {/* <IconButton id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} aria-label="unfold more" disabled color="primary">
                <UnfoldMoreIcon />
            </IconButton> */}
            <Menu
                id="basic-menu-customerle"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {indexNumber == 5 ? 
                (<><MenuItem><input type='search' placeholder='Currency' className='inside_search' /></MenuItem>
                <MenuItem>
                {filterData?.values && filterData.values.map((w: any, i: any) => {
                        return <MenuItem className='clkIgnr' key={`eleCheck-${w}-${i}`}>
                                <input id='status-check-box' onChange={handelFilter.bind(null, w)} className='clkIgnr check-Box status-check-box' type="checkbox" />
                                <span className='clkIgnr span-label'>{w}</span>
                        </MenuItem>
                    })}
                </MenuItem></>):""}
                <MenuItem><input id={idForSearch} onChange={onChangeForSearch} placeholder={'Search'} className='inside_search' /></MenuItem>
                {indexNumber !== 4 ? (<><MenuItem onClick={sortDataAscending} ><ArrowUpwardRoundedIcon />Sorting Ascending (A-Z)</MenuItem><MenuItem onClick={sortDataDescending} ><ArrowDownwardRoundedIcon />Sorting Descending (Z-A)</MenuItem></>): filterData?.values && filterData.values.map((w: any, i: any) => {
                        return <MenuItem className='clkIgnr' key={`eleCheck-${w}-${i}`}>
                                <input id='status-check-box' onChange={handelFilter.bind(null, w)} className='clkIgnr check-Box status-check-box' type="checkbox" />
                                <span className='clkIgnr span-label'>{w}</span>
                        </MenuItem>
                    })}
                    <MenuItem onClick={clearFilter}>CLEAR</MenuItem>
            </Menu>
        </div>
    );
}
