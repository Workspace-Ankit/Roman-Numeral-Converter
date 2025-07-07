const inputEl =document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanArr = [
  ["M",1000],
  ["CM",900],
  ["D",500],
  ["CD",400],
  ["C",100],
  ["XC",90],
  ["L",50],
  ["XL",40],
  ["X",10],
  ["IX",9],
  ["V",5],
  ["IV",4],
  ["I",1],
]


const romanConverter = (inputNum)=>{
  let result = ""
  for(let [symbol, value] of romanArr){
    while(inputNum>= value){
      result += symbol;
      inputNum -= value;
    }
  }
  return result;
}

const showOutput = ()=>{

  output.classList.remove("hidden", "error", "correct");

  const inputNum = parseInt(inputEl.value);
  if(inputNum===0 || isNaN(inputNum)){
  output.innerText= "Please enter a valid number.";
  output.classList.add("error");
  }
  else if(inputNum<1){
  output.innerText= "Please enter a number greater than or equal to 1.";
  output.classList.add("error");
  }
  else if(inputNum>3999){
  output.innerText= "Please enter a number less than or equal to 3999.";
  output.classList.add("error");
  }
  else {
  output.innerText= romanConverter(inputNum);  
  output.classList.add("correct");
  }

}


inputEl.addEventListener("keydown", (e)=>{
  if (e.key === "Enter") {
   
    if (!inputEl.value) {
      inputEl.reportValidity();
      return;
    }showOutput();
  }
});

convertButton.addEventListener("click", showOutput);
