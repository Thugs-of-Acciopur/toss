// selections: 
const btns = document.querySelectorAll('button');
const output = document.querySelector('.output');
const message = document.querySelector('.message');

// console.log(btns);

// btns[0].addEventListener() // head button 

// btns[1].addEventListener() // body button

// console.log("File running")
// for(let t of btns){
//     console.log("I am running");
//     //  console.log(t);
//     // t => head button 
//     // t =>  tail button
//     // console.log(t);
//     t.addEventListener("click", ()=>performToss(t)) 
//     // callback function
// }


for(let i = 0; i<=btns.length-1; i++){
    btns[i].addEventListener("click", ()=>performToss(btns[i]))
}


let userScore = 0;
let computerScore = 0;
function performToss(btnClicked){
    console.log("Button clicked", btnClicked);
    let selectedValue = btnClicked.innerText; // "Head" or "Tail

    let choices = ["head", "tail"];
    let randomIndex = parseInt(Math.random()*choices.length);// 0,1
    let tossValue = choices[randomIndex];

    console.log("Selected Value", selectedValue, "Toss Value", tossValue);

    if(tossValue == selectedValue.toLowerCase()){
        userScore = userScore + 1;
        message.innerHTML = "<p> User wins </p>"
        // message.style.color = "green";
        // message.style.backgroundColor = "yellow";
        message.style.cssText = `
        color: green;
        background-color: yellow;
        text-align: center;
        `
    }
    else{
        computerScore = computerScore + 1;
        message.innerHTML = "<p> Computer wins </p>"
        // message.style.color = "red";
        // message.style.backgroundColor = "black";
        message.style.cssText = `
            color: red;
            background-color: black;
            text-align: center;
        `
    }

    output.innerHTML = `
    User Score: ${userScore} 
    <br>
    Computer Score: ${computerScore}`
   
}







// let arr = ["apple", "mango", "bananna", "cherry", "lichi"]

// let random_index = parseInt(Math.random()*arr.length) //0,1,2,3,4,

// console.log(random_index) 

// console.log(arr[random_index])



// align-items => alignItems  // camel Case
// font-size => fontSize