# Morse code parser

![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Publish](https://img.shields.io/badge/publish-success-brightgreen)

### Introduction

This node package is a demo purpose project from `Code Continent` github organization. It can be install in nodejs project and can be used as `cjs` or `mjs` including typescript support.

This package will help you to parse any morse codes into a english letters, words, or a full text.

### Getting started

Install:

```sh
$ npm install @cc/morse-parser
```

```js
// cjs

const { decode, decodeWord, decodeLetter } = require('@cc/morse-parser')
console.log(decodeLetter('.-')) // returns letter 'A'
console.log(decodeWord('-- .- .... .- -... ..- -...')) // returns 'MAHABUB'
console.log(decode('-- -.--   -. .- -- .')) // returns 'MY NAME'

// esm

import { decode, decodeWord, decodeLetter } from '@cc/morse-parser'
console.log(decodeLetter('.-')) // returns letter 'A'
console.log(decodeWord('-- .- .... .- -... ..- -...')) // returns 'MAHABUB'
console.log(decode('-- -.--   -. .- -- .')) // returns 'MY NAME'
```

The `types` definitions

```typescript
decode(code: string): string
decodeWord(code: string): string
decodeLetter(code: string): string
```

Thank you 😺
