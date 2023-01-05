import { Badge, IconButton } from '@mui/material'
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import React from 'react'

const Notifications = () => {
  return (
    <IconButton size='large'>
      <Badge variant='dot' color='primary' sx={{padding: 0}}>
        <NotificationsOutlinedIcon />
      </Badge>
    </IconButton>
  );
}

export default Notifications