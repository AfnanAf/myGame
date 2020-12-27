

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
 
    
 
     $(".letters-container div").click(function(){
        
        
         var id = $(this).attr('id');
         for(letter in secretWordLettersList){
             if(secretWordLettersList[letter] === id){
                 $("."+letter+"").text(secretWordLettersList[letter]);
                 
             }else{
                 
                //  c.css("color","red");
             }
         }
         
     })
 
})
    







