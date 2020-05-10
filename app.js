var playing=false;
var score;
var step;
var trialsleft;
var action;
var fruits=["apple","banana","cherries","grapes","mango","orange","peach","pear","watermelon"];
    $(function(){
        
        //click on start reset button
      $("#startreset").click(function(){
     
          //if we are playing
          if(playing==true){
          
              //   relod the page
              location.reload();
          }
          
          //if we are not playing
          else{
              
              playing=true;//game initated
                
              
          
              //score set to zero
              score=0;
              $("#scorevalue").html(score);
              
               //showing trial left box
              $("#trialsleft").show();
              trialsleft=3;
              
              //function addheart
              addheart();
              
              //hide gameover box
              $("#gameover").hide();
              
              //reset game
              $("#startreset").html("Reset Game");
              
              //start sending fruits
              startaction();
              
          }
          
      });  
// slice a fruit
        // play sound 
        //explode fruit
$("#fruit1").mouseover(function(){
        score++;
        $("#scorevalue").html(score);
       // document.getElementById("slicesound").play();
        $("#slicesound")[0].play();//play sound
        
        //stop fruit
        clearInterval(action);
    
        //hide fruit
        $("#fruit1").hide("explode",500);//slice fruit//to work this fn embedd jquery ui
        
        //send new fruit & to wait for 500 ms
    
        setTimeout(startaction,500);//wait for 500 ms
        
});
  
function addheart(){
    $("#trialsleft").empty();
    for(var i=0;i<trialsleft;i++){
                  $("#trialsleft").append('<img src="heart.png" class="life">');
              }
}

function startaction(){
    //generate a fruit
    $("#fruit1").show();
    
    choosefruit(); // choose a random fruits
    
    $("#fruit1").css({
        //fruit width 100px
        //fruit container 650px
        'left': Math.round(Math.random()*550),
        'top' : -50 
    });
    
    
        //random position
        //generatr random step
        step =1+ Math.round(5*Math.random());
      
    
//move fruit by 1 step    
action = setInterval(function(){
        $("#fruit1").css('top',$("#fruit1").position().top+step);
            //CHECK if fruit is too low
            if($("#fruit1").position().top>$("#fruitcontainer").height()){    
                    //check any trial is left
                        if(trialsleft>1){
                                    //generate a fruit
                                    $("#fruit1").show();

                                    choosefruit(); // choose a random fruits

                                    $("#fruit1").css({
                                        //fruit width 100px
                                        //fruit container 650px
                                        'left': Math.round(Math.random()*550),
                                        'top' : -50 
                                    });


                                        //random position
                                        //generatr random step
                                        step =1+ Math.round(5*Math.random());
                            
                            //reduce no of trials by 1
                            trialsleft--;
                            
                            //addheart function: populate trials left box
                            addheart();
                            }
                else{
                    //game over
                    playing=false;
                    $("#gameover").show();
                    $("#startreset").html("Start Game");
                     $("#gameover").html("<p>Game Over</p><p>your score is "+score+"</p>");
                    $("#trialsleft").hide();
                        stop();
                }
                }
        },10);
}
    function choosefruit(){
        //generate random fruit
        $("#fruit1").attr('src',fruits[Math.round(8*(Math.random()))]+'.png')
    }

    //stop dropping box
    function stop(){
        
        //hide gameover box
                 $("#fruit1").hide();
    }
    
});