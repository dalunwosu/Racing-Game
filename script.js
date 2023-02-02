let containerBox = document.getElementById("game")
let boxDiv = document.getElementById("animate")


let boats = [
    { 
        name: "blueboat",
        image: "url('images/blueboat.png')",
        initialPositionLeft: 90,
        inintialPositionTop: 14,
    },
    { 
        name: "redboat",
        image: "url('images/redboat.png')",
        initialPositionLeft: 98,
        inintialPositionTop: 20,
    },
    { 
        name: "yellowboat",
        image: "url('images/yellowboat.png')",
        initialPositionLeft: 109,
        inintialPositionTop: 25,
    },
    { 
        name: "greenboat",
        image: "url('images/greenboat.png')",
        initialPositionLeft: 118,
        inintialPositionTop: 32,
    },
]

function createBoats(){
    for(let boat in boats){
        boat = boats[boat]
        // console.log(boat)
        let boatDiv = document.createElement("div")
        boatDiv.setAttribute("class", "animate")
        let initialPositionLeft = boat.initialPositionLeft
        let initialPositionTop = boat.inintialPositionTop
        boatDiv.style.left = initialPositionLeft + "vh"
        boatDiv.style.top = initialPositionTop + "vh"
        boatDiv.style.backgroundImage = boat.image
        boatDiv.setAttribute("id", boat.name)
        containerBox.appendChild(boatDiv)
    }
}

createBoats()

function animationBox(){
    let boatDivs = document.querySelectorAll(".animate")
    let id = null
    clearInterval(id);
    for(let boatMove of boatDivs){
        let movementLeft = 0.14;
        let movementTop = 0.07;
        boatMove.style.left = parseFloat(boatMove.style.left) - movementLeft + "vh";
        boatMove.style.top = parseFloat(boatMove.style.top) + movementTop + "vh";
        if (parseFloat(boatMove.style.left) < 5.6) {
          clearInterval(id);
          alert(`${boatMove.id} wins!`);
        }
        // moving = setInterval(moveBoats, Math.floor((Math.random()*5)+Math.random(0,60)))
        // let movementLeft = 0.14
        // let movementTop = 0.07
        // // function moveBoats() {
        //     // if (movementLeft <  5.6) {
        //     // clearInterval(id);
        //     // } else {
        //     console.log("hello")
        //     boatMove.style.top =  parseInt(boatMove.style.top) - movementTop + "vh";
        //     boatMove.style.left =  parseInt(boatMove.style.left)- movementLeft + "vh";
        }
    }


function moveBoats(boat){
    console.log(boat.style.left)
    let movementLeft = 0.14 
    let movementTop = 0.07 
    boat.style.left = boat.style.left - movementLeft
    boat.style.top = boat.style.top - movementTop
    if(boat.style.lef < 5.6){
        clearInterval(moving)
// =======
// let initialPositionLeft = 90;
// let inintialPositionTop = 14
// let animationInterval = setInterval(animationBox, Math.floor((Math.random()*5)+Math.random(0,60)))

// function animationBox(){
//     inintialPositionTop +=0.07
//     initialPositionLeft -= 0.14
//     boxDiv.style.left = initialPositionLeft + "vh";
//     boxDiv.style.top = inintialPositionTop + "vh";
//     // boxDiv.style.transform = "rotate("+initialPosition+"deg)"
//     // boxDiv.style.width = initialPosition + "px"
//     // console.log(initialPosition)
//     if(initialPositionLeft < 5.6){
//         console.log("hello")
//         clearInterval(animationInterval);

    }
}

// let boatblue = document.querySelector("#boatblue")
let animationInterval = setInterval(animationBox, Math.floor((Math.random()*5)+Math.random(0,60)))

let buttonStart = document.createElement("button")
buttonStart.textContent = "Start Game";
buttonStart.addEventListener("click", animationBox)
let firstSection = document.getElementById("userSection")
firstSection.appendChild(buttonStart)







