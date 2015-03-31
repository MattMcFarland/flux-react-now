# Flux React Now!

A super simple and re-usable boilerplate for a flux/react application.

## Getting Started

```bash

sudo npm install webpack -g
mkdir myfluxapp
wget -qO- -O tmp.zip http://git.gnbox.org/mmcfarland/lampy/repository/archive.zip?ref=master && unzip tmp.zip -d myfluxapp && rm tmp.zip
cd myfluxapp
webpack
```

## build application

```bash
webpack
```

A new Main.js file will be available in the public_html folder.

## Hosting

Your files will be static in the public_html directory, to be used with hosting like nginx, apache, or express.

## Contributing

Please read the CONTRIBUTING.md