import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Divider } from '@mui/material';
import { useDispatch as useAppDispatch } from '../../../../redux/store'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

export default function StatusFilter({ id, filterData, filterAction, columns, data,idForSearch,onChangeForSearch,clearFilter }: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log(filterData)
    // const { values } = filterData && filterData;
    const dispatch = useAppDispatch();
    const handelFilter = (value: any, event: any) => {
        dispatch(filterAction(filterData?.element, value, event.target.checked))
    }
    // const clearFilter2 = (value: any, event: any) => {
    //     dispatch(filterAction(filterData?.element, value, event.target.unChecked))
    // }


    const clearFilterMasterData = () => {
        const inputs = document.getElementById('status-check-box') as HTMLInputElement;
        inputs.checked = false;
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
            <Menu
                id="basic-menu-status"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem><input id={idForSearch} onChange={onChangeForSearch} placeholder={'Search'} className='inside_search' /></MenuItem>
                    {filterData?.values && filterData.values.map((w: any, i: any) => {
                        return <MenuItem className='clkIgnr' key={`eleCheck-${w}-${i}`}>
                                <input id='status-check-box' onChange={handelFilter.bind(null, w)} className='clkIgnr check-Box status-check-box' type="checkbox" />
                                <span className='clkIgnr span-label'>{w}</span>
                        </MenuItem>
                    })}
            <MenuItem onClick={clearFilterMasterData}>CLEAR</MenuItem>
            </Menu>
        </div>
    );
}
