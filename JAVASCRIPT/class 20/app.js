// console.log("hello world")

// console.log(1)
// console.log(2) //server request
// console.log(3)


// console.log(1)

// setTimeout(function () {
//     console.log(2)
// }, 5000)

// console.log(3)


// console.log(1)
// console.log(2) //server request
// console.log(3)

// setTimeout(function(){
//     console.log("hello world after 3 sec")
// } , 3000 )

// setInterval(function () {
//     console.log("run after every 3 sec")
// }, 3000)


// var counter = 0
// var myInterval = setInterval(foo, 1000)

// function foo() {
//     counter++
//     console.log("yeh function run krty raho!")
//     if(counter ===5){
//        clearInterval(myInterval)
//     }
// }




var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var mSecHeading = document.getElementById("mSecHeading")


var min = 0
var sec = 0
var msec = 0
var interval;


function startTimer() {

    interval = setInterval(timer, 10)


}


function timer() {
    msec++
    mSecHeading.innerHTML = msec
    if (msec == 100) {
        msec = 0
        console.log("1 sec")
        sec++
        secHeading.innerHTML = sec
        if (sec == 60) {
            sec = 0
            min++
            minHeading.innerHTML = min
        }
    }
}


function stopTImer(){
    clearInterval(interval)
}

function resetTimer(){
    clearInterval(interval)
    min= 0
    sec=0
    msec=0

    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    mSecHeading.innerHTML = "00"

}