import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/service/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(
    ({ className, onSuccess }: LoginFormProps) => {
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const username = useSelector(getLoginUsername);
        const password = useSelector(getLoginPassword);
        const isLoading = useSelector(getLoginIsLoading);
        const error = useSelector(getLoginError);

        const onChangeUsername = useCallback(
            (value: string) => {
                dispatch(loginActions.setUsername(value));
            },
            [dispatch]
        );

        const onChangePassword = useCallback(
            (value: string) => {
                dispatch(loginActions.setPassword(value));
            },
            [dispatch]
        );

        const onLoginClick = useCallback(async () => {
            const result = await dispatch(
                loginByUsername({ username, password })
            );
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess();
            }
        }, [onSuccess, dispatch, password, username]);

        return (
            <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
                <div className={classNames(cls.LoginForm, {}, [className])}>
                    <Text title={t('Форма авторизации')} />
                    {error && (
                        <Text
                            text={t('Некорректное имя пользователя или пароль')}
                            theme={TextTheme.ERROR}
                        />
                    )}
                    <Input
                        autoFocus
                        type='text'
                        placeholder={t('Введите username')}
                        className={cls.input}
                        onChange={onChangeUsername}
                        value={username}
                    />
                    <Input
                        type='text'
                        placeholder={t('Введите пароль')}
                        className={cls.input}
                        onChange={onChangePassword}
                        value={password}
                    />
                    <Button
                        onClick={onLoginClick}
                        theme={ButtonTheme.OUTLINE}
                        className={cls.loginBtn}
                        disabled={isLoading}
                    >
                        {t('Войти')}
                    </Button>
                </div>
            </DynamicModuleLoader>
        );
    }
);

export default LoginForm;
