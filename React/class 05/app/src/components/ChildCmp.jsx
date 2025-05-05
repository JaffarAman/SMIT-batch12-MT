import React from 'react'

const ChildCmp = (props) => {
    console.log("props", props)
    const { email, age, userName, getChildValue } = props


    const childData = "CHILD DATA1"

    return (
        <div>
            <h1>CHILD CMP</h1>
            <h1>HELLO :  {userName} </h1>
            <h1>AGE :  {age} </h1>
            <h1>EMAIL :  {email} </h1>

            <button onClick={() => getChildValue(childData)} >CLICK!</button>

        </div>
    )
}

export default ChildCmp
