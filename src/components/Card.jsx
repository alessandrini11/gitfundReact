import React from 'react'

const Card = (props) => {
    const classes = `flex flex-col w-1/3 h-20 mx-1 p-2 ${props.bg}`
  return (
    <div className={classes}>
        <p className="flex"><span className="mr-1">{props.name}</span> {props.icon}</p>
        <p className="mt-auto ml-auto"><span className="counter" data-target="50000">0</span> XAF</p>
    </div>
  )
}

export default Card