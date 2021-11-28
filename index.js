// 1

const myStr = '55639217';
let newStr = '';
const myArr = [];

newStr = myStr.split('');

for (let i = 0; i < newStr.length; i++) {
  myArr.push(newStr[i]);
  if (newStr[i] % 2 && newStr[i+1] % 2) {
    myArr.push(':');
  }  
}

newStr = myArr.join(' ');
console.log(newStr);

// 2  and 3

const newArr = [5, 5, 4, 5, 3, 6, 6];

const countIdentic = workArr => {
  let x = 0;
  for (let i = 0; i < workArr.length; i++) {
    for (let j = 0; j < workArr.length; j++) {
      if (workArr[i] === workArr[j] && i !=j) {
      x++;
      workArr.splice(j, 1);
      }
    }
  }
  console.log(workArr);
  return x;
}

console.log(countIdentic(newArr));

// 4

const removeItem = (arr, num) => {
  if (num < arr.length) {
    arr.splice(num,1);
    console.log('delete element with index ' + num);
    return arr;
  } else {
    console.log('no element');
  }
}

console.log(removeItem(newArr, 1));

// 3

const arrayA = [1, 6, 6, 1, 1, 1, 8, 5, 5, 3, 4, 5, 2, 1, 2, 2 ,1];

const countIdentic2 = array => {
let x = 1;
let y = 0;
const array2 = [];

  for (let i = 0; i < array.length; i++) {
    if (array.includes(array[i], x)) {
      if (!array2.includes(array[i])) {
        array2.push(array[i]);
        y++;
      }
    } else {
      if (!array2.includes(array[i])) {
        array2.push(array[i]);
      }
    }
    x++
  }
  return array2;
}

console.log(countIdentic2(arrayA));

// 2

const countIdentic3 = array => {
  let x = 1;
  let y = 0;
  for (let i = 0; i < array.length; i++) {
  if (array.includes(array[i], x)) {
    y++;
    }
  x++
  }
  return y;
}

  console.log('repeating elements: ' + countIdentic3(arrayA));
