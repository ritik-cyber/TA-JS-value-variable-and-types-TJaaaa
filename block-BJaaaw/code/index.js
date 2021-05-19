// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = 12;
if (num % 2 == 0) {
  alert("numbes is even");
} else {
  alert("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let a = Number(prompt("enter a value"));
let b = Number(prompt("enter a value"));

if (a > b) {
  alert(a);
} else {
  alert(b);
}

// 3. Convert the above code using`?` terniary operator

// let a = Number(prompt("enter a value again")) , b = Number(prompt("enter a value again")) if(a>b) alert

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = "stark";
if ((houseName = "")) {
  alert("winter is coming");
} else if ((houseName = "lannister")) {
  alert("A lannister always pays his debt");
} else {
  alert(" All men must die");
}

// 5. Convert the above code using`?` terniary operator

// let houseName = "stark";

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = 7;
switch (month) {
  case 1:
    alert("in jan 31 days");
    break;
  case 2:
    alert("in feb 28 days");
    break;
  case 3:
    alert("in march 31 days");
    break;
  case 4:
    alert("in aprl 30 days");
    break;
  case 5:
    alert("in may 31 days");
    break;
  case 6:
    alert("in june 30 days");
    break;
  case 7:
    alert("in july 31 days");
    break;
  case 8:
    alert("in aug 31 days");
    break;
  case 9:
    alert("in sept 30 days");
    break;
  case 10:
    alert("in oct 31 days");
    break;
  case 11:
    alert("in nov 30 days");
    break;
  case 12:
    alert("in june 31 days");
    break;
  default:
    alert("no motnh left");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let inhandSalary = 20000;
let inhandSalary_1 = 40000;
let inhandSalary_2 = 50000;

// let inhandSalary = prompt("salary");
alert(`${(inhandSalary * 10) / 100}`);
alert(`${(inhandSalary_1 * 20) / 100}`);
alert(`${(inhandSalary_2 * 30) / 100}`);

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("your marks"));

if (marks > 100) {
  alert("Marks can't be greater than 100");
} else if (marks > 80 && marks < 100) {
  alert("Grade A");
} else if (marks > 50 && marks < 80) {
  alert("Grade B");
} else if (marks > 30 && marks < 50) {
  alert("Grade C");
} else if (marks > 0) {
  alert("Grade D");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt("what is the waether like outside");
switch (weather) {
  case "sunny":
    alert("wear a T-shirt");
    break;
  case "rainy":
    alert("Don't forget to take your raincoat");
    break;
  case "hot":
    alert("get a hankey");
    break;
  case "frezzing":
    alert("get your sweeter on");
    break;
  default:
    alert("not a valid input");
}
