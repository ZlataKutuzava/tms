//Boolean
let laptopTurnedOn: boolean = true;
console.log(`laptopTurnedOn: ${laptopTurnedOn}`);
let laptopTurnedOff: boolean = false;
console.log(`laptopTurnedOff: ${laptopTurnedOff}`);

//Number
let integerNumber: number = 25;
console.log(`integerNumber: ${integerNumber}`);
let floatNumber: number = 25.3;
console.log(`floatNumber: ${floatNumber}`);
// let bigInt: bigint = 25n;

//String
let myName: string = 'Zlata';
console.log(`Zlata: ${myName}`);
let aboutMeInThreeWords: string = `I am ${myName}`;
console.log(aboutMeInThreeWords);

//Array
const gender: string[] = ['Male', 'Female'];
console.log(`Gender array: ${gender}`);
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(`Numbers array: ${numbers}`);

//Tuple
let student: [string, number];
student = ['Zlata', 25];
console.log(`Student tuple: ${student}`);
let home: [string, string];
home = ["Belarus", "Minsk"];
console.log(`Home tuple: ${home}`);

//Enum
enum Season {Winter = 'New Year', Spring = 'Easter', Summer = 'Independance Day', Autumn = 'Mother Day'}
let upcomingHoliday: Season = Season.Summer;
console.log(`UpcomingHoliday: ${upcomingHoliday}`);
enum weekDay {Monday = 1, Tuesday, Wednesday, Thursday, Friday, Saturday = 'Weekend', Sunday = 'Weekend'}
let firstWeekDay: weekDay = weekDay.Monday;
console.log(`firstWeekDay: ${firstWeekDay}`);
console.log(`Saturday is a ${weekDay.Saturday}`);
console.log(`Which day of week is Thursday? It's ${weekDay.Thursday}`);

//Any
let userInput: any = 6;
console.log(`userInput: ${userInput}`);
userInput = 'String';
console.log(`userInput after date type update: ${userInput}`);

let randomArray: any[] = [1, 'str', false];
console.log(`randomArray: ${randomArray}`);
randomArray[2] = true;
console.log(`randomArray after update: ${randomArray}`);


//Null and Undefined
let amount: null | number | undefined = 5;
console.log(`amount as a number: ${amount}`);
amount = null;
console.log(`amount is null: ${amount}`);
amount = undefined;
console.log(`amount is undefined: ${amount}`);


//Union
let password: (string | number);
password = 'String';
console.log(`Password can be a string: ${password}`);
password = 234;
console.log(`Password can be a number: ${password}`);

let choice: (number | boolean);
choice = true;
console.log(`Choice can be a boolean: ${choice}`);
choice = 0;
console.log(`Choice can be a number: ${choice}`);


//Object
let user = {
    name:'Zlata',
    age: 25, 
    isLoggedIn: true
};
user.isLoggedIn = false;
console.log(user);


let mylocation: {
    name: string,
    bordersWithSea: boolean,
    neighborsAmount: 5
};
mylocation = {
    name: 'Belarus',
    bordersWithSea: false,
    neighborsAmount: 5
}
console.log(mylocation);