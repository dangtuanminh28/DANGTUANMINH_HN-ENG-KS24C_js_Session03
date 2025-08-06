let firstName: string = "dang";
let lastName: string = "minh";

function capitalize(name: string): string {
    if (name.length === 0) return "";
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

firstName = capitalize(firstName);
lastName = capitalize(lastName);

let fullName: string = firstName + " " + lastName;

console.log("Full name:", fullName);