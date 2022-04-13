import React from 'react'

const Card = (props) => {
    const classes = `flex flex-col flex-grow content-center h-32 mx-1 p-2 ${props.bg}`
  return (
    <div className={classes}>
        <p className="flex"><span className="mr-1">{props.name}</span> {props.icon}</p>
        <p className="mt-auto text-right"><span className="counter" data-target="50000"> {props.amount} { props.suscriber ? props.suscriber.length : ''} </span> {props.amount && 'XAF'}</p>
    </div>
  )
}

export default Card