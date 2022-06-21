# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2022-06-16

### Added

- 🚩 `AlertBanner`: added AlertBanner, inspired by [Calcite's Alert](https://esri.github.io/calcite-components/?path=/story/components-alert--title-message-link)

### Fixed

- 🔘 `Button`: added missing `dd-button` className

## [1.3.3] - 2022-06-13

### Fixed

- ⏰ `TimePicker`: fixed dropdown item focus

## [1.3.2] - 2022-06-13

### Added

- ⏰ `TimePicker`: added missing export

## [1.3.1] - 2022-06-13

### Changed

- ⏰📅 `DateTimePicker`: removed temporarily because of unstable API

## [1.3.0] - 2022-06-12

### Added

- 💅 General style: added "primary" and "secondary" colors for multiple elements.
- 🔘 `Button`: add `useFocusStyle` to control if we'll use focus style directly
- 📜 `Menu`: add more fine-grain control over rendering menu items

### Changed

- 🏊 `Toggle`, `Badge`, `RadioGroup`: `status` -> `colorType`
- Internal: refactor color for different ColorType in scss
- 👮 `Badge`: make `text` optional

### Fixed

- Various forms: Fix generic FormFields

## [1.2.6] - 2022-06-10

### Added

- 💃 `Popover`: added support for custom opener component props
- ⌚ `DurationPicker`: Add dropdown with custom options
- ⏰ `TimePicker`: Finish time picker

### Fixed

- 📒 `Storybook`: removed `Menu`'s `arg.defaultValue` to get rid of console warning

### Changed

- 📝 `Input`, 🐱‍👤 `MaskedInput`: changed how `ref` is assigned

## [1.2.5] - 2022-06-09

### Added

- 🗿 `TabGroup`: added `TabGroup`

### Fixed

- 💭 `Modal`: prevent `onClose` to being bubbled if modal is closed but animation is still happening
- ⏰📅 `DateTimePicker`: fix popover not being closed when click outside if `DateTimePicker` is inside a `Modal`

### Changed

- 💭 `Modal`: bring color indicator inside `Input`
- `TailwindCSS`: update tailwind css to latest (1.6.4)

## [1.2.4] - 2022-05-31

### Changed

- 🟢🔴🔵 `ColorPicker`: bring color indicator inside `Input`

## [1.2.3] - 2022-05-31

### Added

- 🟢🔴🔵 `ColorPicker`: Add `hidePicker` prop in case user only want frequently used color list

## [1.2.2] - 2022-05-31

### Added

- ⌚ `DurationPicker`: Add missing `ref`

## [1.2.1] - 2022-05-31

### Changed

- ⌚ `DurationPicker`: Make mask prop optional

## [1.2.0] - 2022-05-30

### Added

- ⌚ `DurationPicker`: add duration picker with... no duration yet. Controlled form is under construction!
- 🔨 Added `getDurationFromMs` and `durationToString` utils

## [1.1.15] - 2022-05-29

### Fixed

- 🟢🔴🔵 `ColorPicker`: fix `defaultValue` not being applied

## [1.1.14] - 2022-05-29

### Changed

- 🟢🔴🔵 `ColorPicker`: change `value` and `defaultValue` to `string` instead of `ValidColor`

## [1.1.13] - 2022-05-26

### Fixed

- 🟢🔴🔵 `ColorPicker`: add debounce to `onChange` to prevent infinite rendering when dragging Picker's handle for controlled mode.
- 📝 `Input`: Add `hasContent` prop for more robust control over label float

## [1.1.12] - 2022-05-25

### Fixed

- 🟢🔴🔵 `ColorPicker`: change `Input` value whenever `value` props changes
- 📃 `Listbox`: Fix caption style

## [1.1.11] - 2022-05-24

### Fixed

- ⏰📅 `DateTimePicker`: Convert value for `onChange` with different `triggeredOn` to `Date` from `DayJS`

## [1.1.10] - 2022-05-24

### Fixed

- 📝 `Input`: Fix `fill` input's padding bottom
- ⏰📅 `DateTimePicker`: Convert value for `onChange` to `Date` from `DayJS`

## [1.1.9] - 2022-05-22

### Added

- 🟢🔴🔵 `ColorPicker`: Add usage with form

### Changed

- 🟢🔴🔵 `ColorPicker`: `color` -> `value` ; `defaultColor` -> `defaultValue` and make onChange bubbles event when using with picker

## [1.1.8] - 2022-05-22

### Fixed

- 📅 `DatePicker`: Fix `value` prop

## [1.1.7] - 2022-05-21

### Fixed

- 🟢🔴🔵 `ColorPicker`: Fix missing export
- 🥷 `MaskedInput`: Fix missing import
- 💭 `Modal`: Add more fine grained control over modal `onClose` event

## [1.1.6] - 2022-05-19

### Fixed

- ⏰📅 `DateTimePicker`: Allow consumers to use `null` to clear value

## [1.1.5] - 2022-05-18

### Fixed

- ⏰📅 `DateTimePicker`: prevent `minDate` and `maxDate` to be locked to current day if not defined via props

## [1.1.4] - 2022-05-17

### Added

- ⏰📅 `DateTimePicker`: expose `minDate` and `maxDate` for ease of use

### Fixed

- ⏰📅 `DateTimePicker`: `timePickerProps` -> `dateTimePickerProps`
- ⏰📅 `DateTimePicker`: makes `dateTimePickerProps` `Partial` so user can freely pass in whatever they want

## [1.1.3] - 2022-05-16

### Added

- ⏰📅 `DateTimePicker`: add `triggeredOn` param for `onChange` for more fine-grained control on when the onChange happens.

## [1.1.2] - 2022-05-15

### Fixed

- ⏰📅 `DateTimePicker`: Fix `value` prop doesn't do much
- ⏰📅 `DateTimePicker`: Split between regular `value` prop and rendered `value` (via `Input`) which is affected by `dateFormat`
- `Input`: Fix `fill` label `y` position on float

## [1.1.1] - 2022-05-09

### Fixed

- ⏰📅 `DateTimePicker`: Fix default value not being applied

## [1.1.0] - 2022-05-08

### Added

- ⏰📅 `DateTimePicker` (#22) 🚀

- 📝🐱‍👤 MaskedInput (no stories yet)
- ⌚ TimePicker (unfinished - unstable)
- 🏴‍☠️ useMediaQuery hook
- 💅 Add `dd-` prefix to components

### Fixed

- 📝 `Input`: handle label float when user set value via `useForm`'s `setValue` (#23)
- 🔘 `Button`: fix issue with no content on `isLoading` `true`

## [1.0.14] - 2022-04-29

### Fixed

- Version: Fix incorrect version number

## [1.0.13] - 2022-04-29

### Fixed

- 📃 `Listbox`: Added missing import
- ⚙ TSConfig: Specify jsx transform so "React" import UMD issue is resolved

## [1.0.12] - 2022-04-27

### Added

- 🎚 `Slider`: Add `renderThumbValue` method
- 📃 `Listbox`: Add more variants to support async and creatable

## [1.0.11] - 2022-04-26

### Added

- 🎚 `Slider` (#16)

### Fixed

- 📝 `Input`'s `hasContent` and active behavior (#12)

## [1.0.11] - 2022-04-22

### Added

- 🟢🔴🔵 `ColorPicker`

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
