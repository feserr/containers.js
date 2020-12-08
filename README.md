# extra-containers.js

[![License](https://img.shields.io/badge/license-BSD--2%20clause-blue.svg)](https://github.com/feserr/extra-containers.js#license)
[![Build Status](https://travis-ci.org/feserr/extra-containers.js.svg?branch=master)](https://travis-ci.org/feserr/extra-containers.js)
[![Coverage Status](https://coveralls.io/repos/github/feserr/extra-containers.js/badge.svg?branch=js_lib)](https://coveralls.io/github/feserr/extra-containers.js?branch=js_lib)

[![Trello URL](https://img.shields.io/badge/trello-extracontainers.js-green.svg?longCache=true&style=for-the-badge)](https://trello.com/b/tuCBurqH)

# Index

- [About](#about)
- [How to Build](#how-to-build)
- [How to Run](#how-to-run)
- [Requirements](#requirements)
- [Dependencies](#dependencies)
- [Future features](#future)
- [Contributing](#contributing)
- [Bugs?](#bugs)
- [License](#license)

<a name="about"></a>

# extra-containers.js 0.1.0

Missing JavaScript common containers.

Version: 0.1.0 - Released: 8th November 2020

<a name="how-to-build"></a>

## How to Build

To build it you need to download all the develop dependencies of the project.

```bash
npm install
```

Then, using the npm script we can generate the library file, that will be created
in a folder called `dist`. So, to do it you need to launch the next commands:

```bash
npm run build
npm run test
```

This will generate and test the library.

<a name="how-to-run"></a>

## How to Run

### NodeJS module

To use it as a NodeJS module you will have to install the depency using `npm`:
```bash
npm install -D extra-containers.js
```

Also, you can download the files from the `lib` folder.

Then, to run it we only need to use the `require` function to load it and we
can start using it. In the next code we can see an example:

```js
const extraContainers = require('../lib/extra-containers');

const sortedArray = new extraContainers.SortedArray();
sortedArray.push(1);
sortedArray.push(2);

console.log(sortedArray.size());
console.log(sortedArray.exist(1));
console.log(sortedArray.exist(3));
```

### Common Javascript

To run it on a common JavaScript code, like a script of a web, you will need
to download the files from the `lib` folder whenever you want.

Then you need to import the file before the script that is going to use, for
example:

```html
<script src="extra-containers.js"></script>
```

To use it you will need to do something similar to the NodeJS
version. In the next code we can see a little example:

```js
const sortedArray = new extraContainers.SortedArray();
sortedArray.push(1);
sortedArray.push(2);

console.log(sortedArray.size());
console.log(sortedArray.exist(1));
console.log(sortedArray.exist(3));
```

<a name="requirements"></a>

## Requirements

Coming soon...

<a name="dependencies"></a>

## Dependencies

- [Webpack](https://webpack.js.org)
- [Mocha](https://github.com/mochajs/mocha)
- [Chai](https://github.com/chaijs/chai)

<a name="future"></a>

## Future features

- Look at the [Trello board](https://trello.com/b/tuCBurqH).

<a name="contributing"></a>

## Contributing

- If you find a bug then please report it on [GitHub Issues][issues].

- If you have a feature request, or have written a tool or demo that shows extra-containers.js in use, then please get in touch. We'd love to hear from you!

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

[issues]: https://github.com/feserr/extra-containers.js/issues
