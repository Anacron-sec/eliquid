# Eliquid

This project provides utility functions related to eliquids, specifically to help in create the correct liquid composition

## Installation (not yet published)

```bash
npm install eliquid
```

## Usage
First, import the calculateEliquidComposition function and the necessary interfaces:
```js
const { calculateEliquidComposition } = require('eliquid');
import { calculateEliquidComposition } from 'eliquid';
```


Then, define your parameters and call the function:
```js
const parameters = {
    finalQuantityMl: 100,
    finalNicotineMgMl: 4,
    vgPercentage: 50,
    pgPercentage: 50,
    nicotineBasesMgMl: 20,
    aromaPercentage: 10,
};

const composition = calculateEliquidComposition(parameters);

console.log(composition);
```

This will output:
```js
{
    vgMl: 40,
    pgMl: 30,
    aromaMl: 10,
    nicotineMl: 20,
}
```


