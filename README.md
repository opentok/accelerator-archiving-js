# Accelerator Archiving for JavaScript

[![Build Status](https://travis-ci.org/opentok/accelerator-archiving-js.svg?branch=master)](https://travis-ci.org/opentok/accelerator-core-js)
[![GitHub release](https://img.shields.io/github/release/opentok/accelerator-archiving-js.svg)](./README.md)
[![license](https://img.shields.io/github/license/opentok/accelerator-archiving-js.svg)](./.github/CONTRIBUTING.md)
[![npm](https://img.shields.io/npm/v/opentok-archiving.svg)](https://www.npmjs.com/package/opentok-archiving)

<img src="https://assets.tokbox.com/img/vonage/Vonage_VideoAPI_black.svg" height="48px" alt="Tokbox is now known as Vonage" />

## Quick start

The OpenTok Archiving Accelerator Pack provides functionality you can add to your OpenTok applications that enables users to record, save, and retrieve OpenTok sessions.

This section shows you how to use the accelerator pack.

## Install

```bash
$ npm install --save opentok-archiving
```

If using browserify or webpack:

```javascript
const archiving = require('opentok-archiving');
```

Otherwise, include the accelerator pack in your html:

```html
<script src="../your/path/to/opentok-archiving.js"></script>
```

 . . . and it will be available in global scope as `ArchivingAccPack`

-----------------

Click [here](https://www.npmjs.com/search?q=opentok-acc-pack) for a list of all OpenTok accelerator packs.

## Exploring the code

The `ArchivingAccPack` class in opentok-archiving.js is the backbone of the archiving feature for the app.

This class provides functions for starting and stopping sessions archiving.

The [Accelerator Core JS](https://github.com/opentok/accelerator-core-js#configuration) shows the best-practices for Javascript to use the Accelerator Archiving.

## Development and Contributing

Interested in contributing? We :heart: pull requests! See the [Contribution](CONTRIBUTING.md) guidelines.

## Getting Help

We love to hear from you so if you have questions, comments or find a bug in the project, let us know! You can either:

- Open an issue on this repository
- See <https://support.tokbox.com/> for support options
- Tweet at us! We're [@VonageDev](https://twitter.com/VonageDev) on Twitter
- Or [join the Vonage Developer Community Slack](https://developer.nexmo.com/community/slack)

## Further Reading

- Check out the Developer Documentation at <https://tokbox.com/developer/>