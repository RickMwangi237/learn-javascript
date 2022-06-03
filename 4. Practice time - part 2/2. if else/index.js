let age = 6

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age > 66){
    console.log("Senior citizen discount")
} else if(age <= 66 && age >=27 ) {
    console.log("Full Price")
} else if(age < 27 && age >= 18) {
    console.log("Student discount")
} else if( age < 18 && age >= 6) {
    console.log("Child discount")
} else {console.log(Free)}