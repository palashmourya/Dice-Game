//It is enclosed in if else to check whether object is on browser or not 
if(typeof window !== undefined){

    let randomNum1 = Math.floor(Math.random() * 6) + 1;//Taking random number from(1,6)
    let randomDiceImg = "dice" + randomNum1 + ".png"; //concatinating that random with dice image present in images folder
    let randomImgSource = "images/" + randomDiceImg ; // getting random dice image
    let img1 = document.querySelectorAll("img")[0]; //Thera are multiple image tag there we are using document.querySelectorAll to get HTML element
    img1.setAttribute("src",randomImgSource) //using setAttribute method we are putting that random image in src tag
    
    //Below code is same as above just we are doing it for second player
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomImgSource2 = "images/dice" + randomNumber2 + ".png";
    let img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src",randomImgSource2)

    //checking if dice value of player 1 is greater than player 2 
    if(randomNum1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins" // Then changing innerHTML of h1 tag to Player 1 wins
    }
    else if(randomNum1 < randomNumber2){
         document.querySelector("h1").innerHTML = "Player 2 Wins" // Then changing innerHTML of h1 tag to Player 2 wins
    }
    else{
        document.querySelector("h1").innerHTML = "Draws" // Then changing innerHTML of h1 tag to Draw
    }
}
else{

    console.log("You are not on browser")
}
