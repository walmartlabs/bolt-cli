# electrode-bolt-cli

> electrode `bolt` command line interface.

Install this globally to have access to the bolt command.

```
npm install -g electrode-bolt-cli
```

## Usage

Within a package that has `electrode-bolt` installed as a dependency:

To list bolt tasks, you can simply run `bolt`.

To run a `bolt` task, run `bolt <task>`. If no task exists, bolt will let you know.

This tool isn't required for using the `electrode-bolt` tool, but it allows you to run `bolt` tasks from the command line easily rather than having to have bolt itself installed globally or having all of your `npm run` tasks directly linked to every task `electrode-bolt` provides.
