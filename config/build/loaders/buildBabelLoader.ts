import webpack from 'webpack';
import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import babelFindTranslations from '../../babel/babelFindTranslations';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps): webpack.RuleSetRule => ({
    test: isTsx ? /\.(tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    'i18next-extract',
                    {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true,
                    },
                ],
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTsx,
                    },
                ],
                '@babel/plugin-transform-runtime',
                isTsx && [
                    babelRemovePropsPlugin,
                    {
                        props: ['data-testid'],
                    },
                ],
                isTsx && [
                    babelFindTranslations,
                ],
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});
