var pkg = require("./package.json");
var findup = require("findup-sync");
var resolve = require("resolve").sync;
var path = require("path");
var program = require("commander");

var baseDir = process.cwd();
var boltPath;

try {
  boltPath = resolve("electrode-bolt", { basedir: baseDir, moduleDirectory: 'node_modules' });
} catch (e) {
  boltPath = findup("lib/electrode-bolt");

  if (!boltPath) {
    console.log("Unable to find local bolt.");
    process.exit(99);
  }
}

program
  .version(pkg.version)
  .option("init")
  .option("scaffold [type] [name]", "scaffold")
  .parse(process.argv);

if (program.scaffold) {
  require(path.join(boltPath, "../../tasks", "scaffold.js"))({
    type: program.scaffold,
    name: program.args[0]
  });
} else {
  require(boltPath);
}
