# Go Jet Engine Template Syntax Highlight Support for VSCode

[![Launched](https://img.shields.io/badge/VSCode--Go--Template-launched-brightgreen.svg?logo=visual-studio-code)](https://github.com/james-andrewsmith/vscode-go-jet-template)
[![GitHub license](https://img.shields.io/github/license/james-andrewsmith/vscode-go-jet-template.svg)](https://raw.githubusercontent.com/james-andrewsmith/vscode-go-jet-template/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/james-andrewsmith/vscode-go-jet-template.svg)](https://github.com/james-andrewsmith/vscode-go-jet-template/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/james-andrewsmith/vscode-go-jet-template.svg)](https://github.com/james-andrewsmith/vscode-go-jet-template/network)
[![GitHub issues](https://img.shields.io/github/issues/james-andrewsmith/vscode-go-jet-template.svg)](https://github.com/james-andrewsmith/vscode-go-jet-template/issues)
[![Coverage Status](https://coveralls.io/repos/github/james-andrewsmith/vscode-go-jet-template/badge.svg?branch=master)](https://coveralls.io/github/james-andrewsmith/vscode-go-jet-template?branch=master)

Go [Jet Engine](https://github.com/CloudyKit/jet) Template Syntax Highlight Support for VSCode.

## Current Status

Forked from [@jinliming2](https://github.com/jinliming2)'s [vscode-go-template](https://github.com/jinliming2/vscode-go-template) extension and currently testing ahead of publishing in VSCode marketplace. Focus of extension is to provide Jet Syntax support for HTML files side by side with HTMX and Tailwind autocomplete.

## TODO

- [ ] Complete migration of test suite
- [ ] Publish to VSCode marketplace

## Features

- Support syntax highlighting for Go Template embedded in `HTML` files.

  ![HTML](./assets/screenshots/html.png)

## Known Issues

1. This extension cannot bypass grammar check error from Language Server.
1. Template syntax highlighting in some languages may need to reload extension. (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> `go-jet-template.reload`)

## Release Notes

[Changelog](./CHANGELOG.md)
