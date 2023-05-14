import { Popover as HPopover } from '@headlessui/react';
import { FC, ReactNode, memo } from 'react';

import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './Popover.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

/**
 * Устарел, используем новые из папки redesigned
 * @deprecated
 */
export const Popover: FC<PopoverProps> = memo((props: PopoverProps) => {
    const { className, direction = 'bottom left', trigger, children } = props;

    const panelClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button as='div' className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                unmount={false}
                className={classNames(cls.panel, {}, panelClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
