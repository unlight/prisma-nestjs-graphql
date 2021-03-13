## [10.1.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v10.0.1...v10.1.0) (2021-03-13)


### Features

* Allow to configure path to `tsconfig.json` ([ead4411](https://github.com/unlight/nestjs-graphql-prisma/commit/ead44117565e6654128b8209adb3046b1134ae82))
* Validate `outputFilePattern` ([3240a73](https://github.com/unlight/nestjs-graphql-prisma/commit/3240a7344033a943b9b6433b24a8c779fe84b9f7))


### Bug Fixes

* Save files without intermediate layer ([4a07bea](https://github.com/unlight/nestjs-graphql-prisma/commit/4a07bea7d9657549f51b7a09910028e1815dbecb))


### Performance Improvements

* Generation of inputs/outputs ([4604160](https://github.com/unlight/nestjs-graphql-prisma/commit/46041608bbd7e16bae5b2464890c50ceccdaf5c6))

## [10.0.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v10.0.0...v10.0.1) (2021-03-04)


### Bug Fixes

* BigInt property type in lower ([19ace4e](https://github.com/unlight/nestjs-graphql-prisma/commit/19ace4e4342e6e60f42f863b171fc4c2953d9a16))
* Conflict with models ending with `Output` ([a08d4c4](https://github.com/unlight/nestjs-graphql-prisma/commit/a08d4c4f782e866cbb555308f8010c050baea833)), closes [#10](https://github.com/unlight/nestjs-graphql-prisma/issues/10)

# [10.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v9.0.0...v10.0.0) (2021-03-01)


### Bug Fixes

* Generate correct json graphql type ([c6d8d46](https://github.com/unlight/nestjs-graphql-prisma/commit/c6d8d46e3cb1627f07a33f2989272911283ddc01))
* Json type changed to `Record<string, any>` ([2877be7](https://github.com/unlight/nestjs-graphql-prisma/commit/2877be7d97827215f984c95301815a905cc015c6))
* Renamed config option ([d989cfe](https://github.com/unlight/nestjs-graphql-prisma/commit/d989cfeba9a8daac2ce21e0a3e690c5c24d42e3c))


* refactor!: Renamed token in `outputFilePattern` template ([95d4629](https://github.com/unlight/nestjs-graphql-prisma/commit/95d4629e1ae887cb962580aa4ab3f2d300003fe8))
* refactor!: Removed `renameZooTypes` config option ([71bfb68](https://github.com/unlight/nestjs-graphql-prisma/commit/71bfb68e1d4c86ba25148e1f5dabd80b365db0c0))
* chore!: Renamed config option `atomicNumberOperation` to `noAtomicOperations` ([6078eb9](https://github.com/unlight/nestjs-graphql-prisma/commit/6078eb9187ef134fd8e711d5a0dd6430d5f5cee0))


### Code Refactoring

* Combine scalar filters ([789cfeb](https://github.com/unlight/nestjs-graphql-prisma/commit/789cfebe970de7e6cdfca67105e37cdea4464d08))


### Features

* Ability to hide field in schema ([a222955](https://github.com/unlight/nestjs-graphql-prisma/commit/a222955dac6fb85dce96a62c3661997a979ee2dd)), closes [#8](https://github.com/unlight/nestjs-graphql-prisma/issues/8)


### Performance Improvements

* Slightly improved ([fd88dc9](https://github.com/unlight/nestjs-graphql-prisma/commit/fd88dc965568ba511da80acb098e5a567bfb25e3))


### BREAKING CHANGES

* Renamed token `{feature}` to `{model}` in `outputFilePattern` template pattern
* Removed `renameZooTypes` config option
* Config option `combineScalarFilters` is false by default
* Made all options which mutates/renames types are `false`
* Inverted config option `atomicNumberOperations` to `noAtomicNumberOperations`
Replace `atomicNumberOperations = false` by `noAtomicNumberOperations = true`

# [9.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v8.0.0...v9.0.0) (2021-02-06)


### Features

* New option rename zoo types ([04cb5af](https://github.com/unlight/nestjs-graphql-prisma/commit/04cb5af95184ef30606ac480686106db585e90a0))


### BREAKING CHANGES

* Adapt generator to Prisma 2.16

# [8.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v7.2.0...v8.0.0) (2021-01-27)


### Bug Fixes

* Typescript property type now same as graphql type ([151d380](https://github.com/unlight/nestjs-graphql-prisma/commit/151d38062cce4001b389156cae55430be34011f9))


### BREAKING CHANGES

* Typescript property type now same as graphql type

# [7.2.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v7.1.0...v7.2.0) (2021-01-22)


### Features

* Adapted generator to Prisma 2.15 ([77b87a6](https://github.com/unlight/nestjs-graphql-prisma/commit/77b87a6adf9ec16a89573ad63619b1ed0a3a8f4d))

# [7.1.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v7.0.0...v7.1.0) (2021-01-07)


### Features

* Adapted generator to Prisma 2.14 ([26a23c4](https://github.com/unlight/nestjs-graphql-prisma/commit/26a23c45c62a08724e866b15b2c93aea70b094c3))
* Export all classes from one file ([92ca651](https://github.com/unlight/nestjs-graphql-prisma/commit/92ca651ea931e406e954eb419bb4ec1458fb57f1)), closes [#5](https://github.com/unlight/nestjs-graphql-prisma/issues/5)

# [7.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v6.0.2...v7.0.0) (2021-01-04)


### Bug Fixes

* Type mismatch between prisma types ([b5587cd](https://github.com/unlight/nestjs-graphql-prisma/commit/b5587cd5c70d3b83fe75734ffd0e8b47125ea50a)), closes [#4](https://github.com/unlight/nestjs-graphql-prisma/issues/4)


### BREAKING CHANGES

* Generated types tries to be compatible with Prisma types,
nullability (optional/required) changed for input types

## [6.0.2](https://github.com/unlight/nestjs-graphql-prisma/compare/v6.0.1...v6.0.2) (2020-12-23)


### Bug Fixes

* Custom field types array ([ead56a4](https://github.com/unlight/nestjs-graphql-prisma/commit/ead56a4eb93e1678f87404c05c32fad5f2906f6f))
* Generate another commented class ([cc08dee](https://github.com/unlight/nestjs-graphql-prisma/commit/cc08deeafde6a7d7540481f5812ffbdbf25bf979))

## [6.0.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v6.0.0...v6.0.1) (2020-12-12)


### Bug Fixes

* Remove unused imports in generated files ([96ef374](https://github.com/unlight/nestjs-graphql-prisma/commit/96ef37458dab58205e5928c72f9ef43ee60aeed8))

# [6.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v5.1.1...v6.0.0) (2020-12-12)


### Bug Fixes

* **prisma:** Adapt generator to Prisma v2.13 ([d1ae8b1](https://github.com/unlight/nestjs-graphql-prisma/commit/d1ae8b1dbb097bbe19b8a8e1ca5dccf1a3549d61))


### BREAKING CHANGES

* **prisma:** Adapt generator to Prisma v2.13

## [5.1.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v5.1.0...v5.1.1) (2020-12-07)


### Bug Fixes

* Remove duplicated input types ([53d5721](https://github.com/unlight/nestjs-graphql-prisma/commit/53d57219883f0e0c7e606f683aa63d70812221b0))

# [5.1.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v5.0.1...v5.1.0) (2020-12-03)


### Features

* Generate commented class if re-export found ([dc3e268](https://github.com/unlight/nestjs-graphql-prisma/commit/dc3e268f90ef2e1436834d35b6cb45e1d87d7527))

## [5.0.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v5.0.0...v5.0.1) (2020-12-01)


### Bug Fixes

* Scalar filters compatibility ([02acba8](https://github.com/unlight/nestjs-graphql-prisma/commit/02acba8eb9be183aa6ebcbe191cd0037aabbc53f))

# [5.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v4.0.1...v5.0.0) (2020-12-01)


### Bug Fixes

* Switched to replace mode ([d04c3ef](https://github.com/unlight/nestjs-graphql-prisma/commit/d04c3ef6102969e3f5da8920be66e4378242ad22))


### BREAKING CHANGES

* Switched to replace mode generation of files, all extra field which are not exists in model will be
removed

## [4.0.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v4.0.0...v4.0.1) (2020-11-27)


### Bug Fixes

* Do not generate undefined properties ([c7127a4](https://github.com/unlight/nestjs-graphql-prisma/commit/c7127a4a97d98d245dd214507c7bc2486d0edba4))


### Performance Improvements

* Removed unused code ([da6dbc0](https://github.com/unlight/nestjs-graphql-prisma/commit/da6dbc0a9f5373072c203c42c755afe10401ec5e))

# [4.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v3.0.0...v4.0.0) (2020-11-27)


### Bug Fixes

* Generator options: dasherizedName renamed to name ([c537340](https://github.com/unlight/nestjs-graphql-prisma/commit/c537340632477165692389fe47028166095d5a23))


### Features

* New token `{plural.type}` for outputFilePattern generator options ([51cc938](https://github.com/unlight/nestjs-graphql-prisma/commit/51cc93872a73538c9aa9fb5a14a37764575f5729))


### BREAKING CHANGES

* Generator options: dasherizedName renamed to name

# [3.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v2.1.0...v3.0.0) (2020-11-26)


### Bug Fixes

* Adapted to prisma 2.12 ([7e0ab3f](https://github.com/unlight/nestjs-graphql-prisma/commit/7e0ab3fc3ca68e8e371816cbd38dfb0b3f3e5da3))


### BREAKING CHANGES

* Adapted to prisma 2.12

# [2.1.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v2.0.2...v2.1.0) (2020-11-20)


### Bug Fixes

* Adapt new native types ([f1ba6bc](https://github.com/unlight/nestjs-graphql-prisma/commit/f1ba6bcd65df22608cde55a2304ed4bf94d94fb9))


### Features

* Custom graphql field mapping ([10fb039](https://github.com/unlight/nestjs-graphql-prisma/commit/10fb039a1a64a6a8dba82eab30a40acc7c703863))
* Custom property mapping ([f8cc54d](https://github.com/unlight/nestjs-graphql-prisma/commit/f8cc54d42a42e44f1b1904646380a08d9729a156))


### Performance Improvements

* Removed unused code ([28f8784](https://github.com/unlight/nestjs-graphql-prisma/commit/28f8784d83fde5aa68cdbc7140058063f32ce17f))

## [2.0.2](https://github.com/unlight/nestjs-graphql-prisma/compare/v2.0.1...v2.0.2) (2020-11-14)


### Bug Fixes

* Enum atomic operation are not processed ([43a2506](https://github.com/unlight/nestjs-graphql-prisma/commit/43a25067da8deaa76921e90d043280bd6bcbdf6a))

## [2.0.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v2.0.0...v2.0.1) (2020-11-13)


### Bug Fixes

* Missing enum import type with enum filter object ([a5356c3](https://github.com/unlight/nestjs-graphql-prisma/commit/a5356c3a24ea37daddfbaa3f0207c1baf6d152a8)), closes [#3](https://github.com/unlight/nestjs-graphql-prisma/issues/3)

# [2.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.6.0...v2.0.0) (2020-10-04)


### Bug Fixes

* Adapted generator to Prisma 2.8 ([4ac4779](https://github.com/unlight/nestjs-graphql-prisma/commit/4ac47796898a338cd9f557ecb3713b92912a9a35))


### BREAKING CHANGES

* Adapted generator to Prisma 2.8

# [1.6.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.5.0...v1.6.0) (2020-09-08)


### Features

* Generate other output types ([55e5cd5](https://github.com/unlight/nestjs-graphql-prisma/commit/55e5cd5c8172006837a5adf6a63d4b80d37952e7))

# [1.5.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.4.0...v1.5.0) (2020-09-07)


### Features

* Generate args types ([5015de7](https://github.com/unlight/nestjs-graphql-prisma/commit/5015de7e29d2af5b8153304b539fed8c209bbedd))

# [1.4.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.3.1...v1.4.0) (2020-09-04)


### Features

* Option to disable atomic number operations ([3319ff9](https://github.com/unlight/nestjs-graphql-prisma/commit/3319ff9b27b0b9a45aa5f06cbd521e2f7f55a6bd))

## [1.3.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.3.0...v1.3.1) (2020-09-03)


### Bug Fixes

* Loading existing file ([fc19a03](https://github.com/unlight/nestjs-graphql-prisma/commit/fc19a0352c25fd16443055ac5017ddfcb9aaf126))

# [1.3.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.2.0...v1.3.0) (2020-08-30)


### Features

* Generate aggregate input types ([66239bb](https://github.com/unlight/nestjs-graphql-prisma/commit/66239bbc4238aeaea855bdbcec6ed09c523c1e30))

# [1.2.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.1.4...v1.2.0) (2020-08-29)


### Bug Fixes

* Detection property nullable type ([2121885](https://github.com/unlight/nestjs-graphql-prisma/commit/21218858d45b9f847484e33ef07d70ed5568edd6))


### Features

* Combine zoo of nested/nullable filters ([20f965b](https://github.com/unlight/nestjs-graphql-prisma/commit/20f965bace9608f7713f235d734bf2f1bedf068e))

## [1.1.4](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.1.3...v1.1.4) (2020-08-22)


### Bug Fixes

* Generate enumerable filters ([9f35c9a](https://github.com/unlight/nestjs-graphql-prisma/commit/9f35c9adae6ebf51dbc5fcd975d41dfd4393ad35))

## [1.1.3](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.1.2...v1.1.3) (2020-08-21)


### Bug Fixes

* Added new feature split keywords ([e780043](https://github.com/unlight/nestjs-graphql-prisma/commit/e780043efbc34623acf630145248ae821a0a35f5))

## [1.1.2](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.1.1...v1.1.2) (2020-08-16)


### Bug Fixes

* Corrected scalar property type for where type ([b9e5937](https://github.com/unlight/nestjs-graphql-prisma/commit/b9e593723e820dc6c3cd134e2270c0573f19f8b8))

## [1.1.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.1.0...v1.1.1) (2020-08-16)


### Bug Fixes

* Generate distinct related enums with bound feature ([d055e3b](https://github.com/unlight/nestjs-graphql-prisma/commit/d055e3b4d1889c90af0bb12c6377532d71fc70cd))
* Removed unnecessary create enum from input type ([e6774ab](https://github.com/unlight/nestjs-graphql-prisma/commit/e6774ab3b0998eee01d80d129626f8b6c3058e12))

# [1.1.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v1.0.0...v1.1.0) (2020-08-15)


### Features

* Generate JSON scalar type ([82007d7](https://github.com/unlight/nestjs-graphql-prisma/commit/82007d7bbf19db4caa08ca812e960422b767de78))
* Skip write stage for files with no changes ([ecc2fb8](https://github.com/unlight/nestjs-graphql-prisma/commit/ecc2fb88eb91c6be8f27319520b631b9af90d109))

# 1.0.0 (2020-08-10)


### Features

* First release ([340a105](https://github.com/unlight/prisma-nestjs-graphql/commit/340a105a305a97c80cb8a95e1f2fd0545f6aa0cb))
