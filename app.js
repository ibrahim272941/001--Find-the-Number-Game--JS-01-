const num = document.getElementById('number')
const check = document.getElementById('button')
const congrat = document.getElementById('congrats')
const attempt = document.getElementById('attempt')
const message = document.querySelector('#attempt')
const img = document.querySelector('#congrats')
const imgWarn = document.querySelector('#attempt-img')
const imgOver = document.querySelector('#gameover')

let count = 5
let guess = Math.floor(Math.random() * 10)
console.log(guess)

check.addEventListener('click',function() {
    let guessValue = num.value
    if(guessValue=== '' || guessValue > 10 || guessValue < 1){
        writeMessage('Please Enter a Valid Value','rgb(128, 9, 9)')
        imgWarn.style.display='none'
    }
    else if (guessValue == guess){
        writeMessage('Congrats !!!!!   You have Won' , 'rgb(10, 248, 30)')
        img.style.display='block'

        num.style.display='none'
       check.style.display='none'
        imgWarn.style.display='none'
    }
    else{
        count-=1
        if(count==0){
            num.style.display='none'
            check.style.display='none'
           writeMessage('Es tut mir sehr leid !!! GAME OVER!!!'  , 'red' ,'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif')
           imgOver.style.display='block'
           imgWarn.style.display='none'
          
        }
        else{
            writeMessage(`You had ${count} attempt`  , 'rgb(229, 253, 14)' ,'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif')
            imgWarn.style.display='block'
            imgWarn.style.transition='4s'
            
        }
     
    }
    
   
});

function writeMessage(msg ,color,font){
    message.textContent=msg;
    message.style.color=color;
    message.style.fontFamily=font
}




    
        

    
    