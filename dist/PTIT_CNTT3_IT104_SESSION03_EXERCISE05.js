"use strict";
let firstName = "dang";
let lastName = "minh";
function capitalize(name) {
    if (name.length === 0)
        return "";
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
firstName = capitalize(firstName);
lastName = capitalize(lastName);
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);
