

let secondss = document.querySelector(`.seconds`)
let minss = document.querySelector(`.mins`)
let hourss = document.querySelector(`.hours`)

function handmove() {
    let now = new Date();
    let seconds = now.getSeconds()
    let secondsdegrees = ((seconds / 60) * 360) + 90
    secondss.style.transform = `rotate(${secondsdegrees}deg)`
    let mins = now.getMinutes();
    let minsdegrees = ((mins / 60) * 360) + 90
    minss.style.transform = `rotate(${minsdegrees}deg)`

    let hours = now.getHours();
    let houdrsdegrees = ((hours/ 60) * 360) + 90
    hourss.style.transform = `rotate(${houdrsdegrees}deg)`
}
setInterval(handmove,1000)


let fixed = document.querySelector(`.fixed`)
function time (){
let now =new Date()
let seconds = now.getSeconds()
let mins = now.getMinutes();
let hours = now.getHours();
if(seconds<10){
fixed.innerHTML = ` means  => ${hours} :${mins} :0${seconds}`
}else{
    fixed.innerHTML = `means  => ${hours} :${mins} :${seconds}`

}
if(mins<10){
    fixed.innerHTML = ` means  => ${hours} :0${mins} :${seconds}`
    }else{
        fixed.innerHTML = `means  => ${hours} :${mins} :${seconds}`
    
    }
}
setInterval(time,1000)