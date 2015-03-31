# Flux React Now!

A super simple and re-usable boilerplate for a flux/react application.

## Getting Started

To get started with boilerplate, please make sure you have NodeJS installed.  

```bash

sudo npm install webpack -g
mkdir myfluxapp
wget -qO- -O tmp.zip http://git.gnbox.org/mmcfarland/lampy/repository/archive.zip?ref=master && unzip tmp.zip -d myfluxapp && rm tmp.zip
cd myfluxapp
webpack
```

A new Main.js file will be available in the public_html folder.

## Hosting

Your files will be static in the public_html directory, to be used with hosting like nginx, apache, or express.

## Contributing

Please read the CONTRIBUTING.md

## Attribution

Flux React Now! uses the following modules:

* NodeJS 
* HTML5 Boilerplate
* Webpack
* Webpack JSX Loader
* Webpack Style Loader
* jQuery