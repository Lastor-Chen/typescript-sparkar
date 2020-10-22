# typescript-sparkar
A TypeScript sample in SparkAR v99.

## How to Use
Clone or Download this repo.

Open this project by SparkAR v99 and copy `baseURL` form `./scripts/tsconfig.json` to `./tsconfig.json`.<br>
Then restart SparkAR.
```
// ./tsconfig.json

{
  "baseUrl": "Copy from scripts/tsconfig.json baseURL",
  "typeRoots": [
    "The same with baseURL"
  ],
}
```

Write your code in `./src/*.ts` and compile they via TypeScript command.
```
// Compile once
$ tsc

// Watch
$ tsc -w
```

#### Note
When compile to JavaScript, TypeScript will complain some errors from SparkAR's type files, because there have illegal function declare.

## Dependencies
NodeJS and TypeScript is required.

```
$ npm -g install typescript
```
