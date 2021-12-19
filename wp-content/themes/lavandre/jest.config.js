module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    verbose: true,
    collectCoverage: true,
    coverageDirectory: './jest/coverage',
    testPathIgnorePatterns: [
        '(.*).spec.js',
        '(.*)/plugins/editors/(.*)',
        '(.*)vendor/(.*)'
    ],
    transformIgnorePatterns: [
        "/node_modules/",
        "/@lavandre/button/",
        "\\.pnp\\.[^\\\/]+$"
    ],
    automock: false,
    setupFiles: ['<rootDir>/setupJest.js'],
    moduleDirectories: ['node_modules', 'assets'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/mocks/fileMock.js',
        '\\.(css|scss|sass|pcss|less)$': '<rootDir>/mocks/styleMock.js',
        '@lavandre/button/dist/src/lavandre-button': '<rootDir>/mocks/styleMock.js',
        '@lavandre/button/dist/src/LavandreButton': '<rootDir>/mocks/styleMock.js'
    },
    testEnvironment: 'jsdom',
    testMatch: [
        '**/?(*.)+(test).[jt]s?(x)'
    ],
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    transformIgnorePatterns: [
        "node_modules"
    ],
    globals: {
        'ts-jest': {
            babelConfig: true
        },
        "window": {}
    }
};
