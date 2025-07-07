import React from 'react'
import Child3 from './Child3'

const Child2 = ({count}) => {
  console.log("child 2")
    return (
        <div>
            Child2
            <Child3 count={count} />
        </div>
    )
}

export default Child2
