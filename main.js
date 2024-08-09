let inputField = document.getElementById("inputField");
let todoConatiner = document.getElementById("todoContainer");
let addToDo = document.getElementById("addToDo");

addToDo.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.classList.add('paragraph-style');
    paragraph.innerHTML = inputField.value;
    todoConatiner.appendChild(paragraph);
    inputField.value = ''

    paragraph.addEventListener('click', function(){
        if(paragraph.style.textDecoration === "line-through"){
            paragraph.style.textDecoration = ""
        }else{
            paragraph.style.textDecoration = "line-through"
        }
    })

    paragraph.addEventListener("dblclick", function(){
        paragraph.remove();
    })
})

const nama = "Farhan";
let alamat = 'Jakarta';
alamat='Bali';
const nis = "304837240";
console.log(nama);
// alert(nama);
// document.getElementById("root").innerHTML = nama;

console.log(typeof nama);

const x = '3';
const y = 2;
const hasil = x + y;
console.log("Hasil: ", hasil);
console.log(nama === "Farhan");

const string1 = "He said 'Goodbye'";
console.log(string1.length);
console.log(string1.slice(9, 16));

const day = 8;

if(day == 7){
    console.log("Hari ini dalah hari Selasa.");
} else if(day == 1){
    console.log("Hari ini adalah hari Senin.");
}else{
    console.log("Hari ini bukan hari Senin ataupun Selasa.");
}

switch (day) {
    case 2:
        console.log("Hari ini dalah hari Selasa.");
        break;
    case 1:
        console.log("Hari ini adalah hari Senin.");
        break;
    default:
        console.log("Hari ini bukan hari Senin ataupun Selasa.");
        break;
}

for(let i = 1; i <= 5; i++){
    console.log("Number: ", i);
}

const fruits = ["Apple", "Banana", "Orange", "Papaya"];

for(var i in fruits){
    console.log("Buah: ", fruits[i]);
}

const num1 = 15;
const num2 = 20;

const num3 = 34;
const num4 = 16;

function sum(x, y, z){
    let s = x + y + z;
    return s
}

const result = sum(num1, num2, num4);
const result3 = sum(num3, num4, num1);
console.log("Result: ", result);