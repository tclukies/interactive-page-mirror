// Define a function named getTextById
// The function should accept 1 parameter: id
// The function should select the element with the given id
// The function should return the element's textContent

function getTextById(id) {
  return document.getElementById(id).textContent;
}
// getTextById("title");
// console.log(getTextById("test-elements"));

// Define a function named setTextById
// The function should accept 2 parameters: id and text
// The function should select the element with the given id
// The function should set the element's textContent to be the given text
function setTextById(id, text) {
  document.getElementById(id).textContent = text;
}
// setTextById(id, "Goodbye World!");

// Define a function named getTextByClassName
// The function should accept 1 parameter: className
// The function should select the element with the given className
// Assume there is only 1 element with the given className on the page
// The function should return the element's textContent
function getTextByClassName(className) {
  return document.getElementsByClassName(className)[0].textContent;
}

// Define a function named setTextByClassName
// The function should accept 2 parameters: className and text
// The function should select the element with the given className
// Assume there is only 1 element with the given className on the page
// The function should set the element's textContent to be the given text

function setTextByClassName(className, text) {
  document.getElementsByClassName(className)[0].textContent = text;
}

// Define a function named addClassById
// The function should accept 2 parameters: id and className
// The function should select the element with the given id
// The function should add the given class to the element's classList
function addClassById(id, className) {
  document.getElementById(id).classList.add(className);
}

// Define a function named getValueByName
// The function should accept 1 parameter: name
// The function should select the element with the given name
// Assume there is only 1 element with the given name on the page
// The function should return the element's value
function getValueByName(name) {
  return document.getElementsByName(name)[0].value;
}

// Define a function named setValueByName
// The function should accept 2 parameters: name and value
// The function should select the element with the given name
// Assume there is only 1 element with the given name on the page
// The function should set the element's value to be the given value
function setValueByName(name, value) {
  document.getElementsByName(name)[0].value = value;
}

// Define a function named hideByClassName
// The function should accept 1 parameter: className
// The function should set the display property to 'none' on all elements with the given className

function hideByClassName(className) {
  var elements = document.getElementsByClassName("hide-me");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
}
// console.log(document.getElementsByClassName("hide-me"));

// Define a function named setStyleByClassName
// The function should accept 3 parameters: className, styleProperty and value
// The function should set the given style property to the given value on all elements with the given className
// This function should not get rid of previous styles that are on these elements
function setStyleByClassName(className, styleProperty, value) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style[styleProperty] = value;
  }
  console.log(elements[0].style);
}
setStyleByClassName("style-me", "backgroundColor", "purple");

function makeElement(text) {
  var newElement = document.createElement("p");
  newElement.innerHTML = text;
  return newElement;
}

function addElement(parentId) {
  var parentElement = document.getElementById(parentId);
  var newElement = document.createElement("p");
  newElement.innerHTML = "You added me!";
  parentElement.appendChild(newElement);
}
