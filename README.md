# Boilerplate project which uses electron, react, typescript and vscode

## How to run:
1. Open project with vscode
1. Install recommended extensions
1. Run `npm install` to install dependencies
### With debugging
1. Run `npm run renderer:start` to start React renderer server
1. Open *Debug* window and run `Electron: All`
### Without debugging
1. Run `npm run start` to start

## Known issues:
* Renderer debuggers attach to processes late. If some breakpoints are not triggered reload the page.
* Production build codes and scripts are missing
