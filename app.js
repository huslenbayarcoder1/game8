//massive/array
var too = [5, 5, 4, 4];
console.log(too[0]);
var test = ["test", 10, true, null];
console.log(test);
console.log(test[test.length - 1]);
var fruits = ["alim", "banana", "liir", "shavgai", "guzeeljgene"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
var numbers = [6, 3, 9, 4, 10];
console.log(numbers);
for (var i = 0; i <= numbers.length - 1; i++) {
    console.log(numbers[i]);
}
var toos = [3, 1, 6, 7, 8];
var niilber = 1;
console.log(toos[0] * toos[toos.length - 1]);
var nums = [3, 4, 7, 1, 9, 8, 6, 5, 2, 10];
console.log(nums);
for (var i = 0; i <= nums.length - 1; i++) {
    niilber = niilber * nums[i];
}
console.log("niilber:" + niilber);
var to = [4, 5, 7, 8, 1, 9, 0];
console.log(to);
for (var i = 0; i <= to.length - 1; i++) {
    if (to[i] % 2 == 0) {
        console.log("tegsh:" + to[i]);
    } else {
        console.log("sondgoi:" + to[i]);
    }
}
var i = -1;
var colors = ["green", "red", "black", "blue", "purple"];
var body = document.getElementsByTagName("body")[0];
function changeColor() {
    i++;
    body.style.backgroundColor = colors[i];
    if (i > colors.length - 1) {
        i = 0;
    }
    body.style.backgroundColor = colors[i];
    button.innerText = colors[i];
}
var butten = document.getElementsByTagName("button")[1];
var i = -1;
function changeColor() {
    i++;
    if (i > colors.length - 1) {
        i = 0;
    }
}
body.style.backgroundColor = colors[i];
function backColor() {
    i--;
    body.style.backgroundColor = colors[i];
}

