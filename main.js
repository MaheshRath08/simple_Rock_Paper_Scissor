let intro = document.querySelector(".ask-container")
let startBtn = document.getElementById("start")
let main = document.querySelector(".main-container")
let btn = document.querySelectorAll(".main-container button")

let messageEl = document.querySelector(".message")
let pChoice = document.querySelector(".player")
let cChoice = document.querySelector(".comp")

let pScore = document.querySelector(".pScore")
let cScore = document.querySelector(".cScore")

let cList = ["rock", "paper", "scissor"]
let message = ""
let player = 0
let comp = 0

function randChoice(){
    let idx = Math.floor(Math.random()*3)
    return cList[idx]
}

startBtn.addEventListener("click",()=>{
    intro.classList.add("fadeout")
    main.classList.remove("fadeout")
})

btn.forEach(e =>{
    e.addEventListener("click", ()=>{
        let compChoice = randChoice()
        theGame(e.textContent, compChoice)
    })
})

function theGame(p,c){
    if(p===c){
        message = "TIE"
    }else{
        if(p==="scissor"){
            if(c==="rock"){
                message = "Computer Win!"
                comp++
            }else{
                message = "Player Win"
                player++
            }
        }
        if(p==="rock"){
            if(c==="paper"){
                message = "Computer Win!"
                comp++
            }else{
                message = "Player Win"
                player++
            }
        }
        if(p==="paper"){
            if(c==="scissor"){
                message = "Computer Win!"
                comp++
            }else{
                message = "Player Win"
                player++
            }
        }
    }
    messageEl.textContent = message
    pChoice.textContent = p
    cChoice.textContent = c
    pScore.textContent = player
    cScore.textContent = comp

    animate()
}

function animate(){
    pChoice.classList.add("anim1")
    cChoice.classList.add("anim1")
    messageEl.classList.add("anim2")
    pScore.classList.add("anim3")
    cScore.classList.add("anim3")
    
    setTimeout(() => {
        pChoice.classList.remove("anim1")
        cChoice.classList.remove("anim1")
        messageEl.classList.remove("anim2")
        pScore.classList.remove("anim3")
        cScore.classList.remove("anim3")
    }, 410);
}
