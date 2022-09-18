const path = require('path');

module.exports = {
    framework: '@storybook/react',
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: 'storybook-builder-vite',
    },
    features: {
        storyStoreV7: true,
    },
    async viteFinal(config) {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    '@': path.resolve(__dirname, "../src"),
                },
            },
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: `@import "@/theme/mixins";`
                    },
                },
            },
        };
    },
};