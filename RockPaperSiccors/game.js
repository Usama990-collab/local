let you_score=0;
let comp_score=0;

let choices=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let user_score= document.querySelector("#you");
let sys_score= document.querySelector("#comp");

let gencompchoice=()=>{
    let option=["Rock", "Paper", "Sciccors"];
    let idxchoice=Math.floor(Math.random()*3);
    return option[idxchoice];
}

 

let showWinner=(userWins, userchoice, compchoice)=>{
    if(userWins){
        console.log("you have won the match");

        msg.innerText= `You Win! your ${userchoice} beat comp ${compchoice} `;
        msg.style.backgroundColor="green";        
        you_score++;
        user_score.innerText=you_score;
    

    }
    else {
        console.log("you have lost the match");
        
        msg.innerText=`You Loose! comp ${compchoice} beat your ${userchoice}`;
        comp_score++;
        sys_score.innerText=comp_score;
        msg.style.backgroundColor="red";
    
        
    }
      
}


let playgame=(userchoice)=>{
    console.log("user choice=", userchoice);
   
    let compchoice= gencompchoice();
    console.log("comp choice=", compchoice);

    if(userchoice===compchoice){
        console.log("This match has been draw");
        msg.innerText="Draw Match";
        msg.style.backgroundColor="skyblue"; 
       
    }
    else{
        let userWins=true;
        if(userchoice==="Rock"){
           userWins=compchoice==="Paper"?false:true;
        }
        else if(userchoice==="Paper"){
            userWins=compchoice==="Rock"?true:false;
         }

        else{
            userWins=compchoice==="Rock"?false:true;
        }
        showWinner(userWins, userchoice, compchoice);
    }
    
}


choices.forEach((choices) => {
    choices.addEventListener("click", ()=>{
        let userchoice=choices.getAttribute("id")
        // console.log("choice is clicked", userchoice);
       
        playgame(userchoice);
    })
    
});