const numbValue = document.querySelectorAll("input")
const errorMgs = document.querySelectorAll(".errormsg")
const fivePerc = document.querySelector(".five")
const tenPerc = document.querySelector(".ten")
const fifteenPerc = document.querySelector(".fiteen")
const twentyfivePerc = document.querySelector(".twentyfive")
const fiftyPerc = document.querySelector(".fifty")
const tipAmount = document.querySelector(".tiptotal")
const Total = document.querySelector(".FullTotal")
let Bill = document.getElementById("Billvalue")
let numOfPeoPO = document.getElementById("everyBody")
let customize = document.getElementById("customize")
const Reset = document.querySelector(".reset")

numbValue[0].addEventListener("click", block, false)

function block (){
for (let i = 0; i < 3; i++){
  numbValue[i].style.border = "none"
  for (let i = 0; i < errorMgs.length; i++){
  errorMgs[i].style.display = "none"
  }

}
}

Bill.addEventListener("keydown", itsValue())
numOfPeoPO.addEventListener("keydown", itsValue())
customize.addEventListener("keyup", custom)


// buttons
  fivePerc.addEventListener("click", fiveclalc)
 tenPerc.addEventListener("click", tenclalc)
 fifteenPerc.addEventListener("click", fiftenclalc)
 twentyfivePerc.addEventListener("click", twentyfiveclalc)
 fiftyPerc.addEventListener("click", fiftyclalc)



function itsValue(){
  let  Bill = document.getElementById("Billvalue").value
  let numOfPeoPO = document.getElementById("everyBody").value
  

}

function fiveclalc() {
let billNumb = parseFloat(Bill.value);
  let peopleNumb = parseInt(numOfPeoPO.value)
  let calcPercent = billNumb * 0.05
  
   let Tip = (calcPercent / peopleNumb)
   Tip = parseFloat(Tip).toFixed(2)

  let totalAmount = billNumb + calcPercent
  let TotalEach = totalAmount / peopleNumb
TotalEach = parseFloat(TotalEach).toFixed(2)

  Total.innerHTML = TotalEach
  tipAmount.innerHTML = Tip
}

function tenclalc () {
let billNumb = parseFloat(Bill.value);
  let peopleNumb = parseInt(numOfPeoPO.value)
  let calcPercent = billNumb * 0.1
  
   let Tip = (calcPercent / peopleNumb)
   Tip = parseFloat(Tip).toFixed(2)

  let totalAmount = billNumb + calcPercent
  let TotalEach = totalAmount / peopleNumb
TotalEach = parseFloat(TotalEach).toFixed(2)

  Total.innerHTML = TotalEach
  tipAmount.innerHTML = Tip
}

function fiftenclalc () {
let billNumb = parseFloat(Bill.value);
  let peopleNumb = parseInt(numOfPeoPO.value)
  let calcPercent = billNumb * 0.15
  
   let Tip = (calcPercent / peopleNumb)
   Tip = parseFloat(Tip).toFixed(2)

  let totalAmount = billNumb + calcPercent
  let TotalEach = totalAmount / peopleNumb
TotalEach = parseFloat(TotalEach).toFixed(2)

  Total.innerHTML = TotalEach
  tipAmount.innerHTML = Tip

}

function twentyfiveclalc() {
  let billNumb = parseFloat(Bill.value);
  let peopleNumb = parseInt(numOfPeoPO.value)
  let calcPercent = billNumb * 0.25
  
   let Tip = (calcPercent / peopleNumb)
   Tip = parseFloat(Tip).toFixed(2)

  let totalAmount = billNumb + calcPercent
  let TotalEach = totalAmount / peopleNumb
TotalEach = parseFloat(TotalEach).toFixed(2)

  Total.innerHTML = TotalEach
  tipAmount.innerHTML = Tip
}

function fiftyclalc() {
let billNumb = parseFloat(Bill.value);
  let peopleNumb = parseInt(numOfPeoPO.value)
  let calcPercent = billNumb * 0.5
  
   let Tip = (calcPercent / peopleNumb)
   Tip = parseFloat(Tip).toFixed(2)

  let totalAmount = billNumb + calcPercent
  let TotalEach = totalAmount / peopleNumb
TotalEach = parseFloat(TotalEach).toFixed(2)

  Total.innerHTML = TotalEach
  tipAmount.innerHTML = Tip
}




function custom(){
  let customize = document.getElementById("customize").value
  live()
}

function live() {
  let customValue = parseFloat(customize.value)
  let billNumb = parseFloat(Bill.value);
  let peopleNumb = parseInt(numOfPeoPO.value)
  
  let customPercent = customValue / 100
  
  let calcPercent = billNumb * customPercent
  
   let Tip = (calcPercent / peopleNumb)
   Tip = parseFloat(Tip).toFixed(2)

  let totalAmount = billNumb + calcPercent
  let TotalEach = totalAmount / peopleNumb
TotalEach = parseFloat(TotalEach).toFixed(2)

  Total.innerHTML = TotalEach
  tipAmount.innerHTML = Tip
}

Reset.addEventListener("click", removeAll)

function removeAll() {
location.reload();
}