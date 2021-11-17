/*
---------------------------------------------------------------------------
Objects - Part One
*/

// Do not modify this object here.
let examplePerson = {
  firstName: "Homer",
  lastName: "Simpson",
  hobbies: ["Television", "Eating Donuts", "Playing with his Kids"],
  address: {
    number: 742,
    street: "Evergreen Terrace",
    city: "Springfield",
    state: "Illinois",
    zipcode: "12345",
  },
  "favorite color": "yellow",
};

/*
Using the function below, print the person to the page according 
to the instructions on my.kenzie
*/

function renderPerson(person) {
  // Your Code Here
  let divOne = document.createElement("div");
  divOne.setAttribute("class","card");
  document.body.append(divOne);
  
  let h2El = document.createElement('h2');
  h2El.textContent = `${examplePerson.firstName} ${examplePerson.lastName}`;
  divOne.appendChild(h2El);

  let headerFour = document.createElement("h4");
  headerFour.textContent = "Hobbies"
  divOne.appendChild(headerFour);

  let ulEl = document.createElement("ul");
  let hobbiesArray = "";
  for (let index = 0; index < examplePerson.hobbies.length; index++) {
    hobbiesArray += `<li>${examplePerson.hobbies[index]}</li>`
  }
  ulEl.textContent = `${hobbiesArray}`;
  divOne.appendChild(ulEl);

  let shippingHeadingHtml = document.createElement(`h4`);
  shippingHeadingHtml.textContent = "Shipping Address";
  divOne.appendChild(shippingHeadingHtml);
  let sName = `<p>${examplePerson.firstName} ${examplePerson.lastName}</p>`
  let sStreet = `<p>${examplePerson.address.street}</p>`;
  let sCity = `<p>${examplePerson.address.city}</p>`;
  let sState = `<p>${examplePerson.address.state}</p>`;
  let sZip = `<p>${examplePerson.address.zipcode}</p>`;
  shippingHeadingHtml.innerHTML = `${sName}  ${sStreet}  ${sCity}  ${sState}   ${sZip}`;

  let faveColorHeading = document.createElement(`h4`);
  faveColorHeading.textContent = "Favorite Color";
  divOne.appendChild(faveColorHeading);
  let faveColor = examplePerson["favorite color"]
  faveColorHeading
  

  
 



 


 

}

renderPerson(examplePerson);

/*
---------------------------------------------------------------------------
Part Two

Create a new person.  

Your object should look very similar to the Person object above!
But you should use different values.  Put whatever you want for the values.

Call renderPerson() and pass your new person object in as an argument to 
render your person to the page.
*/

// Your Code Here

let secondPerson = {
  firstName: "Aerys",
  lastName: "Targaryen",
  hobbies: ["Justice", "Dragons", "Playing with his Fire"],
  address: {
    number: 742,
    street: "DragonStone",
    city: "King's Landing",
    state: "Seven Kingdoms",
    zipcode: "12345",
  },
  "favorite color": "red",
};

renderPerson(secondPerson)
/*
---------------------------------------------------------------------------
Part Three

Modify the person object to change them to bart.  
Follow the instruction on my.kenzie
*/

function changePersonToBart(person) {
  // Your Code Here


}

// Then, call the function with the argument examplePerson
// Assign the result to a new variable.  Then call renderPerson with the 
// new variable

/*
---------------------------------------------------------------------------
Part Four (Optional Practice)

Create your own object!
*/

// Your Code Here




