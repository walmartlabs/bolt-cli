***
# NOTICE:

## This repository has been archived and is not supported.

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
***
NOTICE: SUPPORT FOR THIS PROJECT HAS ENDED 

This projected was owned and maintained by Walmart. This project has reached its end of life and Walmart no longer supports this project.

We will no longer be monitoring the issues for this project or reviewing pull requests. You are free to continue using this project under the license terms or forks of this project at your own risk. This project is no longer subject to Walmart's bug bounty program or other security monitoring.


## Actions you can take

We recommend you take the following action:

  * Review any configuration files used for build automation and make appropriate updates to remove or replace this project
  * Notify other members of your team and/or organization of this change
  * Notify your security team to help you evaluate alternative options

## Forking and transition of ownership

For [security reasons](https://www.theregister.co.uk/2018/11/26/npm_repo_bitcoin_stealer/), Walmart does not transfer the ownership of our primary repos on Github or other platforms to other individuals/organizations. Further, we do not transfer ownership of packages for public package management systems.

If you would like to fork this package and continue development, you should choose a new name for the project and create your own packages, build automation, etc.

Please review the licensing terms of this project, which continue to be in effect even after decommission.

# bolt-cli [DEPRECATED REPO]

>  `bolt` command line interface.

Install this globally to have access to the bolt command. _This is not bolt itself,_ that can be found at [walmartreact/bolt](https://github.com/walmartreact/electrode-bolt).

```
npm install -g electrode-bolt-cli
```

## Usage

### Local Bolt dependency

Within a package that has `bolt` installed as a dependency:

To list bolt tasks, you can simply run `bolt`.

To run a `bolt` task, run `bolt <task>`. If no task exists, bolt will let you know.

## Notes

- This tool isn't required for using the `bolt` tool, but it allows you to run `bolt` tasks from the command line easily rather than having to have bolt itself installed globally or having all of your `npm run` tasks directly linked to every task `bolt` provides.

## Contributing

### Scripts

| Command | Action |
| `link:dev` | Performs a symlink to your `npm prefix -g` for ease of development |
| `dev` | Watches `src` for changes, transpiles to `bin/bolt` with `babel` |
| `build` | Makes `bin` directory if it doesn't exist, transpiles `src` to `bin/bolt` with `babel` |

### Publishing

`src/bolt-cli.js` is built to `bin/bolt` on `npm run prepublish`
