import { InfoIcon, WarningIcon } from '@/icons';
import { Icon } from "@/icons/icon.type";
import { Size } from '@/lib/types';
import { AlertType } from "@/lib/types/color.enum";
import { CheckIcon } from './../icons/check-icon.component';
import { ErrorIcon } from './../icons/error-icon.component';

export const iconMapper: Record<AlertType, Icon> = ({
    success: CheckIcon,
    info: InfoIcon,
    warning: WarningIcon,
    error: ErrorIcon,
})

export const iconSizeMapper: Record<Size, number> = {
    small: 24,
    normal: 32,
    large: 48,
}