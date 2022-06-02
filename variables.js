//Boolean
var laptopTurnedOn = true;
console.log("laptopTurnedOn: ".concat(laptopTurnedOn));
var laptopTurnedOff = false;
console.log("laptopTurnedOff: ".concat(laptopTurnedOff));
//Number
var integerNumber = 25;
console.log("integerNumber: ".concat(integerNumber));
var floatNumber = 25.3;
console.log("floatNumber: ".concat(floatNumber));
// let bigInt: bigint = 25n;
//String
var myName = 'Zlata';
console.log("Zlata: ".concat(myName));
var aboutMeInThreeWords = "I am ".concat(myName);
console.log(aboutMeInThreeWords);
//Array
var gender = ['Male', 'Female'];
console.log("Gender array: ".concat(gender));
var numbers = [1, 2, 3, 4, 5];
console.log("Numbers array: ".concat(numbers));
//Tuple
var student;
student = ['Zlata', 25];
console.log("Student tuple: ".concat(student));
var home;
home = ["Belarus", "Minsk"];
console.log("Home tuple: ".concat(home));
//Enum
var Season;
(function (Season) {
    Season["Winter"] = "New Year";
    Season["Spring"] = "Easter";
    Season["Summer"] = "Independance Day";
    Season["Autumn"] = "Mother Day";
})(Season || (Season = {}));
var upcomingHoliday = Season.Summer;
console.log("UpcomingHoliday: ".concat(upcomingHoliday));
var weekDay;
(function (weekDay) {
    weekDay[weekDay["Monday"] = 1] = "Monday";
    weekDay[weekDay["Tuesday"] = 2] = "Tuesday";
    weekDay[weekDay["Wednesday"] = 3] = "Wednesday";
    weekDay[weekDay["Thursday"] = 4] = "Thursday";
    weekDay[weekDay["Friday"] = 5] = "Friday";
    weekDay["Saturday"] = "Weekend";
    weekDay["Sunday"] = "Weekend";
})(weekDay || (weekDay = {}));
var firstWeekDay = weekDay.Monday;
console.log("firstWeekDay: ".concat(firstWeekDay));
console.log("Saturday is a ".concat(weekDay.Saturday));
console.log("Which day of week is Thursday? It's ".concat(weekDay.Thursday));
//Any
var userInput = 6;
console.log("userInput: ".concat(userInput));
userInput = 'String';
console.log("userInput after date type update: ".concat(userInput));
var randomArray = [1, 'str', false];
console.log("randomArray: ".concat(randomArray));
randomArray[2] = true;
console.log("randomArray after update: ".concat(randomArray));
//Null and Undefined
var amount = 5;
console.log("amount as a number: ".concat(amount));
amount = null;
console.log("amount is null: ".concat(amount));
amount = undefined;
console.log("amount is undefined: ".concat(amount));
//Union
var password;
password = 'String';
console.log("Password can be a string: ".concat(password));
password = 234;
console.log("Password can be a number: ".concat(password));
var choice;
choice = true;
console.log("Choice can be a boolean: ".concat(choice));
choice = 0;
console.log("Choice can be a number: ".concat(choice));
//Object
var user = {
    name: 'Zlata',
    age: 25,
    isLoggedIn: true
};
user.isLoggedIn = false;
console.log(user);
var mylocation;
mylocation = {
    name: 'Belarus',
    bordersWithSea: false,
    neighborsAmount: 5
};
console.log(mylocation);
