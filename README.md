[![Build Status](https://travis-ci.org/telemark/avtale-distribusjon.svg?branch=master)](https://travis-ci.org/telemark/avtale-distribusjon)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# avtale-distribusjon

Distribute avtaler via SvarUT

## Setup

Change the [docker.env](docker.env) to match your environment.

```sh
NODE_ENV=production
CALLBACK_DIRECTORY_PATH=test/directories/callback
DONE_DIRECTORY_PATH=test/directories/done
ERRORS_DIRECTORY_PATH=test/directories/errors
RETRIES_DIRECTORY_PATH=test/directories/retries
QUEUE_DIRECTORY_PATH=test/directories/queue
AGREEMENTS_LOG_URL=https://log.service.io/agreements
SVARUT_JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
SVARUT_SERVICE_URL=https://api.svarut.no/sendForsendelse
PAPERTRAIL_HOSTNAME=avtale-distribusjon
PAPERTRAIL_HOST=logs.papertrailapp.com
PAPERTRAIL_PORT=12345
```

## Build

```sh
$ docker build -t avtale-distribusjon .
```

## Usage

```sh
$ docker run --env-file=docker.env --volume=/test/directories/queue:/src/test/directories/queue --rm avtale-status
```

This will start a container. Distribute the documents. Stop the container and remove it.

## Releated

- [avtale-generate-grunnlag](https://github.com/telemark/avtale-generate-grunnlag)
- [avtale-generator](https://github.com/telemark/avtale-generator)
- [robot-convert-docx-to-pdf](https://github.com/telemark/robot-convert-docx-to-pdf)
- [robot-post-payload](https://github.com/telemark/robot-post-payload)
- [avtale-logg](https://github.com/telemark/avtale-logg)

## License

[MIT](LICENSE)

![Robohash image of avtale-distribusjon](https://robots.kebabstudios.party/avtale-distribusjon.png "Robohash image of avtale-distribusjon")