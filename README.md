# Password_Generator

The pre-made code already had all of the visuals of the website ready to go. i added some code that makes clicking on the generate password activiate a BigFunction. 
I did this before we learned better ways for a "click" to activate a function.

In javascript, I created one function called BigFunction, which did everything. It brought up the initial prompts/confirms which the user fills in, and created many different variables, 
including arrays filled with all possible password characters.
There are also many "if" statements whose conditionals depend on the user's prompts/confirms, and "while" loops which make sure they answer them adequitley. 
Using several "for" loops and variables set to random values, random characters are chosen for the password. The first 1 to 4 characters are less random, because each of the desired character types are forced to have at least one instance, but after that, they are all random.

Throughout these for loops, a password array is fully generated, one index at a time. Then it is turned into a string, the commas are removed, and the password is printed on the web page. 