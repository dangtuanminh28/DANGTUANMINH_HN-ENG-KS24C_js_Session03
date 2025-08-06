"use strict";
function toNumber(value) {
    if (typeof value === "number")
        return value;
    const parsed = Number(value);
    return isNaN(parsed) ? null : parsed;
}
function add(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "Tham số không hợp lệ!";
    }
    return num1 + num2;
}
function subtract(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "Tham số không hợp lệ!";
    }
    return num1 - num2;
}
function multiply(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "Tham số không hợp lệ!";
    }
    return num1 * num2;
}
function divide(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "Tham số không hợp lệ!";
    }
    if (num2 === 0) {
        return "Không thể chia cho 0!";
    }
    return num1 / num2;
}
console.log("Cộng:", add("10", 5));
console.log("Trừ:", subtract(20, "7"));
console.log("Nhân:", multiply("3", "2"));
console.log("Chia:", divide("10", "2"));
console.log("Chia lỗi:", divide(10, "abc"));
console.log("Chia 0:", divide(10, 0));
