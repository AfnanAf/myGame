# myGame
## Technologies used:

## Wireframes:
![Wireframe](/images/wireframe.jpg)
## User stories:
1. As a Player I want to be able to start the game when I am ready so that I can relize that the game is started.
2. As a Player I want to be able to end the game when I want so that I can return to the main game page.
3. As a Player I want to be able to start a new game so that I can start a new game with a new word.
4. As a Player I want to be able to see a win/fail message so that I know if I won or lost the game.
<!--Document your planning and tell a story about your development process and problem-solving strategy.-->
## Development process and problem-solving strategy:
Firstly, I designed my Wireframes and listed all user stories. Then, I startd constructing the pages' structure using HTML. After that, I begain to design the pages using CSS. Lastly, I begon with adding the logic of the game using JavaScript. Console.log and inspector were very helpful tools in debuging and solving a lot of problems.

<!--List unsolved problems which would be fixed in future iterations.-->
## Future iterations:
The game is working good, there is no unsolved problems, but more features could be added in the future iterations like:
1. Adding more words lists.
2. Adding Hints.
## How to win?
The player should guess the letters of the secret word correctly before the man is hanged on!

<!--Describe how some of your favorite functions work-->
## Favorite functions:
winCheck() function, it checks weather the Player is win or lose the game by cheking if the number of correctly guessed letters is equal to the secret word length and the number of wrongly guessed letters less than 7; the Player win the game and wining message will appear. Otherwise the Player will lose and losing message will appear.
```javascript
  var option;

        if (failurse < 7 && $(".secret-word-container").children("div:not(:empty)").length == secretWordLength) {
            option = alert("Congratulations " + window.location.search.substring(12) + " , You won!");
            if (option == true) {
                location.reload();

            }
        } else if (failurse >= 7 && $(".secret-word-container").children("div:not(:empty)").length <= secretWordLength) {
            console.log(failurse);
            option = alert("Unfortunately " + window.location.search.substring(12) + " , You lost :( ");
            if (option == true) {
                location.reload();
            }
        }
```

