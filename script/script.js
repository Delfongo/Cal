// let display = document.getElementById('display');

// function appendToDisplay(value) {
//   display.value += value;
// }

// function clearDisplay() {
//   display.value = '';
// }

// function calculateResult() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = 'Error';
//   }
// }

const output = document.querySelector(".text")
const vals = document.querySelectorAll(".val")
const clearBtn = document.querySelector(".AC")
const deleteBtn = document.querySelector(".DEL")
const equalBtn = document.querySelector(".equal")

vals.forEach(val => {
  val.addEventListener("click" , () =>{
    output.value += val.value;
  })
})

clearBtn.addEventListener("click" , () =>{
  output.value = "";
})

deleteBtn.addEventListener("click" , () =>{
  output.value = output.value.slice(0 , -1);
})

equalBtn.addEventListener("click" , () =>{
  output.value = eval(output.value);
})
