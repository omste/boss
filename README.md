# Omri Suleiman demo project
`` omrisuleiman15 at gmail d0t com ``

# Uses React to get some github GQL data


## to run 

clone repo, cd to root

``` npm -i ```

copy supplied .env file

## then

For dockering

```docker build . -t dockerized-react```

```docker run -p 3000:3000 -d dockerized-react```

or

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.


### `npm run lint`

Checks linting for project

### `npm run lint:fix`

Fixes linting for project

### `npm run format`

Pretifies things

## Known Issues

* some high severity npm issues that need a fixing
* set up (sprint zero style work) of eslint, husky, prettier, module compatibility, npm version took too long
* unit test coverage is sketchy as
* no e2e tests (cypress is my fave for this)

## What I would like if this were a real project

* component library outside of main src folders
* refactor data fetching out of the components
* same goes for queries, types, and utils
* build process quality gates e2e testing, sonarcube, lighhouse (or other WACG) and perhaps browserstack
* ordering, array slicing, a chat with the PO about how much should be SSR, etc.


