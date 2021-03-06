var foodList = ['APPLE', 'ORANGE', 'BANANA', 'STRAWBERRY', 'POMEGRANATE', 'MANGO', 'GRAPE', 'PINEAPPLE','BLUEBERRY','AVOCADO','BLACKBERRY','CHERRY','GRAPEFRUIT','KIWI','PAPAYA','PEACH','WATERMELON'];

var secretWordIndex = Math.floor(Math.random() * foodList.length - 1) + 0;//ex: 1

var secretWord = foodList[secretWordIndex];//ex: ORANGE

var secretWordLettersList = secretWord.split("");//ex: [O,R,A,N,G,E]

var secretWordLength = secretWordLettersList.length;//6

$(document).ready(function () {
    var failurse = 0;

    //appending num of divs depending on how many letters in the secret word
    for (let i = 0; i < secretWordLength; i++) {
        $(".secret-word-container").append("<div class='secret-letter " + i + "'></div>");
       
    }



    var pressedLetter = 0;// the letter witch the Player has pressed
    $(".letters-container div").on('click', function () {

        pressedLetter = $(this).attr('id');//ex: A

        if (secretWordLettersList.includes(pressedLetter, 0)) {

            var arrOfIndexes = getAllIndexes(secretWordLettersList, pressedLetter);//to get all the indexes of the pressedLetter as a list
            for (let i = 0; i < arrOfIndexes.length; i++) {
                $("." + arrOfIndexes[i] + "").text(pressedLetter);
            }
            $(this).css("color","green");
        } else {
            failurse++;
            $(this).css("color","red");

            switch (failurse) {
                case 1: $(".svg-elements-container").append("<rect id=svg_5> />");
                    $("#svg_5").attr("y", 336.46922);
                    $("#svg_5").attr("x", 17.10845);

                    $(".svg-elements-container").append("<rect id=svg_6> />");
                    $("#svg_6").attr("y", 87.46923);
                    $("#svg_6").attr("x", 64.10845);

                    $(".svg-elements-container").append("<rect id=svg_7> />");
                    $("#svg_7").attr("y", 157.46923);
                    $("#svg_7").attr("x", 69.10845);

                    $(".svg-elements-container").append("<rect id=svg_8> />");
                    $("#svg_8").attr("y", 85.46923);
                    $("#svg_8").attr("x", 65.10845);

                    $(".svg-elements-container").append("<rect id=svg_9> />");
                    $("#svg_9").attr("y", 86.46923);
                    $("#svg_9").attr("x", 159.10845);
                    break;
                case 2:
                    $(".svg-elements-container").append("<ellipse id=svg_10> />");
                    $("#svg_10").attr("ry", 28.5);
                    $("#svg_10").attr("rx", 29);
                    $("#svg_10").attr("cy", 144.96923);
                    $("#svg_10").attr("cx", 162.10845);
                    break;
                case 3:
                    $(".svg-elements-container").append("<rect id=svg_12> />");
                    $("#svg_12").attr("y", 174.46923);
                    $("#svg_12").attr("x", 162.10845);
                    break;
                case 4:
                    $(".svg-elements-container").append("<rect id=svg_13> />");
                    $("#svg_13").attr("y", 217.55514);
                    $("#svg_13").attr("x", 158.17616);
                    $("#svg_13").attr("transform", "rotate(38.30325698852539 184.62823486328128,218.81422424316406)");

                    break;
                case 5:
                    $(".svg-elements-container").append("<rect id=svg_14> />");
                    $("#svg_14").attr("y", 218.51247);
                    $("#svg_14").attr("x", 121.81482);
                    $("#svg_14").attr("transform", "rotate(133.08865356445312 146.44004821777344,219.75680541992188)");

                    break;
                case 6:
                    $(".svg-elements-container").append("<rect id=svg_15> />");
                    $("#svg_15").attr("y", 270.53004);
                    $("#svg_15").attr("x", 156.65484);
                    $("#svg_15").attr("transform", "rotate(45.65589904785156 186.20304870605472,271.9692077636719)");

                    break;
                case 7:
                    $(".svg-elements-container").append("<rect id=svg_16> />");
                    $("#svg_16").attr("y", 271.62465);
                    $("#svg_16").attr("x", 115.30346);
                    $("#svg_16").attr("transform", "rotate(128.3930206298828 144.85168457031253,273.06384277343744)");

                    break;
                    dafaul:
                    break;
            }//switch
        }//else 
        winCheck();
    });//click func

    $(".letters-container div").hover(function () {
        $(this).css("border", "3px solid gray");
}, function(){
        $(this).css("border", "3px solid black");
});

    function getAllIndexes(arr, val) {
        var indexes = [], i;
        for (i = 0; i < arr.length; i++)
            if (arr[i] === val)
                indexes.push(i);
        return indexes;
    }


    $("#new-link").click(function () {

        var okOption = confirm("New Game?");
        if (okOption == true) {
            location.reload();

        }
    })

    $("#home-link").click(function () {

        var okOption = confirm("End Game?");
        if (okOption == true) {
            window.location.href = "../html/home.html";
        }
    })
    function winCheck() {

        var option;

        if (failurse < 7 && $(".secret-word-container").children("div:not(:empty)").length == secretWordLength) {
            var winAudio = new Audio('../audio/Ta Da-SoundBible.com-1884170640.mp3');
            winAudio.play();
            option = alert("Congratulations " + window.location.search.substring(12) + " , You won!");
            if (option == true) {
                location.reload();

            }
           
        } else if (failurse == 7 && $(".secret-word-container").children("div:not(:empty)").length < secretWordLength) {
            var failAudio = new Audio('../audio/Sad_Trombone-Joe_Lamb-665429450.mp3');
            failAudio.play();
            option = alert("Unfortunately " + window.location.search.substring(12) + " , You lost :( "+"\n The word is "+secretWord);
            if (option == true) {
                location.reload();
            }
        }
    }

});//ready func