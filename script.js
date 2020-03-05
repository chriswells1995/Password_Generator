// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);






// Previous code

// I still need to figure out a way to stop everything if they click cancel 4 times.

function BigFunction() {

        // an array of lowercase letters
        var lowercase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        // an array of uppercase letters
        var uppercase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        // an array of numbers
        var numbers=["0","1","2","3","4","5","6","7","8","9"];
        // an array of special characters
        // var special=["!","@","#","$","%","^","&","*","(",")"];
        var special=["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
    
        // The MAIN array which will hold the final password
        var main=[];
    
        // This variable will be randomly selected to be 1,2,3, or 4 to determine if the next character in the password will be a 
        // lowercase, uppercase, numeric, or special character, respectivelt
        var randomType; 
    
        // This variable will be used to randomly select one of the 26 letters, one of the 10 numbers, or one of the specialty characters
        var randomSelect;
    
        // This array is determined by the prompts. It may contain a 1, 2, 3, and/or 4, coresponding to lowercase, uppercase, numerics, and specialty, respecitvely   
        var oneFour=[];
    
        // This is a random number between (and including) 0 and the length of the oneFour array minus 1. 
        // It is used to randomly select one of the elements in the oneFour array
        var randomIndex;

        // This is the final product, and it is what will be seen on the page
        var finalPassword;
    
            // The following prompts create the oneFour array, which will determine which of the four character arrays will be used in creating the password
        // prompt for lowercase

        var checkLower;
        var checkUpper;
        var checkNumber;
        var checkSpecial;


        while(checkLower!==true && checkUpper!==true && checkNumber!== true &&checkSpecial!==true){
             checkLower=confirm("Would you like lowercase letters in the password?");
             checkUpper=confirm("Would you like uppercase letters in the password?");
             checkNumber=confirm("Would you like numbers in the password?");
             checkSpecial=confirm("Would you like special characters?");
            

        if (checkLower===true){
            oneFour.push(1)
        }
    
        // prompt for uppercase
        if (checkUpper===true){
            oneFour.push(2)
        }
    
        // prompt for numeric
        if (checkNumber===true){
            oneFour.push(3)
        }
    
        // prompt for special
        if (checkSpecial===true){
            oneFour.push(4)
        }
        console.log("the oneFour array " + oneFour)
        if (    (oneFour[0]!==1) &&  (oneFour[0]!==2) &&  (oneFour[0]!==3) &&  (oneFour[0]!==4) ) {
            alert("You must select at least one character type")
        }
        }
    
        // prompt for length
        passwordLength=prompt("How long would you like the password? (8 - 128 characters");

        // make sure that if they put less than 8 or more then 128, the user can not continue
        // If that happens, this "if" statement should send them to this "while" loop, which won't let them progress until they follow directions

        if (passwordLength>128 || passwordLength<8){
            while (passwordLength>128 || passwordLength<8){
                passwordLength=prompt("That number is not between 8 and 128. How long would you like the password? (8 - 128 characters");

            }

        }


            // To insure that there is at least one instance of each type of desired characters, the first few characters will specifically be chosen from each of the desired arrays. 
            // Because the elements in oneFour signify which character types are desired, that array will be used

            for (i=0; i<oneFour.length; i++){

                if (oneFour[i]===1){
                    randomSelect=Math.floor(Math.random()*26)
                    main.push( lowercase[randomSelect] )

                }

                if (oneFour[i]===2){
                    randomSelect=Math.floor(Math.random()*26)
                    main.push( uppercase[randomSelect] )
    
    
                }
                if (oneFour[i]===3){
                    randomSelect=Math.floor(Math.random()*10)
                    main.push( numbers[randomSelect] )                
    
    
                }             
                if (oneFour[i]===4){
                    randomSelect=Math.floor(Math.random()*special.length)
                    main.push( special[randomSelect] )
    
                }


            }
    
        
                // Because the first few characters came from the oneFour elements, this for loop goes from the number of the length of oneFour to the length of the password minus, 
                // filling the rest of the index spots of main with a character
            for (i=oneFour.length; i<passwordLength; i++){
    
                // For each cycle, randomIndex is randomly selected between 0 and the length of oneFour minus 1
                randomIndex=Math.floor(Math.random()*oneFour.length)
    
                // randomType is then defined as either 1, 2, 3, or 4,
                randomType=oneFour[randomIndex]
    
                console.log("the ", i ," time")
                console.log(oneFour)
                console.log(randomIndex)
                console.log(randomType)
                
                // These four "if" statements depend on what number randomType is, and will allow the different character types to be included in the password
    
                if (randomType===1){
                    // in each case, randomSelect is a random number between 0 and the number of characters in the array minus 1. This creates an index number
                    // which will be used in that character array, selecting a character to be pushed into the main array
                    randomSelect=Math.floor(Math.random()*26)
                    main.push( lowercase[randomSelect] )
    
    
                }
    
                if (randomType===2){
                    randomSelect=Math.floor(Math.random()*26)
                    main.push( uppercase[randomSelect] )
    
    
                }
                if (randomType===3){
                    randomSelect=Math.floor(Math.random()*10)
                    main.push( numbers[randomSelect] )                
    
    
                }             
                if (randomType===4){
                    randomSelect=Math.floor(Math.random()*special.length)
                    main.push( special[randomSelect] )
    
                }
    
            }
    
    
    // This creates a new variable called new1, which has all of the characters of main without the commas, and is fed into the textarea and spat out onto the page
    // alert(main)
    var finalPassword = main.join('');
    document.getElementById("password").innerHTML = finalPassword;

}