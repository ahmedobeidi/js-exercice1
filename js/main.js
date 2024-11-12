/* Exercice 1
console.log("Hello Wrold!");
console.log("Bienvenue dans le monde de la programmation !");
*/

/* Exercice 2 
let number1 = 5;
let number2 = 10;

console.log(number1 + number2);
*/

/* Exercice 3  
let arr = ["pomme", "banane", "cerise"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/

/* Exercice 4 
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { console.log(i); }
}
*/

/* Exercice 5 
const voyelles = ["a", "e", "i", "o", "u"];
let myName = "Ahmed";
let numberOfVoylles = 0;

for (let i = 0; i < myName.length; i++) {
   for (let j = 0; j < voyelles.length; j++) {
        if (myName[i].toLowerCase() === voyelles[j]) {
            numberOfVoylles++;
        } 
   }
}

console.log(numberOfVoylles);
*/

/* Exercice 6 */
const str = "salut tout le monde";
let times = 0;
let notExist = true;
let variable = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {continue};
    variable = str[i];
    for (let letter = 0; letter < str.length; letter++) {
       if (str[letter] === variable) {
            times++;
            if (letter == str.length - 1) {console.log(variable + times);}      
       }
        
    }
    
    notExist = true;
    times = 0;
    variable = "";
    
}



