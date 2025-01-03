const babelJest = require('babel-jest').default;

module.exports = {
    process(sourceText, sourcePath, options) {
        const transformer = babelJest.createTransformer({
            babelrc: false,
            configFile: false,
            plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-transform-class-properties', { loose: true }],
                ['@babel/plugin-transform-private-methods', { loose: true }],
                ['@babel/plugin-transform-private-property-in-object', { loose: true }],
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-transform-object-rest-spread',
                '@babel/plugin-transform-export-namespace-from',
                '@babel/plugin-syntax-dynamic-import',
                ['@babel/plugin-transform-unicode-property-regex', { useUnicodeFlag: false }],
                '@babel/plugin-transform-optional-chaining',
                '@babel/plugin-transform-nullish-coalescing-operator',
            ],
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        });
        return transformer.process(sourceText, sourcePath, {
            ...options,
            config: options,
        });
    },
};
