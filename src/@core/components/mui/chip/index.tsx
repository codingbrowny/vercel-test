// ** MUI Imports
import { SxProps, Theme } from '@mui/material';
import MuiChip, { ChipClasses } from '@mui/material/Chip';
import { CommonProps } from '@mui/material/OverridableComponent';
import { ElementType, ReactElement, JSXElementConstructor, ReactNode } from 'react';

// ** Hooks Imports
import { useBgColor } from '../../../hooks/useBgColor';

const Chip = (props: JSX.IntrinsicAttributes & { component: ElementType<any>; } & { avatar?: ReactElement<any, string | JSXElementConstructor<any>>; children?: null; classes?: Partial<ChipClasses>; clickable?: boolean; color?: "default" | "primary" | "secondary" | "success" | "error" | "warning" | "info"; deleteIcon?: ReactElement<any, string | JSXElementConstructor<any>>; disabled?: boolean; icon?: ReactElement<any, string | JSXElementConstructor<any>>; label?: ReactNode; onDelete?: (event: any) => void; size?: "small" | "medium"; sx?: SxProps<Theme>; variant?: "filled" | "outlined"; } & CommonProps & Omit<any, "sx" | "color" | keyof CommonProps | "avatar" | "children" | "clickable" | "deleteIcon" | "disabled" | "icon" | "label" | "onDelete" | "size" | "variant">) => {
  // ** Props
  const { sx, skin, color } = props;

  // ** Hook
  const bgColors = useBgColor();

  const colors = {
    primary: { ...bgColors.primaryLight },
    secondary: { ...bgColors.secondaryLight },
    success: { ...bgColors.successLight },
    error: { ...bgColors.errorLight },
    warning: { ...bgColors.warningLight },
    info: { ...bgColors.infoLight }
  };

  return <MuiChip {...props} variant='filled' sx={skin === 'light' && color ? Object.assign(colors[color], sx) : sx} />;
};

export default Chip;