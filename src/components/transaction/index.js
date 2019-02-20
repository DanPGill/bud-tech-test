import React from 'react'
import './style.css'

export default transaction => {
  return (
    <div className={'Container'}>
      <p className={'Title'}>{`${transaction.transaction.category_title}`} - </p>
      <p className={'Transaction'}>Description: {`${transaction.transaction.description}`},</p>
      <p className={'Transaction'}>Date: {`${transaction.transaction.date}`},</p>
      <p className={'Transaction'}>Value: {`${transaction.transaction.amount.value}`}</p>
    </div>
  )
}
