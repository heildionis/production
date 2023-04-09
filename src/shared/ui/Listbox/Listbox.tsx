import { FC, Fragment, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox as HeadlessListbox } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Listbox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

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

const mapDirection: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};

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

    const optionClasses = [mapDirection[direction]];

    return (
        <HStack gap='4'>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <HeadlessListbox
                disabled={readonly}
                as='div'
                className={classNames(cls.Listbox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HeadlessListbox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HeadlessListbox.Button>
                <HeadlessListbox.Options className={classNames(cls.options, {}, optionClasses)}>
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
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
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
