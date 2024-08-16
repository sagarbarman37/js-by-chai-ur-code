// for

for (let i = 0; i <= 10; i++) {
  //   console.log(i);
}

for (let i = 0; i <= 10; i++) {
  let element = i;
  if (element === 5) {
    // console.log("5 is the best number");
  }
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`outer loop value ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value ${j}, outer loop value ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`); // 1 to 10 teble/namota
  }
}

let myArr = ["flash", "batman", "supperman"];

for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  //   console.log(element);
}

// Break and Continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log("5 detected");
    break; // break use hone se code iteration se bahar nikal gaya.
  }
  //   console.log(`value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log("5 detected");
    continue; // continue use hone se ek condition ko maph karta hai, or baki print karta hai.
  }
  //   console.log(`value of i is ${i}`);
}

// video no - 27
