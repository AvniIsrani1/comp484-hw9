// ==========================
// Part 1: Date Display
// ==========================

// Returns string: MM/DD/YYYY
function getFormattedDate(){
    // 1. Create a Date object
    var date = new Date();

    // 2. Get the current month, day, and year
    // 3. Adjust month if needed (JavaScript months are 0-based)
    // 4. Add leading zeros to month/day if needed
    var month = String(date.getMonth() + 1).padStart(2, '0'); 
    var day = String(date.getDate()).padStart(2, '0');
    var year = date.getFullYear();

    // 5. Create a string in the format: "Today is MM/DD/YYYY"
    var formattedDate = month + '/' + day + '/' + year;
    console.log(formattedDate);
    return formattedDate;
}
// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = "Today is " + getFormattedDate();

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")
var a = "84";
var b = "172";
var c = "34.19";
var d = "thanks";

// TODO:
// 2. For EACH variable:
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()
var aConverted = Number(a);
var aIsNaN = Number.isNaN(aConverted);
var aIsInteger = Number.isInteger(aConverted);

var bConverted = Number(b);
var bIsNaN = Number.isNaN(bConverted);
var bIsInteger = Number.isInteger(bConverted);

var cConverted = Number(c);
var cIsNaN = Number.isNaN(cConverted);
var cIsInteger = Number.isInteger(cConverted);

var dConverted = Number(d);
var dIsNaN = Number.isNaN(dConverted);
var dIsInteger = Number.isInteger(dConverted);

function extraChecks(num){
    var output = "";
    var numConverted = Number(num);

    // check if number isNaN
    if(Number.isNaN(numConverted)){
        output += "This value is not a valid number. "
    }

    // check if number is integer
    if(Number.isInteger(numConverted)){
        output += "This value is an integer. "
    }

    // check if converted number is >= 70 or <70
    if(numConverted >= 70){
        output += "Passing. ";
    } else if(numConverted < 70){
        output += "Not passing. ";
    }
    return "<div class='indent'>("+output+")</div>";
}

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"
var aSentence = "Original: '" + a + "' -> Converted: " + aConverted + " -> isNaN: " + aIsNaN + "-> isInteger: " + aIsInteger + extraChecks(a);  
var bSentence = "Original: '" + b + "' -> Converted: " + bConverted + " -> isNaN: " + bIsNaN + "-> isInteger: " + bIsInteger + extraChecks(b);  
var cSentence = "Original: '" + c + "' -> Converted: " + cConverted + " -> isNaN: " + cIsNaN + "-> isInteger: " + cIsInteger + extraChecks(c);  
var dSentence = "Original: '" + d + "' -> Converted: " + dConverted + " -> isNaN: " + dIsNaN + "-> isInteger: " + dIsInteger + extraChecks(d);  

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)
var numberSentence = aSentence + "<br>" + bSentence + "<br>" + cSentence + "<br>" + dSentence;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = numberSentence;


// ==========================
// Part 3: Math & Formatting
// ==========================

// OPTION A: PRICE CALCULATOR

// TODO:
// 1. Create at least 2-3 numeric variables
var itemPrice = 1701;
var taxRate = 0.15;
var shippingCost = 15;

// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)

// var subtotal = itemPrice; 
var taxAmount = itemPrice * taxRate;
var totalCost = itemPrice + taxAmount + shippingCost;


// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
var taxFixed = taxAmount.toFixed();
var totalCostFixed = totalCost.toFixed()

// 4. Build a string showing your results
var mathSentence = "Receipt <br> Item Price: " + itemPrice + "<br>Tax Rate: " + taxRate + "<br>Shipping Cost: " + shippingCost + "<br><br>Tax Amount: " + taxFixed + "<br>Total Cost: " + totalCost;
// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathSentence;
// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)

// THIS IS IMPLEMENTED AS THE extraChecks() function in part 2 above. 

