import React from 'react'
import Child4 from './Child4'

const Child3 = ({count}) => {
  console.log("child 3")
    return (
        <div>
            Child3
            <Child4 count={count} />
        </div>
    )
}

export default Child3
