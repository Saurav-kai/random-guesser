let gusses =0;
let answer =Math.floor(Math.random() *10 +1);
document.getElementById("submitbutton").onclick= function(){
     let guess= document.getElementById("number").value;
     gusses++;
     if(guess==answer){
        alert(`you win and it took ${gusses} attempts`);
     }else{
        alert("better luck next time")
     }
}