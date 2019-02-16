# Step through array
simple function that returns the next, or previous array value based on the passed in
value. It will return to the begining when it hits the end of the array. 

## Usage

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