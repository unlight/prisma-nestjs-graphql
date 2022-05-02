### [15.2.5](https://github.com/unlight/nestjs-graphql-prisma/compare/v15.2.4...v15.2.5) (2022-05-02)


### Bug Fixes

* **hide field:** Self relation field ([5cb4311](https://github.com/unlight/nestjs-graphql-prisma/commit/5cb4311c5dc7250d3c133985a6b408a96f80a108)), closes [#103](https://github.com/unlight/nestjs-graphql-prisma/issues/103)

### [15.2.4](https://github.com/unlight/nestjs-graphql-prisma/compare/v15.2.3...v15.2.4) (2022-05-02)


### Bug Fixes

* **mongodb:** Get matching input type from Json ([e16cad0](https://github.com/unlight/nestjs-graphql-prisma/commit/e16cad00a30d1aa7e31a9ef6b0318932c18f6131))

### [15.2.3](https://github.com/unlight/nestjs-graphql-prisma/compare/v15.2.2...v15.2.3) (2022-05-02)


### Bug Fixes

* **mongodb:** Support composite types (behaves like model) ([d505ecb](https://github.com/unlight/nestjs-graphql-prisma/commit/d505ecb49dfc5e442c802503f461a45e8cf97cb8)), closes [#99](https://github.com/unlight/nestjs-graphql-prisma/issues/99)

### [15.2.2](https://github.com/unlight/nestjs-graphql-prisma/compare/v15.2.1...v15.2.2) (2022-04-12)


### Bug Fixes

* **other:** Fail model with single id field in mongodb ([4d19e9a](https://github.com/unlight/nestjs-graphql-prisma/commit/4d19e9a0f3a09a917fedc985e80681cea15e40ef)), closes [#96](https://github.com/unlight/nestjs-graphql-prisma/issues/96)

### [15.2.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v15.2.0...v15.2.1) (2022-04-03)


### Bug Fixes

* `tsConfigFilePath` is ignored ([d98e146](https://github.com/unlight/nestjs-graphql-prisma/commit/d98e1469d497b0f5546caf09c0a0092506471b25)), closes [#88](https://github.com/unlight/nestjs-graphql-prisma/issues/88)

## [15.2.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v15.1.1...v15.2.0) (2022-03-26)


### Features

* Support reexport with custom output pattern ([2786894](https://github.com/unlight/nestjs-graphql-prisma/commit/27868946ada49d2cb72babc54197d4ccb2442dc0))

### [15.1.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v15.1.0...v15.1.1) (2022-03-21)


### Bug Fixes

* Create bin script ([a6c2573](https://github.com/unlight/nestjs-graphql-prisma/commit/a6c257399f8f449ef0707ff1de8dd01588e70172)), closes [#92](https://github.com/unlight/nestjs-graphql-prisma/issues/92)

## [15.1.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v15.0.0...v15.1.0) (2022-03-16)


### Features

* Use Prisma.Decimal typescript type ([0395e5f](https://github.com/unlight/nestjs-graphql-prisma/commit/0395e5f47857800ba7b5d31e28dc99eebc194582))

## [15.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.7.1...v15.0.0) (2022-03-15)


### ⚠ BREAKING CHANGES

* **other:** defaults `input` and `output` in PropertyType to false

### Bug Fixes

* **other:** Makes proptype resolution behave like fieldtype ([850018a](https://github.com/unlight/nestjs-graphql-prisma/commit/850018adf52dc909d935fe2a24b12f48d0a94904))

### [14.7.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.7.0...v14.7.1) (2022-03-12)


### Bug Fixes

* Remove unused classes when both noAtomicOperations and emitSingle enabled ([41ce3c1](https://github.com/unlight/nestjs-graphql-prisma/commit/41ce3c1ddaa276b3c6bce4a50b5083353b276fb8)), closes [#89](https://github.com/unlight/nestjs-graphql-prisma/issues/89)

## [14.7.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.6.2...v14.7.0) (2022-03-08)


### Features

* **configuration:** Allow to map prisma scalars to custom graphql scalars ([59300e1](https://github.com/unlight/nestjs-graphql-prisma/commit/59300e17d36c32d09e1c8a923cb409f95810f048)), closes [#87](https://github.com/unlight/nestjs-graphql-prisma/issues/87)

### [14.6.2](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.6.1...v14.6.2) (2022-02-20)


### Bug Fixes

* Make fields in count output undefinable ([8e3d85c](https://github.com/unlight/nestjs-graphql-prisma/commit/8e3d85c1cd3f9c2453d8c54675f7dca798954d43))

### [14.6.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.6.0...v14.6.1) (2021-11-25)


### Bug Fixes

* **hide field:** Missing import of enum type ([b067142](https://github.com/unlight/nestjs-graphql-prisma/commit/b06714292e6a7ae6b9bb74d18cf591836dc8cf01)), closes [#73](https://github.com/unlight/nestjs-graphql-prisma/issues/73)

## [14.6.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.5.0...v14.6.0) (2021-10-16)


### Features

* **custom decorators:** Allow attach `@Directive()` ([d6faef0](https://github.com/unlight/nestjs-graphql-prisma/commit/d6faef073f33f97b48e99619b737f5324e3e4dd7))

## [14.5.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.4.1...v14.5.0) (2021-10-12)


### Features

* **custom decorators:** Allow apply custom decorator on models ([52f090a](https://github.com/unlight/nestjs-graphql-prisma/commit/52f090a55154bca3b0c9030cf7dff6f1599f6f94)), closes [#63](https://github.com/unlight/nestjs-graphql-prisma/issues/63)

### [14.4.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.4.0...v14.4.1) (2021-10-05)


### Bug Fixes

* Missing import in hidden type ([29e5a8e](https://github.com/unlight/nestjs-graphql-prisma/commit/29e5a8e1cda7dd47308f0b5f0cecef37efb0aa8f)), closes [#62](https://github.com/unlight/nestjs-graphql-prisma/issues/62)

## [14.4.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.3.0...v14.4.0) (2021-09-30)


### Features

* **match:** Allows `match` expressions in `FieldType` and `PropertyType` ([#60](https://github.com/unlight/nestjs-graphql-prisma/issues/60)) ([a9b0e46](https://github.com/unlight/nestjs-graphql-prisma/commit/a9b0e46ceda8a2c6ddaaccf3c8a987a672b91912))

## [14.3.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.2.2...v14.3.0) (2021-09-28)


### Features

* **require single uniq filter:** New `requireSingleFieldsInWhereUniqueInput` generator setting ([7ee73eb](https://github.com/unlight/nestjs-graphql-prisma/commit/7ee73eb69f57a55a6b7244377fabc11bf17005ea)), closes [#58](https://github.com/unlight/nestjs-graphql-prisma/issues/58)

### [14.2.2](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.2.1...v14.2.2) (2021-09-27)


### Bug Fixes

* **compatibility:** Add typescript null type for optional fields in model ([df0b9de](https://github.com/unlight/nestjs-graphql-prisma/commit/df0b9de53a003bc32fbc3ae1471be3681e55a551)), closes [#57](https://github.com/unlight/nestjs-graphql-prisma/issues/57)

### [14.2.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.2.0...v14.2.1) (2021-09-24)


### Bug Fixes

* **custom decorators:** FieldType mapping for output types ([c036a10](https://github.com/unlight/nestjs-graphql-prisma/commit/c036a103f7b16d2a9bcb9a0c36aa7948a4f79c09)), closes [#55](https://github.com/unlight/nestjs-graphql-prisma/issues/55)

## [14.2.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.1.0...v14.2.0) (2021-09-23)


### Features

* **custom decorators:** Abstract and rename type ([eb68ca6](https://github.com/unlight/nestjs-graphql-prisma/commit/eb68ca6288b74cd797d9d0c584b33ddcf540b066)), closes [#40](https://github.com/unlight/nestjs-graphql-prisma/issues/40)
* **custom decorators:** New `decorate` generator setting ([c5e14b7](https://github.com/unlight/nestjs-graphql-prisma/commit/c5e14b7e8e59fffcd57ab5b6dff973cc48b37f14)), closes [#48](https://github.com/unlight/nestjs-graphql-prisma/issues/48)


### Bug Fixes

* Get model name for CompoundUniqueInput ([f44aa85](https://github.com/unlight/nestjs-graphql-prisma/commit/f44aa858a0459e61d1e13f19c0fe3317e6d0d063)), closes [#53](https://github.com/unlight/nestjs-graphql-prisma/issues/53)

### [14.0.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v14.0.0...v14.0.1) (2021-09-07)


### Bug Fixes

* Getting json nullable enum ([d001714](https://github.com/unlight/nestjs-graphql-prisma/commit/d0017146a4543a8178972138fecbdabf58082d92))

## [14.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v13.0.0...v14.0.0) (2021-09-06)


### ⚠ BREAKING CHANGES

* Configuration `useInputType` changed underlying library for pattern matching
https://github.com/axtgr/outmatch, prefix renamed to `match:`

### Code Refactoring

* Replace `matcher` by `outmatch` ([fa7c003](https://github.com/unlight/nestjs-graphql-prisma/commit/fa7c0036b7bd1209261cae3f5f9adbb8dde4f256))

## [13.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v12.2.1...v13.0.0) (2021-08-28)


### ⚠ BREAKING CHANGES

* Removed deprecated setting `types_*`
* Model is regenerating ignoring existing data, any manual changes will be discarded
* Enum is regerating now, any manual changes will be discarded

### Features

* **configuration:** Option to disable ID graphql type ([8474da7](https://github.com/unlight/nestjs-graphql-prisma/commit/8474da7c358d0e48f19c9f9db3093770396f20d7)), closes [#44](https://github.com/unlight/nestjs-graphql-prisma/issues/44)


### Bug Fixes

* Regenerate enum ignoring existing values ([c581bc7](https://github.com/unlight/nestjs-graphql-prisma/commit/c581bc7c376921c012a6a24bf30339e578256044)), closes [#45](https://github.com/unlight/nestjs-graphql-prisma/issues/45)
* Regenerate model ignoring existing data ([62ffd83](https://github.com/unlight/nestjs-graphql-prisma/commit/62ffd83064c543f5285f37742e984b7efd9775b1)), closes [#45](https://github.com/unlight/nestjs-graphql-prisma/issues/45)


### Miscellaneous Chores

* Removed deprecated setting `types_*` ([3491398](https://github.com/unlight/nestjs-graphql-prisma/commit/349139894b087c37b521c6e472c1d34ee4997e45))

### [12.2.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v12.2.0...v12.2.1) (2021-07-23)


### Bug Fixes

* **compatibility:** Make model types compatible from both sides Prisma and GraphQL ([c015f12](https://github.com/unlight/nestjs-graphql-prisma/commit/c015f12307541efdb833d06b4d26a9aadd3925e8)), closes [#41](https://github.com/unlight/nestjs-graphql-prisma/issues/41)
* Get model name from `{Model}AggregateArgs` type ([0703f7e](https://github.com/unlight/nestjs-graphql-prisma/commit/0703f7ecfd546717cd6c7b4517eeace9362089d4))

## [12.2.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v12.1.0...v12.2.0) (2021-07-06)


### Features

* Duplicate comments in jsdoc ([002a055](https://github.com/unlight/nestjs-graphql-prisma/commit/002a0552096c6ffdd8abc9fec8b7e80b9209c288)), closes [#39](https://github.com/unlight/nestjs-graphql-prisma/issues/39)

## [12.1.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v12.0.3...v12.1.0) (2021-07-02)


### Features

* **hide field:** Allow hide field in type matching by pattern ([6c05123](https://github.com/unlight/nestjs-graphql-prisma/commit/6c05123b9454e649c5fe4298d52d57729c3c5453)), closes [#37](https://github.com/unlight/nestjs-graphql-prisma/issues/37)

### [12.0.3](https://github.com/unlight/nestjs-graphql-prisma/compare/v12.0.2...v12.0.3) (2021-06-05)


### Bug Fixes

* **custom decorators:** `FieldType` respect input/output in generator settings ([a075e00](https://github.com/unlight/nestjs-graphql-prisma/commit/a075e0075e9c60530bd3a90edfc0a8c245371b7e)), closes [#34](https://github.com/unlight/nestjs-graphql-prisma/issues/34)

### [12.0.2](https://github.com/unlight/nestjs-graphql-prisma/compare/v12.0.1...v12.0.2) (2021-06-05)


### Bug Fixes

* **other:** Ignore `@HideField()` for output count fields ([ce3eec2](https://github.com/unlight/nestjs-graphql-prisma/commit/ce3eec247c05fb771ea4f39ae1fbd136aa2bd6f4)), closes [#33](https://github.com/unlight/nestjs-graphql-prisma/issues/33)

### [12.0.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v12.0.0...v12.0.1) (2021-05-22)


### Bug Fixes

* Remove empty input types ([20c4f46](https://github.com/unlight/nestjs-graphql-prisma/commit/20c4f463ed736b9f4c73247b06e5921c20332f2d)), closes [#26](https://github.com/unlight/nestjs-graphql-prisma/issues/26)

## [12.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.4.5...v12.0.0) (2021-05-20)


### ⚠ BREAKING CHANGES

* **compatibility:** Possible breaking change aggregation keywords use underscore as prefix to prevent field clashes

### Features

* `useInputType` config option allow to choose input type ([54eeb1c](https://github.com/unlight/nestjs-graphql-prisma/commit/54eeb1c5bfc80df7705ab124baac715b61f00dda))


### Bug Fixes

* Make types same as in prisma ([1f5bc4e](https://github.com/unlight/nestjs-graphql-prisma/commit/1f5bc4e55bb5802feb1be5c21dca945f38318e57))
* **compatibility:** Rename aggregation keywords ([83491c8](https://github.com/unlight/nestjs-graphql-prisma/commit/83491c85d455b725f30caa033c016cc0b22cb965))

### [11.4.5](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.4.4...v11.4.5) (2021-05-13)


### Bug Fixes

* Combine scalar filters on nullable list ([8f306e8](https://github.com/unlight/nestjs-graphql-prisma/commit/8f306e8c43fc557a9d58c6ae14a9787167cc2131))
* Get graphql type for scalar list ([97a1ae4](https://github.com/unlight/nestjs-graphql-prisma/commit/97a1ae482edaff8ed873c65ab4f0ccb2ce1c51c5)), closes [#30](https://github.com/unlight/nestjs-graphql-prisma/issues/30)

### [11.4.4](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.4.3...v11.4.4) (2021-05-11)


### Bug Fixes

* **custom decorators:** Prevent applying on aggregate inputs ([9b21970](https://github.com/unlight/nestjs-graphql-prisma/commit/9b2197079b910ffdf0f895649e59028622e7025a))

### [11.4.3](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.4.2...v11.4.3) (2021-05-11)


### Bug Fixes

* **custom decorators:** Reget decorator full name ([9e279bf](https://github.com/unlight/nestjs-graphql-prisma/commit/9e279bfeb72ff7fbc752c6e7469427c0e5d86a50)), closes [#29](https://github.com/unlight/nestjs-graphql-prisma/issues/29)

### [11.4.2](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.4.1...v11.4.2) (2021-05-11)


### Bug Fixes

* **custom decorators:** Missed imports when enabled `emitSingle` ([bf55996](https://github.com/unlight/nestjs-graphql-prisma/commit/bf55996e4c23c61300362f9c04d5bfd67a683aea)), closes [#28](https://github.com/unlight/nestjs-graphql-prisma/issues/28)

### [11.4.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.4.0...v11.4.1) (2021-05-09)


### Bug Fixes

* Multiple namespace imports ([e096af0](https://github.com/unlight/nestjs-graphql-prisma/commit/e096af0fd28a7bc3615cfbd1ebe1052f74bbf30f)), closes [#27](https://github.com/unlight/nestjs-graphql-prisma/issues/27)

## [11.4.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.3.1...v11.4.0) (2021-04-28)


### Features

* **configuration:** Allow purge output folder ([a360869](https://github.com/unlight/nestjs-graphql-prisma/commit/a360869fba2685ee5e463fcb6781039ec88b2356)), closes [#7](https://github.com/unlight/nestjs-graphql-prisma/issues/7)

### [11.3.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.3.0...v11.3.1) (2021-04-25)


### Bug Fixes

* Existence check of tsconfig ([4d523d2](https://github.com/unlight/nestjs-graphql-prisma/commit/4d523d2d99b5ab73a7de680a4ee603748a17c325)), closes [#23](https://github.com/unlight/nestjs-graphql-prisma/issues/23)

## [11.3.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.2.0...v11.3.0) (2021-04-25)


### Features

* @PropertyType() to replace types_ configuration ([4a7313d](https://github.com/unlight/nestjs-graphql-prisma/commit/4a7313dcab940093b238c050405a935c92c26248))


### Bug Fixes

* Model types mismatch ([ffe70b6](https://github.com/unlight/nestjs-graphql-prisma/commit/ffe70b69a3fa1661c5f1beed9bc490ccd2f292c4)), closes [#21](https://github.com/unlight/nestjs-graphql-prisma/issues/21)
* Prisma client generator is optional ([4ce28f1](https://github.com/unlight/nestjs-graphql-prisma/commit/4ce28f153ef8fd9e27066a8f2a0402c27ad4d679)), closes [#25](https://github.com/unlight/nestjs-graphql-prisma/issues/25)

## [11.2.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.1.0...v11.2.0) (2021-04-16)


### Features

* Alternative default import configuration ([4ae1b82](https://github.com/unlight/nestjs-graphql-prisma/commit/4ae1b82d90e1af7b55db25f63054cf7f6630272b))
* Apply custom decorators on models ([34196b3](https://github.com/unlight/nestjs-graphql-prisma/commit/34196b348ecb9f5a15c8add2b8a5346be85f24a3))

## [11.1.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.0.3...v11.1.0) (2021-04-07)


### Features

* Custom decorators ([b14f0fe](https://github.com/unlight/nestjs-graphql-prisma/commit/b14f0fee216e6d6eb025166ad30e3a2f18c2d653))


### Bug Fixes

* Custom type for output types ([c9ae9e9](https://github.com/unlight/nestjs-graphql-prisma/commit/c9ae9e91d4df358c7c0d408b10f78edddaa7686b))

### [11.0.3](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.0.2...v11.0.3) (2021-04-01)


### Bug Fixes

* Duplicate import ([2a18c19](https://github.com/unlight/nestjs-graphql-prisma/commit/2a18c194a0fd61207fe6b583c6b14ce9889e45d2)), closes [#18](https://github.com/unlight/nestjs-graphql-prisma/issues/18)

### [11.0.2](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.0.1...v11.0.2) (2021-03-31)


### Bug Fixes

* Emit metadata and enabled `emitSingle` cause TDZ issue ([0d89d81](https://github.com/unlight/nestjs-graphql-prisma/commit/0d89d81fa96b29df1cd23cb81deb67f73ec70975)), closes [#16](https://github.com/unlight/nestjs-graphql-prisma/issues/16)

### [11.0.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v11.0.0...v11.0.1) (2021-03-31)


### Bug Fixes

* Source file already exists error ([121a486](https://github.com/unlight/nestjs-graphql-prisma/commit/121a48626983a2a9f52f2cb6db3af3b7c865c859))

## [11.0.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v10.3.0...v11.0.0) (2021-03-31)


### ⚠ BREAKING CHANGES

* Adapted to Prisma 2.20

### Bug Fixes

* Adapted to Prisma 2.20 ([c5f040d](https://github.com/unlight/nestjs-graphql-prisma/commit/c5f040da249681363c1e6267f83275955ad682c8)), closes [#17](https://github.com/unlight/nestjs-graphql-prisma/issues/17)

## [10.3.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v10.2.0...v10.3.0) (2021-03-29)


### Features

* Allow generate compiled files or merged to single file ([095f975](https://github.com/unlight/nestjs-graphql-prisma/commit/095f975ceb9a6555e95efc33cd00f9ddaa33d7f9)), closes [#15](https://github.com/unlight/nestjs-graphql-prisma/issues/15)

## [10.2.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v10.1.3...v10.2.0) (2021-03-19)


### Features

* Extend `reExport` option ([3d5475b](https://github.com/unlight/nestjs-graphql-prisma/commit/3d5475b7029e425630b8538aee7a4a249d950840))

### [10.1.3](https://github.com/unlight/nestjs-graphql-prisma/compare/v10.1.2...v10.1.3) (2021-03-19)


### Bug Fixes

* Hide field for model type ([54571d2](https://github.com/unlight/nestjs-graphql-prisma/commit/54571d2d347c31905d8df5a62e2b057ec8dee18c))

### [10.1.2](https://github.com/unlight/nestjs-graphql-prisma/compare/v10.1.1...v10.1.2) (2021-03-17)


### Bug Fixes

* Re-export iteration process fail ([bad1034](https://github.com/unlight/nestjs-graphql-prisma/commit/bad10341f60c04fa1d57f0b59b6d10a33e93a1da))

### [10.1.1](https://github.com/unlight/nestjs-graphql-prisma/compare/v10.1.0...v10.1.1) (2021-03-17)


### Bug Fixes

* Added more keywords for detection model name ([51c836e](https://github.com/unlight/nestjs-graphql-prisma/commit/51c836e92488be8af3e73038ec63c2c2d498a629))

## [10.1.0](https://github.com/unlight/nestjs-graphql-prisma/compare/v10.0.1...v10.1.0) (2021-03-13)


### Features

* Allow to configure path to `tsconfig.json` ([ead4411](https://github.com/unlight/nestjs-graphql-prisma/commit/ead44117565e6654128b8209adb3046b1134ae82))
* Validate `outputFilePattern` ([3240a73](https://github.com/unlight/nestjs-graphql-prisma/commit/3240a7344033a943b9b6433b24a8c779fe84b9f7))


### Bug Fixes

* Save files without intermediate layer ([4a07bea](https://github.com/unlight/nestjs-graphql-prisma/commit/4a07bea7d9657549f51b7a09910028e1815dbecb))


### Performance Improvements

* Generation of inputs/outputs ([4604160](https://github.com/unlight/nestjs-graphql-prisma/commit/46041608bbd7e16bae5b2464890c50ceccdaf5c6))

### [10.0.2](https://github.com/unlight/nestjs-graphql-prisma/compare/v10.0.1...v10.0.2) (2021-03-13)


### Bug Fixes

* Added more keywords for detection model name ([51c836e](https://github.com/unlight/nestjs-graphql-prisma/commit/51c836e92488be8af3e73038ec63c2c2d498a629))

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
