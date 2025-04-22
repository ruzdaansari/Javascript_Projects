const userInput = document.querySelector("input");
const romanDisplayDiv = document.querySelector(".romanNoDiv");

let userEnteredValue = "";
let checkingNum = [];
// let tenNumArr = [
//   {
//     1: "I",
//     2: "II",
//     3: "III",
//     4: "IV",
//     5: "V",
//     6: "VI",
//     7: "VII",
//     8: "VIII",
//     9: "IX",
//     10: "X",
//     20: "XX",
//     30: "XXX",
//     40: "XL",
//     50: "L",
//     60: "LX",
//     70: "LXX",
//     80: "LXXX",
//     90: "XC",
//     100: "C",
//   },
// ];

const romanObject = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function generateRomanNum(userValue){
  let number = +userValue
  if(number < 1 || number > 4999){
    document.querySelector(".error").style.visibility = "visible";
    romanDisplayDiv.innerHTML = " ";
  }else{
    document.querySelector(".error").style.visibility = "hidden";
    let result = "";
    let romanNum = Object.keys(romanObject);
    romanNum.forEach((key)=>{
    while(romanObject[key] <= number){
      number = number -  romanObject[key];
      result += key
    }
    })
    romanDisplayDiv.innerHTML = result;
  }

}
function inputChangeHandler(e) {
  userEnteredValue = e.target.value;
  // romanDisplayDiv.innerHTML = userEnteredValue;

  // if (userEnteredValue.length > 1 && userEnteredValue !== " ") {
  //   checkingNum = userEnteredValue.split("");

  //   console.log(checkingNum);

    
  //   switch (+checkingNum[0]) {
  //     case 1:
  //       if (checkingNum.length > 2) {
  //         romanDisplayDiv.innerHTML = tenNumArr[0][100];
  //       } else {
  //         romanDisplayDiv.innerHTML = tenNumArr[0][10];
  //       }
  //       break;
  //     case 2:
  //       romanDisplayDiv.innerHTML = tenNumArr[0][20];
  //       break;
  //     case 3:
  //       romanDisplayDiv.innerHTML = tenNumArr[0][30];
  //       break;
  //     case 4:
  //       romanDisplayDiv.innerHTML = tenNumArr[0][40];
  //       break;
  //     case 5:
  //       romanDisplayDiv.innerHTML = tenNumArr[0][50];
  //       break;
  //     case 6:
  //       romanDisplayDiv.innerHTML = tenNumArr[0][60];
  //       break;
  //     case 7:
  //       romanDisplayDiv.innerHTML = tenNumArr[0][70];
  //       break;
  //     case 8:
  //       romanDisplayDiv.innerHTML = tenNumArr[0][80];
  //       break;
  //     case 9:
  //       romanDisplayDiv.innerHTML = tenNumArr[0][90];
  //       break;
  //     default:
  //       break;
  //   }


  //   if (userEnteredValue.length === 2 && !checkingNum[1].includes(0)) {
  //     romanDisplayDiv.innerHTML += tenNumArr[0][checkingNum[1]];
  //   }
  // } else if (userEnteredValue !== " ") {
  //   romanDisplayDiv.innerHTML = tenNumArr[0][userEnteredValue];
  // }

  generateRomanNum(userEnteredValue)
  userInput.value = "";

}

userInput.addEventListener("focusin", (e) =>{
  document.querySelector(".error").style.visibility = "hidden";
});

userInput.addEventListener("focusout", (e) => inputChangeHandler(e));

