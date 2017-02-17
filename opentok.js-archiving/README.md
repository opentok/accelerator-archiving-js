
![logo](https://raw.githubusercontent.com/opentok/archiving-acc-pack/master/tokbox-logo.png)

# OpenTok Annotation Accererator Pack

This package provides an easy way to get started in implementing audio/video archiving using the OpenTok platform.

###Installation:

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

*`jQuery` is currently a required dependency of this accelerator pack (we plan to remove it soon).  If you are NOT using a bundler such a as browserify or webpack, you must include `jQuery` in your project.*

-----------------

Click [here](https://www.npmjs.com/search?q=opentok-acc-pack) for a list of all OpenTok accelerator packs.