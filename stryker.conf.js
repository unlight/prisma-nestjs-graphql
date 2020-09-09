/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
    mutator: 'typescript',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress'],
    testRunner: 'mocha',
    transpilers: ['typescript'],
    testFramework: 'mocha',
    coverageAnalysis: 'perTest',
    tsconfigFile: 'tsconfig.json',
    files: ['src/**/*.ts', 'package.json'],
    mutate: [
        'src/feature-name.ts',
        '!src/**/*.spec.ts',
        '!src/**/testing/**',
        '!src/**/@generated/**',
        '!src/**/example/**',
    ],
    mochaOptions: {
        files: ['src/**/*.spec.ts'],
        timeout: 8000,
        require: ['ts-node/register/transpile-only'],
    },
};
