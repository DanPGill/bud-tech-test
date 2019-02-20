import { expect } from 'chai'
import { getExpensesOnly } from '../src/common/expenses'

describe('#getExpensesOnly()', () => {
  [
    {input: [{title: 'One', amount: {value: -20.0}}, {title: 'Two', amount: {value: -150.0}}, {title: 'Three', amount: {value: 100.0}}], expectedOutput: [{title: 'One', amount: {value: -20.0}}, {title: 'Two', amount: {value: -150.0}}]},
  ].forEach(testParams => {
  	it(`${testParams.input} should return ${testParams.expectedOutput}`, () => {
  	  expect(getExpensesOnly(testParams.input)).to.eql(testParams.expectedOutput)
  	})
  }),
  [
    {input: 'Hello', expectedOutput: TypeError},
    {input: [{title: 'One'}], expectedOutput: TypeError},
  ].forEach(testParams => {
  	it(`${testParams.input} should return ${testParams.expectedOutput}`, () => {
  		expect(() => getExpensesOnly(testParams.input)).to.throw(testParams.expectedOutput)
  	})
  }),
  [
    {input: 1000, expectedOutput: []},
    {input: [{title: 'One', amount: {value: 100}}, {title: 'Two', amount: {value: 5000}}], expectedOutput: []}
  ].forEach(testParams => {
  	it(`${testParams.input} should return ${testParams.expectedOutput}`, () => {
  		expect(getExpensesOnly(testParams.input)).to.eql(testParams.expectedOutput)
  	})
  })
})