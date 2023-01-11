import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Download from '../icons/download'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import {
  downloadBillingInvoice,
  downloadBillingInvoiceCDR,
} from '../../../redux/slices/billingSlice'
import {
  useDispatch as useAppDispatch,
  useSelector,
} from '../../../redux/store'
import useLocales from '../../../hooks/useLocales'
import CheckIcon from '@mui/icons-material/Check';
import Downlaoding from './loader-and-snackbar/Downlaoding'
import Downloaded from './loader-and-snackbar/Downlaoded'
import CachedIcon from '@mui/icons-material/Cached';

export default function DownloadCdr({
  item,
  loading,
  setLoading,
  loadingInvoice,
  setLoadingInvoice,
  completed,
  setCompleted,
  completedInvoice,
  setCompletedInvoice,
  setErrorinDownload,
  setErrorinDownloadInvoice,
  arrayData,
  apiAction,
  apiActionPdf
}: any) {
  const { t } = useLocales()
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [openSnack, SetOpenSnack] = React.useState(false);
  const [openSnackdone, SetOpenSnackdone] = React.useState(false);


  const [SnakData, setSnackData] = React.useState({ type: '', invoice: '', fileURl: '' });
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDownload = async (data: any) => {
    SetOpenSnack(true);
    setSnackData({ type: 'Invoice', invoice: data.id, fileURl: '' })
    dispatch(apiActionPdf(data, (status: any) => {
      SetOpenSnack(false);
      setTimeout(() => {
        if (status == true) {
          // Handle error
        } else {
          setSnackData({ type: 'Invoice', invoice: data.id, fileURl: '' })
          SetOpenSnackdone(true);
        }
      }, 10);
    }));
  }



  const handleDownloadCdr = (data: any) => {
    SetOpenSnack(true);
    setSnackData({ type: 'CDR File', invoice: data.id, fileURl: '' })
    dispatch(apiAction(data, (status: any) => {
      SetOpenSnack(false);
      setTimeout(() => {
        if (status == true) {
          // Handle error
        } else {
          SetOpenSnackdone(true);
        }
      }, 10);
    }))
  }

  return (
    <React.Fragment>
      <Downlaoding open={openSnack} close={SetOpenSnack} SnakData={SnakData} />
      <Downloaded open={openSnackdone} close={SetOpenSnackdone} SnakData={SnakData} />
      {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}> */}
      <Tooltip title="DOWNLOAD">
        <IconButton
          className="download-cdr"
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
          {completed && item.id ? <CheckIcon /> : <Download />}
        </IconButton>
      </Tooltip>
      {/* </Box> */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => handleDownload(item)}>
          {t<string>('invoice')}
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleDownloadCdr(item)}>
          {t<string>('cdr')}
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
