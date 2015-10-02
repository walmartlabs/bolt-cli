#!/usr/bin/env node

import findup from "findup-sync";
import resolve from "resolve";
import path from "path";

const baseDir = process.cwd();
let boltPath;

try {
  boltPath = resolve.sync("electrode-bolt", { basedir: baseDir, moduleDirectory: 'node_modules' });
} catch (e) {
  boltPath = findup("lib/bolt-cli");

  if (!boltPath) {
    console.log("Unable to find local bolt. Be sure to initialze a new npm project and run:\n\n\tnpm install electrode-bolt --save-dev\n");
    process.exit(99);
  }
}

require(boltPath);
