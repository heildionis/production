import {
    FC,
    Fragment,
    ReactNode,
    memo,
} from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const Dropdown: FC<DropdownProps> = memo((props: DropdownProps) => {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as='div' className={classNames(popupCls.popup, {}, [className])}>
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            className={classNames(cls.item, { [popupCls.active]: active })}
                            onClick={item?.onClick}
                            type='button'
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item?.disabled}
                                key={index}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item?.disabled}
                            key={index}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
