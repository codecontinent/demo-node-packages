# Even-Odd

![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Publish](https://img.shields.io/badge/publish-success-brightgreen)

### Introduction

This node package is a demo purpose project from `Code Continent` github organization. It can be install in nodejs project and can be used as `cjs` or `mjs` including typescript support.

This package will help you to find even or odd by the given input.

### Getting started

Install:

```sh
$ npm install @cc/even-odd
```

```js
// cjs

const { isOdd, isEven } = require('@cc/even-odd')
console.log(isOdd(7)) // returns true
console.log(isOdd(10)) // returns false
console.log(isEven(7)) // returns false
console.log(isEven(10)) // returns true

// esm

import { isOdd, isEven } from '@cc/even-odd'
console.log(isOdd(7)) // returns true
console.log(isOdd(10)) // returns false
console.log(isEven(7)) // returns false
console.log(isEven(10)) // returns true
```

The `types` definitions

```typescript
isEven(num: number): boolean
isOdd(num: number): boolean
```

Thank you 😺
