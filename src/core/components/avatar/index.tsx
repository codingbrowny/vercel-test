import { Avatar } from '@mui/material';
import React from 'react'

const UserAvatar = ({src}: {src:string}) => {
  return (
    <Avatar
      alt="Remy Sharp"
      src={src}
    />
  );
}

export default UserAvatar