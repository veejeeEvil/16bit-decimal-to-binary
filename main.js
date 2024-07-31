let array = []; // 16 symbols
array.length = 16;
array.fill(0);
// WEB REFERENCES
const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener("input", toBinary);

// app
output.textContent = array.join("");
function toBinary(number) {
    number = input.value;
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        numberDivided = number / 2;
        numberQtn = Math.floor(numberDivided); // Quotient
        remainder = number % 2;
        number = numberDivided;
        array[i] = Math.floor(remainder);
        x = String(array[i] + x);
    }
    output.textContent = x;
}