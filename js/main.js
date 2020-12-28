    var foodList = ['APPLE', 'ORANGE', 'BANANA', 'STRAWBERRY', 'POMEGRANATE', 'MANGO', 'GRAPE','PINEAPPLE'];

    var secretWordIndex = Math.floor(Math.random()*foodList.length-1)+0;
    console.log("index "+secretWordIndex);//1

    var secretWord = foodList[secretWordIndex];
    console.log("secretWord "+secretWord);//ORANGE

    var secretWordLettersList = secretWord.split("");//[O,R,A,N,G,E]
    console.log("secretWordLettersList "+secretWordLettersList);

    var secretWordLength = secretWordLettersList.length;
    console.log("length "+secretWordLength);//6

$(document).ready(function(){


    for(let i=0 ; i<secretWordLength ; i++){
        var letter =  $(".secret-word-container").append("<div class='secret-letter "+i+"'></div>");
        $(".secret-letter").addClass("secret-letter");
   }
 
    
 var failurse = 0;
 var id=0;
     $(".letters-container div").on('click',function(){
       
        id= $(this).attr('id');
  
        
            
                if(secretWordLettersList.includes(id,0)){
               
                 var arrOfIndexes = getAllIndexes(secretWordLettersList,id);
                 for(let i=0; i<arrOfIndexes.length;i++){
                $("."+arrOfIndexes[i]+"").text(id);
                
                
                }

            
   
           }else{
               failurse++;
              

               switch(failurse){
                   case 1: $(".svg-elements-container").append("<rect id=svg_5> />");
                   $("#svg_5").attr("y",336.46922);
                   $("#svg_5").attr("x",17.10845);
   
                   $(".svg-elements-container").append("<rect id=svg_6> />");
                   $("#svg_6").attr("y",87.46923);
                   $("#svg_6").attr("x",64.10845);
   
                   $(".svg-elements-container").append("<rect id=svg_7> />");
                   $("#svg_7").attr("y",157.46923);
                   $("#svg_7").attr("x",69.10845);
   
                   $(".svg-elements-container").append("<rect id=svg_8> />");
                   $("#svg_8").attr("y",85.46923);
                   $("#svg_8").attr("x",65.10845);
   
                   $(".svg-elements-container").append("<rect id=svg_9> />");
                   $("#svg_9").attr("y",86.46923);
                   $("#svg_9").attr("x",159.10845);
                   break;
                   case 2: 
                   $(".svg-elements-container").append("<ellipse id=svg_10> />");
                   $("#svg_10").attr("ry",28.5);
                   $("#svg_10").attr("rx",29);
                   $("#svg_10").attr("cy",144.96923);
                   $("#svg_10").attr("cx",162.10845);
                   break;
                   case 3: 
                   $(".svg-elements-container").append("<rect id=svg_12> />");
                   $("#svg_12").attr("y",174.46923);
                   $("#svg_12").attr("x",162.10845);
                   break;
                   case 4: 
                   $(".svg-elements-container").append("<rect id=svg_13> />");
                   $("#svg_13").attr("y",217.55514);
                   $("#svg_13").attr("x",158.17616);
   
                   break;
                   case 5: 
                   $(".svg-elements-container").append("<rect id=svg_14> />");
                   $("#svg_14").attr("y",218.51247);
                   $("#svg_14").attr("x",121.81482);
                   break;
                   case 6: 
                   $(".svg-elements-container").append("<rect id=svg_15> />");
                   $("#svg_15").attr("y",270.53004);
                   $("#svg_15").attr("x",156.65484);
                   break;
                   case 7:
                       $(".svg-elements-container").append("<rect id=svg_16> />");
                       $("#svg_16").attr("y",271.62465);
                       $("#svg_16").attr("x",115.30346);    
                   break;
                   dafaul:break;
                  
               }//switch
               
           }//else if
         
        
      
      
     });//click func

      
     
 function getAllIndexes(arr, val) {
        var indexes = [], i;
        for(i = 0; i < arr.length; i++)
            if (arr[i] === val)
                indexes.push(i);
        return indexes;
    }





    
    });//ready func