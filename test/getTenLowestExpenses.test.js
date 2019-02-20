import { expect } from 'chai'
import { getTenLowestExpenses } from '../src/common/expenses'

describe('#getTenLowestExpenses()', () => {
  [
    {input: [
      {title: 'One', amount: {value: -20.0}},
      {title: 'Two', amount: {value: -150.0}},
      {title: 'Three', amount: {value: -100.0}},
      {title: 'Four', amount: {value: -34.0}}, 
      {title: 'Five', amount: {value: -99.0}},
      {title: 'Six', amount: {value: -1000.0}},
      {title: 'Seven', amount: {value: -220.0}},
      {title: 'Eight', amount: {value: -5.0}},
      {title: 'Nine', amount: {value: -98.0}},
      {title: 'Ten', amount: {value: -11.0}},
      {title: 'Eleven', amount: {value: -300.0}}
      ],
     expectedOutput: [
      {title: 'Eight', amount: {value: -5.0}},
      {title: 'Ten', amount: {value: -11.0}},
      {title: 'One', amount: {value: -20.0}},
      {title: 'Four', amount: {value: -34.0}}, 
      {title: 'Nine', amount: {value: -98.0}},
      {title: 'Five', amount: {value: -99.0}},
      {title: 'Three', amount: {value: -100.0}},
      {title: 'Two', amount: {value: -150.0}},
      {title: 'Seven', amount: {value: -220.0}},
      {title: 'Eleven', amount: {value: -300.0}}
     ]},
  ].forEach(testParams => {
  	it(`${testParams.input} should return ${testParams.expectedOutput}`, () => {
  	  expect(getTenLowestExpenses(testParams.input)).to.eql(testParams.expectedOutput)
  	})
  }),
    [
    {input: 'Hello', expectedOutput: TypeError},
    {input: [{title: 'One'}], expectedOutput: TypeError},
  ].forEach(testParams => {
    it(`${testParams.input} should return ${testParams.expectedOutput}`, () => {
      expect(() => getTenLowestExpenses(testParams.input)).to.throw(testParams.expectedOutput)
    })
  })
})