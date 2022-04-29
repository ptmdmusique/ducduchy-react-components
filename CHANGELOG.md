# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.13] - 2022-04-29

### Fixed

- Listbox: Added missing import
- TSConfig: Specify jsx transform so "React" import UMD issue is resolved

## [1.0.12] - 2022-04-27

### Added

- Slider: Add `renderThumbValue` method
- Listbox: Add more variants to support async and creatable

## [1.0.11] - 2022-04-26

### Added

- Slider (#16)

### Fixed

- Input's `hasContent` and active behavior (#12)

## [1.0.11] - 2022-04-22

### Added

- ColorPicker

## [1.0.5] - 2022-17-01

### Fixed

- Fix circular dependency in multiple components
- Fix scss "unknown word" when using variable interpolation or comment with `//`
- Fix style file not built

## [1.0.1] - 2022-17-01

### Fixed

- Fix issue with TS error `css` props missing because of `@emotion/react`

## [1.0.1] - 2022-17-01

### Fixed

- Add missing `nanoid` package to dependency list

## [1.0.0] - 2022-17-01

### Added

- Initial release with multiple basic components
