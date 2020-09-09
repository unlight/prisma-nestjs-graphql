/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
    mutator: 'typescript',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress'],
    testRunner: 'mocha',
    transpilers: [],
    testFramework: 'perTest',
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    files: ['src/**/*.ts', 'package.json'],
    mutate: [
        'src/*.ts',
        '!src/**/*.spec.ts',
        '!src/**/testing/**',
        '!src/**/@generated/**',
        '!src/**/example/**',
    ],
    mochaOptions: {
        spec: ['src/**/*.spec.ts'],
        timeout: 8000,
        require: ['ts-node/register/transpile-only'],
    },
};
