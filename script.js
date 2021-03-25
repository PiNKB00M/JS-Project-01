// Parsing a JSON object
var data = '{"name":"Xianrui", "age":24, "city":"Atlanta"}'

var obj = JSON.parse(data);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", " + obj.city;

// Define array
let users = [];

// Insert object into array
users.push(obj);

/*
    Use of Moderan Array methods
    Many Array methods
    1 Map 2 Find 3 Filter 4 forEach
    5 Every 6 Some 7 Includes 8 Reduce
    We used below arr.findIndex
*/

let user = users.find(item => item.city == "Atlanta");

/*
   Arrow Function same as lambda expression
   It is use for write clean and concise code
*/
hello = () => {return (user.city);}

document.getElementById("prac").innerHTML = hello();

/*
   Classes
   Almost same as other language classes
*/

class Student
{
  constructor(student_name, passing_year)
  {
    this.student_name = student_name;
    this.passing_year = passing_year;
  }
}

student_obj = new Student("Zeng", 2021);

document.getElementById("student").innerHTML = student_obj.student_name + " " + student_obj.passing_year;

/*
   Clousres
   By using Clousres functin can able to
   access variables that defined outside the function
   Inside the its parent objects
*/
function moviewFunc()
{
  var movie = 'Avengers: Endgame';
  function displayName()
  {
    document.getElementById("movie_id").innerHTML = movie;
  }
  return displayName;
}

var my_movie_fun = moviewFunc();
my_movie_fun();