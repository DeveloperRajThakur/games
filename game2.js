var points1 = document.querySelector(".points1")
var points2 = document.querySelector(".points2")
var points3 = document.querySelector(".points3")
var points4 = document.querySelector(".points4")
var points5 = document.querySelector(".points5")
var points11 = document.querySelector(".points11")
var points12 = document.querySelector(".points12")
var points13 = document.querySelector(".points13")
var points14 = document.querySelector(".points14")
var points15 = document.querySelector(".points15")

var stone1 = document.querySelector(".stone")
var paper1 = document.querySelector(".paper")
var scissor1 = document.querySelector(".scissor")
var stone2 = document.querySelector(".stone1")
var paper2 = document.querySelector(".paper1")
var scissor2 = document.querySelector(".scissor1")

var arr = [points1 , points2, points3, points4, points5]
var arr2 = [points11, points12, points13, points14, points15]

var stonebox = document.querySelector(".stone")

     var score = document.getElementById("score1")
     var score2 = document.getElementById("score2")

     var stone = 0;
     var paper = 1;
     var scissor = 2;
     score.innerHTML = 0;
     score2.innerHTML = 0;

    //  stone 
        function stonegame(){
        
       var random1 = Math.round((Math.random() * 2.5))
        stone1.classList.add("yellow")
        setTimeout(() => {
          stone1.classList.remove("yellow");
        }, 2000);

          if(random1 == stone){
             console.log("draw")
            stone2.classList.add("yellow")
            setTimeout(() => {
              stone2.classList.remove("yellow");
            }, 2000);
          }

          else if(random1 == scissor){
              console.log("stone wins")
              score.innerHTML++
              if(score.textContent == 5){
                alert("You won")
              }
              scissor2.classList.add("green")
              setTimeout(() => {
                scissor2.classList.remove("green");
              }, 2000);
              for(var i = score.innerHTML - 1; i < arr.length; i++){
                arr[i].style.backgroundColor = "green";
                return arr[i];       
              }    
            }

          else{
              console.log("stone loses")
              paper2.classList.add("red")
              setTimeout(() => {
                paper2.classList.remove("red");
              }, 2000);
              score2.innerHTML++;
              if(score2.textContent >= 5){
                alert("You Lose")
              }
              for(var i = score2.innerHTML - 1; i < arr.length; i++){
                arr2[i].style.backgroundColor = "red";
                return arr2[i];
              }
          }
      
        }


        //paper
     function papergame(){
      
       var random1 = Math.round((Math.random() * 2.5))
       paper1.classList.add("yellow")
       setTimeout(() => {
         paper1.classList.remove("yellow");
       }, 2000);

          if(random1 == paper){
             console.log("draw")
             paper2.classList.add("yellow")
             setTimeout(() => {
              paper2.classList.remove("yellow");
            }, 2000);
          }

          else if(random1 == stone){
              console.log("paper wins")
              stone2.classList.add("green")
              setTimeout(() => {
                stone2.classList.remove("green");
              }, 2000);
              score.innerHTML++;
              if(score.textContent == 5){
                alert("You wonn")
              }
             for(var i = score.innerHTML - 1; i < arr.length; i++){
               arr[i].style.backgroundColor = "green";
               return arr[i];break;
             }
          }
          else{
              console.log("paper loses")
              score2.innerHTML++;
              if(score2.textContent >= 5){
                alert("You Lose")
              }
              scissor2.classList.add("red")
              setTimeout(() => {
                scissor2.classList.remove("red");
              }, 2000);
              for(var i = score2.innerHTML - 1; i < arr.length; i++){
                arr2[i].style.backgroundColor = "red";
                return arr2[i];
              }
          }
        }
      // Scissor
        function scissorgame(){
          
       var random1 = Math.round((Math.random() * 2.5))
        scissor1.classList.add("yellow")
        setTimeout(() => {
          scissor1.classList.remove("yellow");
        }, 2000);

          if(random1 == scissor){
             console.log("draw")
             scissor2.classList.add("yellow")
             setTimeout(() => {
              scissor2.classList.remove("yellow");
            }, 2000);
          }

          else if(random1 == paper){
              console.log("scissor wins")
              paper2.classList.add("green")
              setTimeout(() => {
                paper2.classList.remove("green");
              }, 2000);
              score.innerHTML++;
              if(score.textContent >= 5){
                alert("You won")
              }
              
              console.log(score.textContent + " " + score2.textContent)
              for(var i = score.innerHTML - 1; i < arr.length; i++){
                arr[i].style.backgroundColor = "green";
               return arr[i];
              }
          }
          else{
              console.log("scissor loses")
              score2.innerHTML++;
              if(score2.textContent >= 5){
                alert("You Lose")
              }
              stone2.classList.add("red")
              setTimeout(() => {
                stone2.classList.remove("red");
              }, 2000);
              for(var i = score2.innerHTML - 1; i < arr.length; i++){
                arr2[i].style.backgroundColor = "red";
                return arr2[i];
              }
          }
        }


        var body = document.querySelector("body")

        function black(){
          body.style.background = "black"
          stone1.style.backgroundColor = "rgb(255, 107, 107)";
          paper1.style.backgroundColor = "rgb(255, 107, 107)";
          scissor1.style.backgroundColor = "rgb(255, 107, 107)";
          
          stone2.style.backgroundColor = "greenyellow";
          paper2.style.backgroundColor = "greenyellow";
          scissor2.style.backgroundColor = "greenyellow";

          score.style.color = "white";
          score2.style.color = "white";
        }

        function white(){
          body.style.background = "white"

          stone1.style.backgroundColor = "white";
          paper1.style.backgroundColor = "white";
          scissor1.style.backgroundColor = "white";
          
          stone2.style.backgroundColor = "white";
          paper2.style.backgroundColor = "white";
          scissor2.style.backgroundColor = "white";

          score.style.color = "black";
          score2.style.color = "black";
        }
    
        
      
        
       
