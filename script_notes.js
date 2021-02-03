console.log('Hello World');
console.log(Date());
var className = 'Web Design V';
console.log(className);
const companyName = 'Toronto Public Library';
console.log(companyName);
className = 'Web Design VI';
console.log('The value of my className variable is now ' + className);
var myName = 'Marek';
console.log('Hello ' + myName);
const h1 = document.querySelector('h1');
console.log(h1);
const h2 = document.querySelectorAll('h2');
console.log(h2);
var studentNames = ['Marek', 'David', 'Nyima', 'Rafael'];
console.log('My class is made up of ' + studentNames);
console.log('The first student in my class is called ' + studentNames[0]);
studentNames[1] = 'Bob';
console.log('The second student in my class is called ' + studentNames[1]);
console.log(studentNames);
console.log(h2[1]);
console.log('There are ' + h2.length + ' h2s on my page!');
h1.classList.add('new-h1');

// If Loops

var currentDate = new Date();
var currentTime = currentDate.getHours();
console.log(currentTime);
if (currentTime < 12) {
  console.log('Good Morning');
} else if (currentTime < 20) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// For Loops

var counter = 1;
while (counter < 10) {
  console.log(counter);
  counter++;
}

for (var counter2 = 1; counter2 < 10; counter2++) {
  console.log(counter2);
}

// Functions

function myFunction() {
  console.log('This function is running.');
  console.log('Hey Marek, cool looking function!');
  console.log('Nyima is the coolest moderator.');
}

function timesTable(multiplier) {
  for (var x = 1; x <= 10; x++) {
    console.log(x + ' x ' + multiplier + ' = ' + (x * multiplier));
  }
}

// Event Listeners

var image = document.querySelectorAll('section img')[0];
image.addEventListener('click', myFunction);
