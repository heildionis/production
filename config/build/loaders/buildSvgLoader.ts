import webpack from 'webpack';

export const buildSvgLoader = (): webpack.RuleSetRule => {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
}