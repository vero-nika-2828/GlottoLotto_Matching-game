# Testing

## Automated Testing 

### CSS Validator (W3C)
 * HTML Validator 
   * index.html (Main Menu) - pass
    <details>
    <summary>Main Menu</summary>
    <br>

    ![Index.html (Main Menu) Validation](./assets/readme_docs/automated_testing/w3c-validator-index-page.jpg.JPG)

    </details> 

   * level-A1.html - pass

   <details>
    <summary>Level A1 - A2</summary>
    <br>

    ![level-A1.html (Level A1 - A2) Validation](./assets/readme_docs/automated_testing/w3c-validator-level-A1-page.jpg)

   </details> 


   * level-B1.html - pass
     <details>
    <summary>Level B1 - B2</summary>
    <br>

   ![Contact.html (Level B1 - B2) Validation](./assets/readme_docs/automated_testing/w3c-validator-level-B1-page.JPG)

   </details>  


 * CSS Validator -pass
 
   ![Stylesheet Valiation](./assets/readme_docs/automated_testing/w3c-css-validator.JPG)

   </details>  

  * Javascript Validator (https://jshint.com/) -pass
 
   ![Javascript Valiation](./assets/readme_docs/automated_testing/jshint-validator-javascript.JPG)

   </details>   

### Lighthouse

<details>
<summary>Main Menu</summary>
<br>

* Desktop

![Main Menu Lighthouse test](./assets/readme_docs/automated_testing/lighthouse-main-menu-index-page-desktop.JPG)

* Mobile

![Main Menu Lighthouse test](./assets/readme_docs/automated_testing/lighthouse-main-menu-index-page-mobile.JPG)

</details> 

<details>
<summary>Level A1 -A2</summary>
<br>

![Level A1 -A2 page Lighthouse test](./assets/readme%20_docs/lighthouse%20test/Portfolio%20page.JPG)

</details> 

<details>
<summary>Level B1 -B2</summary>
<br>

![Contact page Lighthouse test](./assets/readme%20_docs/lighthouse%20test/Contact%20page.JPG)

</details> 

## Manual testing

### Testing user stories (Real user testing)

<details>
<summary> User 1:   Device -  Samsung Galaxy S9, Browser: Samsung Browser
</summary>
<br>

<details>
<summary> Main page
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 5  | Layout | Game as well as initial page and result fit the screen size and there is no need to sroll | Works as expected |
| 2  | Layout | All elements are visible  | Works as expected|
| 25 | Game name and game type description | Gives indication of the game type and who it is for| Works as expected|
| 1, 25 | Introduction to the game | Gives the description of the game and it's use | Works as expected|
| 2, 26 | Navigation buttons | Give me clear indication on where they will take me and are easy to read and it is intuitive| Works as expected|
|3 | Navigation buttons - How to play | When I click 'How to play' button it takes me to How to play section | Works as expected|
|3 | Navigation buttons - How to play on smaller devices| Instructions are easy to read and on smaller devices I have scroll option | Works as expected|
|4, 22, 29 | Navigation buttons  -Play | When I click 'Play buton'  it takes me to game options | Works as expected|
| 6, 36 | Navigation buttons  -Score board | When I click 'Score board'  it takes me to Scoreboard section | Works as expected|
| 7, 27 | Return button | When I click return button it takes me back to the main menu |
| 4, 27 | Play modal | I have two options of the games A1-A2 and  B1-B2 | Works as expected|
| 19, 36 | Score board | My score appears on the board | Works as expected|
| 4, 27 | Level options  A1-A2  button | A1-A2  button takes me to  A1-A2  game | Works as expected|
| 4, 24, 27 | Level options  B1-B2 button | B1-B2 button takes me to B1-B2 game|

</details> 

<details>
<summary> Game page
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 15, 37 | Timer | Time starts as soon as the games loads | Works as expected|
| 15, 37 | Timer | Goes down by second | Works as expected|
| 16,38 | Turns | When I select two cards the counter of the turns goes up 1 both when they match and don’t match | Works as expected|
| 21, 39 | Music | When I click on the crossed speaker icon the cross is removed and the music starts playing |
| 5 | Cards | Card area fiths my screen size | Works as expected|
| 5 | Card  | When game loads there are 16 cards of the same color  |  Works as expected |
| 35 | Card  | When I click a card of my choice it turns around and I see a picture or a word  |  Works as expected |
| 11, 34 | Card  | Each time card turns  hear the pronunciation of the animal name |  Works as expected |
| 10 | Card  | When I click the card that is alreay selected  it doesn’t react : no animal name is said or card is not turned  |  Works as expected |
| 12 | Card  | When I find a match the cards dissaper and sound effect is played |  Works as expected |
| 13, 33 | Card  | When I don’t find a match cards turn back around  |  Works as expected |
| 10, 34 | Card  | When I click area where cards which I matched used to be it doesn’t react: no animal name is said neither can I hear a matched sound  |  Works as expected |
| 10, 14, 32 | Card | When I select two cards they stay face up long enough to see what picture or word is on the card |  Works as expected |
| 9, 31 | Card | With each new game cards are in a different position  |  Works as expected |

</details> 

<details>
<summary> Result section
</summary>
<br>
 
| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 17 | Time's up | When 2 minutes are over the game finished and Time'us message pop's up |  Works as expected |
| 17 | Well done  | When all pairs are matched Well done message pop's up |  Works as expected |
| 18, 36 | Points  | Underneath  the Well done message I can see how many points I earned  |  Works as expected |
| 19,36 | Input  | Input field shows text "Write your name here "  |  Works as expected |
| 19,36 | Input  | When I type anything in the field it overrides the placeholder message |  Works as expected |
| 19 | Save to the scoreboard button  | When I click save to the  score board button it saves my name in the scoreboard |  Works as expected |
| 19 | Save to the scoreboard button  | When I click save to the  score board button it saves my name in the scoreboard |  Works as expected |
| 20 | Save to the scoreboard button  | When I click save to the  score board button the text of the button changes to Saved  |  Works as expected |
| 8,30 | Try again button | When I click try again button it takes me to the same level  |  Works as expected |
| 2, 27 | Main menu button  | When I click Main menu  button it takes me to Main menu  |  Works as expected |

</details> 

<details>
<summary> Footer
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 40 | Link | When I click link it opens on a new page |  Works as expected |
| 40 | Link | When I click link it takes me to git hub page |  Works as expected |

</details> 

<details>
<summary> 404error page
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 41 | 404. html | When the game is not found I am directed to the page that tell me that the page is not found |  Works as expected |
| 42 | Back to the game button | When I click the back to the game button it takes me back to the the Main menu  |  Works as expected |

</details> 

</details> 

<details>
<summary> User 2:   Device -  Huawei P30 Lite, Browser: Huawei browser
</summary>
<br>

<details>
<summary> Main page
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 5  | Layout | Game as well as initial page and result fit the screen size and there is no need to sroll | Works as expected |
| 2  | Layout | All elements are visible  | Works as expected|
| 25 | Game name and game type description | Gives indication of the game type and who it is for| Works as expected|
| 1, 25 | Introduction to the game | Gives the description of the game and it's use | Works as expected|
| 2, 26 | Navigation buttons | Give me clear indication on where they will take me and are easy to read and it is intuitive| Works as expected|
|3 | Navigation buttons - How to play | When I click 'How to play' button it takes me to How to play section | Works as expected|
|3 | Navigation buttons - How to play on smaller devices| Instructions are easy to read and on smaller devices I have scroll option | Works as expected|
|4, 22, 29 | Navigation buttons  -Play | When I click 'Play buton'  it takes me to game options | Works as expected|
| 6, 36 | Navigation buttons  -Score board | When I click 'Score board'  it takes me to Scoreboard section | Works as expected|
| 7, 27 | Return button | When I click return button it takes me back to the main menu |
| 4, 27 | Play modal | I have two options of the games A1-A2 and  B1-B2 | Works as expected|
| 19, 36 | Score board | My score appears on the board | Works as expected|
| 4, 27 | Level options  A1-A2  button | A1-A2  button takes me to  A1-A2  game | Works as expected|
| 4, 24, 27 | Level options  B1-B2 button | B1-B2 button takes me to B1-B2 game|

</details> 

<details>
<summary> Game page
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 15, 37 | Timer | Time starts as soon as the games loads | Works as expected|
| 15, 37 | Timer | Goes down by second | Works as expected|
| 16,38 | Turns | When I select two cards the counter of the turns goes up 1 both when they match and don’t match | Works as expected|
| 21, 39 | Music | When I click on the crossed speaker icon the cross is removed and the music starts playing |
| 5 | Cards | Card area fiths my screen size | Works as expected|
| 5 | Card  | When game loads there are 16 cards of the same color  |  Works as expected |
| 35 | Card  | When I click a card of my choice it turns around and I see a picture or a word  |  Works as expected |
| 11, 34 | Card  | Each time card turns  hear the pronunciation of the animal name |  Works as expected |
| 10 | Card  | When I click the card that is alreay selected  it doesn’t react : no animal name is said or card is not turned  |  Works as expected |
| 12 | Card  | When I find a match the cards dissaper and sound effect is played |  Works as expected |
| 13, 33 | Card  | When I don’t find a match cards turn back around  |  Works as expected |
| 10, 34 | Card  | When I click area where cards which I matched used to be it doesn’t react: no animal name is said neither can I hear a matched sound  |  Works as expected |
| 10, 14, 32 | Card | When I select two cards they stay face up long enough to see what picture or word is on the card |  Works as expected |
| 9, 31 | Card | With each new game cards are in a different position  |  Works as expected |

</details> 

<details>
<summary> Result section
</summary>
<br>
 
| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 17 | Time's up | When 2 minutes are over the game finished and Time'us message pop's up |  Works as expected |
| 17 | Well done  | When all pairs are matched Well done message pop's up |  Works as expected |
| 18, 36 | Points  | Underneath  the Well done message I can see how many points I earned  |  Works as expected |
| 19,36 | Input  | Input field shows text "Write your name here "  |  Works as expected |
| 19,36 | Input  | When I type anything in the field it overrides the placeholder message |  Works as expected |
| 19 | Save to the scoreboard button  | When I click save to the  score board button it saves my name in the scoreboard |  Works as expected |
| 19 | Save to the scoreboard button  | When I click save to the  score board button it saves my name in the scoreboard |  Works as expected |
| 20 | Save to the scoreboard button  | When I click save to the  score board button the text of the button changes to Saved  |  Works as expected |
| 8,30 | Try again button | When I click try again button it takes me to the same level  |  Works as expected |
| 2, 27 | Main menu button  | When I click Main menu  button it takes me to Main menu  |  Works as expected |

</details> 

<details>
<summary> Footer
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 40 | Link | When I click link it opens on a new page |  Works as expected |
| 40 | Link | When I click link it takes me to git hub page |  Works as expected |

</details> 

<details>
<summary> 404error page
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 41 | 404. html | When the game is not found I am directed to the page that tell me that the page is not found |  Works as expected |
| 42 | Back to the game button | When I click the back to the game button it takes me back to the the Main menu  |  Works as expected |

</details> 

</details> 

<details>
<summary> User 3:   Device -  iPhone 13 mini, Browser: Safari
</summary>
<br>

<details>
<summary> Main page
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 5  | Layout | Game as well as initial page and result fit the screen size and there is no need to sroll | Works as expected |
| 2  | Layout | All elements are visible  | Works as expected|
| 25 | Game name and game type description | Gives indication of the game type and who it is for| Works as expected|
| 1, 25 | Introduction to the game | Gives the description of the game and it's use | Works as expected|
| 2, 26 | Navigation buttons | Give me clear indication on where they will take me and are easy to read and it is intuitive| Works as expected|
|3 | Navigation buttons - How to play | When I click 'How to play' button it takes me to How to play section | Works as expected|
|3 | Navigation buttons - How to play on smaller devices| Instructions are easy to read and on smaller devices I have scroll option | Works as expected|
|4, 22, 29 | Navigation buttons  -Play | When I click 'Play buton'  it takes me to game options | Works as expected|
| 6, 36 | Navigation buttons  -Score board | When I click 'Score board'  it takes me to Scoreboard section | Works as expected|
| 7, 27 | Return button | When I click return button it takes me back to the main menu |
| 4, 27 | Play modal | I have two options of the games A1-A2 and  B1-B2 | Works as expected|
| 19, 36 | Score board | My score appears on the board | Works as expected|
| 4, 27 | Level options  A1-A2  button | A1-A2  button takes me to  A1-A2  game | Works as expected|
| 4, 24, 27 | Level options  B1-B2 button | B1-B2 button takes me to B1-B2 game|

</details> 

<details>
<summary> Game page
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 15, 37 | Timer | Time starts as soon as the games loads | Works as expected|
| 15, 37 | Timer | Goes down by second | Works as expected|
| 16,38 | Turns | When I select two cards the counter of the turns goes up 1 both when they match and don’t match | Works as expected|
| 21, 39 | Music | When I click on the crossed speaker icon the cross is removed and the music starts playing |
| 5 | Cards | Card area fiths my screen size | Works as expected|
| 5 | Card  | When game loads there are 16 cards of the same color  |  Works as expected |
| 35 | Card  | When I click a card of my choice it turns around and I see a picture or a word  |  Works as expected |
| 11, 34 | Card  | Each time card turns  hear the pronunciation of the animal name |  Works as expected |
| 10 | Card  | When I click the card that is alreay selected  it doesn’t react : no animal name is said or card is not turned  |  Works as expected |
| 12 | Card  | When I find a match the cards dissaper and sound effect is played |  Works as expected |
| 13, 33 | Card  | When I don’t find a match cards turn back around  |  Works as expected |
| 10, 34 | Card  | When I click area where cards which I matched used to be it doesn’t react: no animal name is said neither can I hear a matched sound  |  Works as expected |
| 10, 14, 32 | Card | When I select two cards they stay face up long enough to see what picture or word is on the card |  Works as expected |
| 9, 31 | Card | With each new game cards are in a different position  |  Works as expected |

</details> 

<details>
<summary> Result section
</summary>
<br>
 
| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 17 | Time's up | When 2 minutes are over the game finished and Time'us message pop's up |  Works as expected |
| 17 | Well done  | When all pairs are matched Well done message pop's up |  Works as expected |
| 18, 36 | Points  | Underneath  the Well done message I can see how many points I earned  |  Works as expected |
| 19,36 | Input  | Input field shows text "Write your name here "  |  Works as expected |
| 19,36 | Input  | When I type anything in the field it overrides the placeholder message |  Works as expected |
| 19 | Save to the scoreboard button  | When I click save to the  score board button it saves my name in the scoreboard |  Works as expected |
| 19 | Save to the scoreboard button  | When I click save to the  score board button it saves my name in the scoreboard |  Works as expected |
| 20 | Save to the scoreboard button  | When I click save to the  score board button the text of the button changes to Saved  |  Works as expected |
| 8,30 | Try again button | When I click try again button it takes me to the same level  |  Works as expected |
| 2, 27 | Main menu button  | When I click Main menu  button it takes me to Main menu  |  Works as expected |

</details> 

<details>
<summary> Footer
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 40 | Link | When I click link it opens on a new page |  Works as expected |
| 40 | Link | When I click link it takes me to git hub page |  Works as expected |

</details> 

<details>
<summary> 404error page
</summary>
<br>

| User stories | Feature | Expected result | Actual result |
|  :---| :---|  :---|  :---|
| 41 | 404. html | When the game is not found I am directed to the page that tell me that the page is not found |  Works as expected |
| 42 | Back to the game button | When I click the back to the game button it takes me back to the the Main menu  |  Works as expected |

</details> 

</details> 

<details>
<summary> User 4:   Placeholder
</summary>
<br>

</details> 

<details>
<summary> User 5:   Placeholder
</summary>
<br>

</details> 

<details>
<summary> User 5:   Placeholder
</summary>
<br>

</details> 

</details> 


<details>
<summary>Screenshot</summary>
<br>

![Title](./assets/readme%20_docs/user%20testing/title.JPG)

</details> 

### Full Testing

The website was tested on following devices

<details>
<summary>Desktop 1400px wide</summary>
<ul>

 <details>
 <summary>Main page</summary>
 
![Home page 1](./assets/readme%20_docs/full-testing/Desktop/Home1.JPG)
![Home page 2](./assets/readme%20_docs/full-testing/Desktop/Home2.JPG)
![Home page 3](./assets/readme%20_docs/full-testing/Desktop/Home3.JPG)
![Home page 4](./assets/readme%20_docs/full-testing/Desktop/Home4.JPG)

 </details> 

 <details>
 <summary>Level A1 -A2</summary>
 
![Portfolio 1](./assets/readme%20_docs/full-testing/Desktop/Portfolio.JPG)
![Portfolio 2](./assets/readme%20_docs/full-testing/Desktop/Portfolio2.JPG)
![Portfolio 3](./assets/readme%20_docs/full-testing/Desktop/Portfolio3.JPG)

 </details> 

 <details>
 <summary>Level A1 -A2</summary>
 
![Contact 1](./assets/readme%20_docs/full-testing/Desktop/Contact1.JPG)
![Contact 2](./assets/readme%20_docs/full-testing/Desktop/Contact2.JPG)


 </details> 

</ul>
</details> 


<details>
<summary>Nest Hub Max 1280px wide</summary>
<ul>

 <details>
 <summary>Home page</summary>
 
![Home page 1](./assets/readme%20_docs/full-testing/NestHubMax/Home1.JPG)
![Home page 2](./assets/readme%20_docs/full-testing/NestHubMax/Home2.JPG)
![Home page 3](./assets/readme%20_docs/full-testing/NestHubMax/Home3.JPG)
![Home page 4](./assets/readme%20_docs/full-testing/NestHubMax/Home4.JPG)

 </details> 

 <details>
 <summary>Portfolio</summary>
 
![Portfolio 1](./assets/readme%20_docs/full-testing/NestHubMax/Portfolio1.JPG)
![Portfolio 2](./assets/readme%20_docs/full-testing/NestHubMax/Portfolio2.JPG)
![Portfolio 3](./assets/readme%20_docs/full-testing/NestHubMax/Portfolio3.JPG)

 </details> 

 <details>
 <summary>Contact</summary>
 
![Contact 1](./assets/readme%20_docs/full-testing/NestHubMax/Contact1.JPG)
![Contact 2](./assets/readme%20_docs/full-testing/NestHubMax/Contact2.JPG)


 </details> 

</ul>
</details> 


<details>
<summary>Surface Duo 540px wide</summary>
<ul>

 <details>
 <summary>Home page</summary>
 
![Home page 1](./assets/readme%20_docs/full-testing/SurfaceDuo/Home1.JPG)
![Home page 2](./assets/readme%20_docs/full-testing/SurfaceDuo/Home2.JPG)
![Home page 3](./assets/readme%20_docs/full-testing/SurfaceDuo/Home3.JPG)
![Home page 4](./assets/readme%20_docs/full-testing/SurfaceDuo/Home4.JPG)
![Home page 5](./assets/readme%20_docs/full-testing/SurfaceDuo/Home5.JPG)

 </details> 

 <details>
 <summary>Portfolio</summary>
 
![Portfolio 1](./assets/readme%20_docs/full-testing/SurfaceDuo/Portfolio1.JPG)
![Portfolio 2](./assets/readme%20_docs/full-testing/SurfaceDuo/Portfolio2.JPG)
![Portfolio 3](./assets/readme%20_docs/full-testing/SurfaceDuo/Portfolio3.JPG)
![Portfolio 4](./assets/readme%20_docs/full-testing/SurfaceDuo/Portfolio4.JPG)
![Portfolio 5](./assets/readme%20_docs/full-testing/SurfaceDuo/Portfolio5.JPG)

 </details> 

 <details>
 <summary>Contact</summary>
 
![Contact 1](./assets/readme%20_docs/full-testing/SurfaceDuo/Contact1.JPG)
![Contact 2](./assets/readme%20_docs/full-testing/SurfaceDuo/Contact2.JPG)
![Contact 3](./assets/readme%20_docs/full-testing/SurfaceDuo/Contact3.JPG)

 </details> 

</ul>
</details> 



<details>
<summary>iPhone SE 375px wide</summary>
<ul>

 <details>
 <summary>Home page</summary>
 
![Home page 1](./assets/readme%20_docs/full-testing/iPhone/Home1.JPG)
![Home page 2](./assets/readme%20_docs/full-testing/iPhone/Home2.JPG)
![Home page 3](./assets/readme%20_docs/full-testing/iPhone/Home3.JPG)
![Home page 4](./assets/readme%20_docs/full-testing/iPhone/Home4.JPG)
![Home page 5](./assets/readme%20_docs/full-testing/iPhone/Home5.JPG)
![Home page 6](./assets/readme%20_docs/full-testing/iPhone/Home6.JPG)


 </details> 

 <details>
 <summary>Portfolio</summary>
 
![Portfolio 1](./assets/readme%20_docs/full-testing/iPhone/Porfolio1.JPG)
![Portfolio 2](./assets/readme%20_docs/full-testing/iPhone/Porfolio2.JPG)
![Portfolio 3](./assets/readme%20_docs/full-testing/iPhone/Porfolio3.JPG)
![Portfolio 4](./assets/readme%20_docs/full-testing/iPhone/Porfolio4.JPG)
![Portfolio 5](./assets/readme%20_docs/full-testing/iPhone/Porfolio5.JPG)
![Portfolio 6](./assets/readme%20_docs/full-testing/iPhone/Porfolio6.JPG)
![Portfolio 7](./assets/readme%20_docs/full-testing/iPhone/Porfolio7.JPG)

 </details> 

 <details>
 <summary>Contact</summary>
 
![Contact 1](./assets/readme%20_docs/full-testing/iPhone/Contact1.JPG)
![Contact 2](./assets/readme%20_docs/full-testing/iPhone/Contact2.JPG)
![Contact 3](./assets/readme%20_docs/full-testing/iPhone/Contact3.JPG)

 </details> 

</ul>
</details> 


## Bugs

### Solved bugs 
 |  Expected |  Bug |  Fix |
 |  :---| :---|  :---|
 | Return buttons should take me to the main menu | Return button in 'How to play' or 'Play' section did not react and didn't take me back to the main menu|return function was moved inside the on click for #btn-instructions and  #btn-play function and that applied the return function als when those modals are open |
 | The user should see only the content for the chosen element when then open any of the navigation options : How to play, Play and Score board and the previvous content should not be seen  | When the How to play or play button was clicked it added the content of the modal to the main menu content and when clicked back to main content it added the content of the How to play to the bottom. The same happened in Play modal | The function to clear the existing text before adding new one was added 
 | The timer should always show one digit for minutes and two digits for seconds | When seconds went under 10 only one digit was displayed | The timeDecrease function was adjusted to add 0 to each digit when there is only one digit represingting seconds which usually happens when they are lower than  10 |
 |Music should play as soon as the user clicks on the speaker | The music took about  15 seconds to start playing | Thes size of the audio was trimmed and the loop was applied
 | When the user clicks on the area where the matched cards used be it should not react| The animal sound was played when clicked on the aread where matched pictures used to be and when clicked on two matching the sound was played |  Added condition to apply the cardTurns function only to those cards which dont have matched class
 | When match is found the cards fade out | The outline of the cards stayed visible  | Styling added to the card class (.card) to set the border to none |
 | When users clicks on the card and it flips only the front of the card should be visible| When card was fliped to the front of the card the white outline was visible in the background  | style propety was added to remove the visibility of the front card when it flips|
 |It is not possible for the user to submit their score if the input field is empty | The text got submitted even when the user didn't enter their name | The 'save to scoreboard' button was disabled and an even listener was added to remove the disabled attribute when the key is up

### Known bugs
There are no known bugs


