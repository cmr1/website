[![Build Status](https://travis-ci.org/cmr1/website.svg?branch=master)](https://travis-ci.org/cmr1/website)

# CMR1 Website

*Based on [node-express-mongoose-demo](https://github.com/madhums/node-express-mongoose-demo) by [madhums](https://github.com/madhums)*

## Development
1. Build Docker images using `docker-compose`
```bash
docker-compose build
```
2. Run `npm install` inside of built containers
```bash
docker-compose run app npm install
```
    - *This will install to `node_modules` of the host directory since it's mounted to the `/app` dir*
3. Run all Docker containers locally
```bash
docker-compose up
```

## Testing
1. Run test suite inside of `docker-compose`
```bash
docker-compose run app npm test
```

## Deployment
1. Push to GitHub
```bash
git push origin master
```
    - *TravisCI will run tests and deploy if successful*