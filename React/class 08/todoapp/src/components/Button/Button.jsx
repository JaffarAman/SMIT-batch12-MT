import React from 'react'
import style from "./button.module.css"
console.log("style", style)
const Button = (props) => {
    // console.log("props", props)
    const { text = "btn", handleClick = () => { } } = props
    // console.log(handleClick, "handleClick")
    return (
        <button onClick={handleClick} className={style.btn} >
            {text}
        </button>
    )
}

export default Button


// function add(num1 , num2 = 0){
//     return num1 +num2
// }
// add(100 )