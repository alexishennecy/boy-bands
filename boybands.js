let bands = [" Boyz II Men", " NSync", " New Kids on the Block", " 98 Degrees", " One Direction"];
let vegetables = [" Carrots", " Kale", " Zucchini", " Broccoli", " Squash"];

console.log(bands);

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boy-bands");
console.log(bandElement);

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");
console.log(veggieElement);

// Execute a for loop that will iterate over the arrays
for (let loopTracker = 0; loopTracker < bands.length; loopTracker += 1) {

    // Get a reference to the current item in the bands array
    const currentBand = bands[loopTracker];

    // Update the innerHTML value of the DOM element for bands
    document.getElementById("boy-bands").innerHTML += currentBand;
    // bandElement.innerHTML += currentBand; //condensed version

    // Get a reference to the current item in the vegetables array
    const currentVeggie = vegetables[loopTracker];

     // Update the innerHTML value of the DOM element for vegetables
    document.getElementById("vegetables").innerHTML += currentVeggie;
    // veggieElement.innerHTML += currentVeggie; //condensed version
    console.log(currentBand, currentVeggie);



// Update the code to iterate the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p, etc...)






// -------------------------------------------------------------------------


//these are example practices 
// var myArray = [];
//     console.log(myArray);
//     myArray.push("item0");
//     console.log(myArray);

    // function addIngredients(x){  //this is declaring the function
    //     return x + " ice cream" //this is the directions that the function does
    // }
    // var result = addIngredients("chocolate") //the sum is stored in the variable of the passed in arguement
    // console.log(result)
    // var lengthOfResult = result.length //this variable is storing the sum of the length of the result text

    // console.log('THIS IS THE LENGTH :', lengthOfResult)

 
 
    // function addToAnArray(x){
    //     var arrayThatWillBeReturned = []
    //     arrayThatWillBeReturned.push(x)
    //     return arrayThatWillBeReturned
    // }
    // var result = addToAnArray("gucci")
    // console.log(result)
    