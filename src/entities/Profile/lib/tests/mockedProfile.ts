import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';

export const mockedProfileData = {
    first: 'Denis',
    lastname: 'Sarzhan',
    age: 18,
    city: 'Donetsk',
    username: 'neospectrum',
    country: Country.Ukraine,
    currency: Currency.RUB,
    avatar,
    id: '1',
};
