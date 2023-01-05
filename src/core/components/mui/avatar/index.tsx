

// ** React Imports
import { forwardRef,ReactNode, ForwardRefRenderFunction} from 'react';

// ** MUI Imports
import MuiAvatar from '@mui/material/Avatar';
import { lighten, useTheme } from '@mui/material/styles';

// ** Hooks Imports
import { useBgColor } from '../../../hooks/useBgColor';

const Avatar = forwardRef((props, ref:unknown) => {
  // ** Props
//   @ts-ignore
  const { sx, src, skin, color } = props as ReactNode;

  // ** Hook
  const theme = useTheme();
  const bgColors = useBgColor();

  const getAvatarStyles = (skin: string, skinColor: string) => {
    let avatarStyles: {
        // ** React Imports
        color: any; backgroundColor: string; skin?: string;
    };
    if (skin === 'light') {
      avatarStyles = { ...bgColors[`${skinColor}Light`] };
    } else if (skin === 'light-static') {
      avatarStyles = {
        color: bgColors[`${skinColor}Light`].color,
        backgroundColor: lighten(theme.palette[skinColor].main, 0.88)
      };
    } else {
      avatarStyles = { ...bgColors[`${skinColor}Filled`] };
    }

    return avatarStyles;
  };

  const colors = {
    primary: getAvatarStyles(skin, 'primary'),
    secondary: getAvatarStyles(skin, 'secondary'),
    success: getAvatarStyles(skin, 'success'),
    error: getAvatarStyles(skin, 'error'),
    warning: getAvatarStyles(skin, 'warning'),
    info: getAvatarStyles(skin, 'info')
  };

  const t  = colors
// @ts-ignore
  return <MuiAvatar ref={ref} {...props} sx={!src && skin && color ? Object.assign(colors[color], sx) : sx} />;
});

Avatar.defaultProps = {
  // @ts-ignore
  skin: 'filled',
  color: 'primary'
};

export default Avatar;