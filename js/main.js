

    var foodList = ['APPLE', 'ORANGE', 'BANANA', 'STRAWBERRY', 'POMEGRANATE', 'MANGO', 'GRAPE','PINEAPPLE'];

    var secretWordIndex = Math.floor(Math.random()*foodList.length-1)+0;
    console.log("index "+secretWordIndex);//1

    var secretWord = foodList[secretWordIndex];
    console.log("secretWord "+secretWord);//ORANGE

    var secretWordLettersList = secretWord.split("");//[O,R,A,N,G,E]
    console.log("secretWordLettersList "+secretWordLettersList);

    var secretWordLength = secretWordLettersList.length;
    console.log("length "+secretWordLength);//6


    for(let i=0 ; i<secretWordLength ; i++){
        $(".secret-word-container").append("<div>Appended item</div>");
    }








