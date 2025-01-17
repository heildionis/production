import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify='center'
                fullWidth
                className={classNames(
                    cls.ProfileCard,
                    { [cls.loading]: true },
                    [className]
                )}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify='center'
                fullWidth
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            gap='16'
            className={classNames(cls.ProfileCard, mods, [className])}
            fullWidth
        >
            {data?.avatar && (
                <HStack
                    justify='center'
                    fullWidth
                    className={cls.avatarWrapper}
                >
                    <Avatar size={250} src={data?.avatar} alt='' />
                </HStack>
            )}
            <Input
                className={cls.input}
                value={data?.first}
                placeholder={t('Ваше имя')}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid='ProfileCard.firstname'
            />
            <Input
                className={cls.input}
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid='ProfileCard.lastname'
            />
            <Input
                className={cls.input}
                value={data?.age}
                placeholder={t('Ваш возраст')}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid='ProfileCard.age'
            />
            <Input
                className={cls.input}
                value={data?.city}
                placeholder={t('Город')}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid='ProfileCard.city'
            />
            <Input
                className={cls.input}
                value={data?.username}
                placeholder={t('Имя пользователя')}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid='ProfileCard.username'
            />
            <Input
                className={cls.input}
                value={data?.avatar}
                placeholder={t('Аватар')}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid='avatar'
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
                data-testid='ProfileCard.currency'
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
                data-testid='ProfileCard.country'
            />
        </VStack>
    );
};
