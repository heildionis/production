import webpack from 'webpack';

export const buildSvgLoader = (): webpack.RuleSetRule => ({
    test: /\.svg$/,
    use: [{
        loader: '@svgr/webpack',
        options: {
            icon: true,
            svgoConfig: {
                plugins: [
                    {
                        name: 'convertColors',
                        params: {
                            currentColor: true
                        }
                    }
                ]
            }
        }
    }],
    exclude: /node_modules/,
});
