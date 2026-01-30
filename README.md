# React Native Svg Circle Country Flags (Fork)

> **Fork with improvements:** True white colors (#fff) and unified `<Flag code="XX" />` component

React Native package based on **react-native-svg** and **circle-flags** with a collection of **400+** circular SVG flags.

## Fork Improvements

This fork includes the following enhancements over the original:

### 1. Fixed White Colors
The original library uses `#eee` (light gray) for white areas in flags, causing them to blend into light backgrounds. This fork replaces all `#eee` with `#fff` (true white) for proper flag rendering.

**Affected flags include:** Japan 🇯🇵, South Korea 🇰🇷, Poland 🇵🇱, and 470+ others.

### 2. Unified `<Flag />` Component
New simplified API with a `code` prop:

```tsx
import { Flag } from 'react-native-svg-circle-country-flags';

// Country flags
<Flag code="JP" size={36} />  // Japan
<Flag code="US" size={36} />  // United States
<Flag code="pl" size={36} />  // Poland (case-insensitive)

// Special codes
<Flag code="EU" size={36} />      // European Union
<Flag code="GLOBAL" size={36} />  // Earth/Globe

// Unknown codes fallback to Earth
<Flag code="UNKNOWN" size={36} /> // Shows Earth
```

#### Example flags

<img src="https://hatscripts.github.io/circle-flags/flags/br.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/cn.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/id.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/in.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/ng.svg" width="48">
<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" width="48">

See full list: [circle-flags gallery](https://hatscripts.github.io/circle-flags/gallery)

## Prerequisites

⚠️ Peer Dependencies

- [react-native-svg](https://github.com/software-mansion/react-native-svg)

## Installation

```sh
# Install from this fork
npm install github:zkubinski/react-native-svg-circle-country-flags
# or
yarn add github:zkubinski/react-native-svg-circle-country-flags
# or
pnpm add github:zkubinski/react-native-svg-circle-country-flags
```

## Usage

### New unified API (recommended)

```tsx
import { Flag } from 'react-native-svg-circle-country-flags';

<Flag code="JP" size={36} />
<Flag code="US" size={48} />
<Flag code="EU" size={24} />
```

### Original API (still supported)

```tsx
import { Jp, Us, Eu } from 'react-native-svg-circle-country-flags';

<Jp width={36} height={36} />
<Us width={48} height={48} />
<Eu width={24} height={24} />
```

## Original Repository

This is a fork of [lukaszkurantdev/react-native-svg-circle-country-flags](https://github.com/lukaszkurantdev/react-native-svg-circle-country-flags).

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Lukasz Kurant 2023
