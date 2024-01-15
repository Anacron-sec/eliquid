# Eliquid

This project provides utility functions related to eliquids, specifically to help in create the correct liquid composition

## Installation

```bash
npm install eliquid
```

## Usage
First, import the calculateEliquidComposition function and the necessary interfaces:
```js
const { calculateEliquidComposition } = require('eliquid');
// or ES6
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
    flavorPercentage: 10,
};

const composition = calculateEliquidComposition(parameters);

console.log(composition);
```

This will output:
```js
{
    vgMl: 40,
    pgMl: 30,
    flavorMl: 10,
    nicotineMl: 20,
}
```

There are also simple utility functions for vg/pg string to object (and vice-versa conversion):
```js
const { parseVgPgString, convertVgPgToString} = require('eliquid');

const vgPgString = '50/50';
const vgPgStringToObject = parseVgPgString(vgPgString);
console.log(vgPgStringToObject);

// This will output {vg: 50, pg: 50}

const vgPg = { vg: 50, pg: 50 };
const vgPgStringed = convertVgPgToString(vgPg);
console.log(vgPgStringed);

// This will output "50/50"

```

