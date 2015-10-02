#!/usr/bin/env node
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _findupSync = require("findup-sync");

var _findupSync2 = _interopRequireDefault(_findupSync);

var _resolve = require("resolve");

var _resolve2 = _interopRequireDefault(_resolve);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var baseDir = process.cwd();
var boltPath = undefined;

try {
  boltPath = _resolve2["default"].sync("electrode-bolt", { basedir: baseDir, moduleDirectory: 'node_modules' });
} catch (e) {
  boltPath = (0, _findupSync2["default"])("lib/bolt-cli");

  if (!boltPath) {
    console.log("Unable to find local bolt. Be sure to initialze a new npm project and run:\n\n\tnpm install electrode-bolt --save-dev\n");
    process.exit(99);
  }
}

require(boltPath);
