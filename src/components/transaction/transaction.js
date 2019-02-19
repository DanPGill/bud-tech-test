import React from 'react'

export default transaction => {
  return (
	<div style={{display: 'flex', flexDirection: 'row', padding: 20}}>
	  <p>Title: {`${transaction.transaction.category_title}`}</p>
	  <p>Description: {`${transaction.transaction.description}`}</p>
	  <p>Date: {`${transaction.transaction.date}`}</p>
	  <p>Value: {`${transaction.transaction.amount.value}`}</p>
	</div>
  )
}