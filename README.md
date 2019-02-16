# Step through array
[![Build Status](https://travis-ci.com/leighs-hammer/step-through-array.svg?branch=master)](https://travis-ci.com/leighs-hammer/step-through-array)
[![codecov](https://codecov.io/gh/leighs-hammer/step-through-array/branch/master/graph/badge.svg)](https://codecov.io/gh/leighs-hammer/step-through-array)
[![Known Vulnerabilities](https://snyk.io/test/github/leighs-hammer/step-through-array/badge.svg?targetFile=package.json)](https://snyk.io/test/github/leighs-hammer/step-through-array?targetFile=package.json)
![](https://img.shields.io/twitter/follow/@leighb4rnes.svg?label=follow&style=social)

simple function that returns the next, or previous array value based on the passed in
value. It will return to the begining when it hits the end of the array. 

## Usage

### Standard forwards and backwards

```
	import stepThroughArray from 'step-through-array' 

		or common JS require

	const stepThroughArray = require('step-through-array' )

	let current = 'tigers'
	const array = ['tigers', 'bears', 'lions']
	const reverse = false // optional passing true will step backwards

	current = stepThroughArray(current, array, reverse)

	// current === 'bears'

	current = stepThroughArray(current, array, reverse)
	// current === 'lions'


```

### Looping

If the next value is undefined it will return to the beginning or the end respectively.