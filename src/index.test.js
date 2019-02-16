import {expect} from 'chai'
import stepThroughArray from './index'

const mockValue = 'tigers'
const mockValueEnd = 'sharks'
const mockArray = ['tigers', 'bears', 'lions', 'sharks']


describe('STEP THROUGH ARRAY: Success Tests', () => {
	
	it('it should step to the next value', () => {
		const  returnedValue = stepThroughArray(mockValue, mockArray)
		expect(returnedValue).to.be.eql('bears')
		const  returnedValueImplicit = stepThroughArray(mockValue, mockArray, false)
		expect(returnedValue).to.be.eql('bears')
	})

	it('it should step to the previous value', () => {
		const  returnedValue = stepThroughArray(mockValueEnd, mockArray, true)
		expect(returnedValue).to.be.eql('lions')
	})

	it('it should loop to the beginning', () => {
		const  returnedValue = stepThroughArray(mockValueEnd, mockArray)
		expect(returnedValue).to.be.eql('tigers')
	})

	it('it should loop to the end in reverse mode', () => {
		const  returnedValue = stepThroughArray(mockValue, mockArray, true)
		expect(returnedValue).to.be.eql('sharks')
	})

})

describe('STEP THROUGH ARRAY: Failure Tests', () => {
	it('should fail gracefully', () => {
		const  returnedValue = stepThroughArray()
		expect(returnedValue).to.be.false
	})
	
	it('should fail gracefully when a non valid array value is passed', () => {
		const  returnedValue = stepThroughArray('panthers', mockArray)
		expect(returnedValue).to.be.false
	})

	it('should fail gracefully when wrong values are passed', () => {
		const  returnedValue = stepThroughArray(mockArray, mockValue, 'string')
		expect(returnedValue).to.be.false
	})
	
	it('should fail gracefully when a non boolean is passed', () => {
		const  returnedValue = stepThroughArray(mockValue, mockArray, 'true')
		expect(returnedValue).to.be.eql('bears')
	})

})