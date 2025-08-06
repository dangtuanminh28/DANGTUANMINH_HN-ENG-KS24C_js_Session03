let num1: number = 10;
let num2: number = 5;
let num3: number;
let num4: string = "10";
let num5: boolean = true;

// Cộng
num3 = num1 + num2;
console.log(`Cộng: ${num1} + ${num2} = ${num3}`);

// Trừ
num3 = num1 - num2;
console.log(`Trừ: ${num1} - ${num2} = ${num3}`);

// Nhân
num3 = num1 * num2;
console.log(`Nhân: ${num1} * ${num2} = ${num3}`);

// Chia
num3 = num1 / num2;
console.log(`Chia: ${num1} / ${num2} = ${num3}`);

// Cộng chuỗi với boolean
let result6 :string = num4 + num5.toString();
console.log(`Kết quả của "${num4}" + ${num5} = ${result6}`);
