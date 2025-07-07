import React from 'react'
import Child2 from './Child2'

const Child1 = ({ count }) => {
  console.log("child 1")

    return (
        <div>
            Child1
            <Child2 count={count} />
        </div>
    )
}

export default Child1
