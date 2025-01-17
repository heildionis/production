import { Listbox as HeadlessListbox } from '@headlessui/react';
import { FC, Fragment, ReactNode, memo } from 'react';

import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './Listbox.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

export interface ListBoItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    items?: ListBoItem[];
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

/**
 * Устарел, используем новые из папки redesigned
 * @deprecated
 */
export const Listbox: FC<ListBoxProps> = memo((props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom left',
        label,
    } = props;

    const optionClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap='4'>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <HeadlessListbox
                disabled={readonly}
                as='div'
                className={classNames(cls.Listbox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
            >
                <HeadlessListbox.Button className={cls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HeadlessListbox.Button>
                <HeadlessListbox.Options
                    className={classNames(cls.options, {}, optionClasses)}
                >
                    {items?.map((item) => (
                        <HeadlessListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HeadlessListbox.Option>
                    ))}
                </HeadlessListbox.Options>
            </HeadlessListbox>
        </HStack>
    );
});
