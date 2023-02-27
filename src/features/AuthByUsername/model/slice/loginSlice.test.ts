import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { LoginSchema } from 'features/AuthByUsername';
import { DeepPartial } from '@reduxjs/toolkit';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('username'),
        )).toEqual({ username: 'username' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {};
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('password'),
        )).toEqual({ password: 'password' });
    });
});
