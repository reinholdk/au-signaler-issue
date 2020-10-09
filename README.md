# `au-signaler-issue`

This is to demonstrate an issue when testing an Aurelia component library where components are registered as global resources and using `signal` binding behaviour.

The problem occurs when unit-testing the components using `aurelia-testing` plugin. In this example two components are using `signal` binding behaviour with different signal names. There are two test cases for component `parent1`, and `parent2`.
https://github.com/reinholdk/au-signaler-issue/blob/fb030b91fe521f81c146549f7493c2f144317559/test/unit/app.spec.js#L26
https://github.com/reinholdk/au-signaler-issue/blob/fb030b91fe521f81c146549f7493c2f144317559/test/unit/app.spec.js#L45
In each test case a new aurelia instance is bootstrapped.
Signals stop working for the test that runs second and are not received in the respective bindings (of component `comp2`).
https://github.com/reinholdk/au-signaler-issue/blob/fb030b91fe521f81c146549f7493c2f144317559/src/comp2.html#L3

The second test succeeds when running standalone (e.g. using `fit(...)`).
Both components `parent1`, and `parent2` are registered as global resources. If global registration is omitted, the problem does not occur.
https://github.com/reinholdk/au-signaler-issue/blob/fb030b91fe521f81c146549f7493c2f144317559/src/index.js#L4

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

## Run dev app

Run `npm start`, then open `http://localhost:8080`

You can change the standard webpack configurations from CLI easily with something like this: `npm start -- --open --port 8888`. However, it is better to change the respective npm scripts or `webpack.config.js` with these options, as per your need.

To enable Webpack Bundle Analyzer, do `npm run analyze` (production build).

To enable hot module reload, do `npm start -- --hmr`.

To change dev server port, do `npm start -- --port 8888`.

To change dev server host, do `npm start -- --host 127.0.0.1`

**PS:** You could mix all the flags as well, `npm start -- --host 127.0.0.1 --port 7070 --open --hmr`

For long time aurelia-cli user, you can still use `au run` with those arguments like `au run --env prod --open --hmr`. But `au run` now simply executes `npm start` command.

## Build for production

Run `npm run build`, or the old way `au build --env prod`.

## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.
