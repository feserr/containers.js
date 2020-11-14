# wasm-containers.js

[![License](https://img.shields.io/badge/license-BSD--2%20clause-blue.svg)](https://github.com/feserr/wasm-containers.js#license)

[![Build Status](https://travis-ci.org/feserr/wasm-containers.js.svg?branch=master)](https://travis-ci.org/feserr/wasm-containers.js)

[![Trello URL](https://img.shields.io/badge/trello-wasmcontainers.js-green.svg?longCache=true&style=for-the-badge)](https://trello.com/b/tuCBurqH)

# Index

- [About](#about)
- [What's New?](#whats-new)
- [How to Build](#how-to-build)
- [How to Run](#how-to-run)
- [Requirements](#requirements)
- [Dependencies](#dependencies)
- [Future features](#future)
- [Contributing](#contributing)
- [Bugs?](#bugs)
- [License](#license)

<a name="about"></a>

# wasm-containers.js 0.1.1

WASM implementation of common containers.

Version: 0.1.1 - Released: 12th November 2020

<a name="whats-new"></a>

## What's new in 0.1.0?

- Add list class.

<a name="how-to-build"></a>

## How to Build

To build it you need to install Emscripten 2.0.0 or above and activate it; and
install Python 3.7 or above.

Then, using the npm script we can create the builds file that will be created
in a folder called `dist`. So, to do it you need to launch the next commands:

```bash
source ${EMSDK_PATH}emsdk_env.sh

npm install

npm run build
npm run test
```

This will build and test the library.

<a name="how-to-run"></a>

## How to Run

When the module is loaded you call to `then` with a function
with one parameter that will be the loaded module. Then,
you can assign it to a variable or use it there. For example:

### NodeJS module

To use it as a NodeJS module you will have to install the depency using `npm`:
```bash
npm install wasm-containers.js --save
```

Also, you can download the files from the `lib` folder, keep in mind that they
need to be together **always**

To run you can't do it after require it, you need to wait until the
WebAssembly code it is loaded. It use the `MODULARIZE` option of Emscripten,
so, the next example show how to do it:

```js
let ContainersWasm = null;

const containersModule = require('wasm-containers.js');
containersModule().then(function(Module) {
  ContainersWasm = Module;
  main();
});

/**
 * Main function.
 */
function main() {
  const list = new ContainersWasm.List();
  list.push_back(Infinity);
  console.log(list.size());
  console.log(list.front());
  list.delete();
}
```

As you can see, once the function `then` of the module is done you can
use the library.

### Common Javascript

To run it on a common JavaScript code, like a script of a web, you will need
to download the files from the `lib` folder whenever you want, keep in mind
that they need to be together **always**.

Then you need to import the file before the script that is going to use, for
example:

```html
<script src="wasm-containers.js"></script>
<script src="./app.js"></script>
```

To use it you will need to do something similar to the NodeJS
version. You have to wail until the `then` function is done.
For example, in the next code we can see a little example:

```js
let ContainersWasm = null;

containersModule().then(function(Module) {
  ContainersWasm = Module;
  main();
});

/**
 * Main function.
 */
function main() {
  const list = new ContainersWasm.List();
  list.push_back(Infinity);
  console.log(list.size());
  console.log(list.front());
  list.delete();
}
```

<a name="requirements"></a>

## Requirements

- Emscripten version 2.0.0 or above.
- Python 3.7 or above.

<a name="dependencies"></a>

## Dependencies

- [Emscripten](https://github.com/emscripten-core/emscripten)
- [Mocha](https://github.com/mochajs/mocha)
- [Chai](https://github.com/chaijs/chai)

<a name="future"></a>

## Future features

- Look at the [Trello board](https://trello.com/b/tuCBurqH).

<a name="contributing"></a>

## Contributing

- If you find a bug then please report it on [GitHub Issues][issues].

- If you have a feature request, or have written a tool or demo that shows wasm-containers.js in use, then please get in touch. We'd love to hear from you!

<a name="bugs"></a>

## Bugs?

Please add them to the [Issue Tracker][issues] with as much info as possible, especially source code demonstrating the issue.

<a name="license"></a>

## License

---

<a href="http://opensource.org/licenses/BSD-2-Clause" target="_blank">
<img align="right" width="100" height="137"
 src="https://opensource.org/files/OSI_Approved_License.png">
</a>

    BSD 2-Clause License

    Copyright (c) 2020, Elias Serrano
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this
    	list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright notice,
    	this list of conditions and the following disclaimer in the documentation
    	and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

[issues]: https://github.com/feserr/wasm-containers.js/issues
