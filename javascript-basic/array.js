const arrs = [1, 2, 3, 4, 5.23, 6.6];
const arrs2 = [6, 7];
//1. In ra phần tử đầu tiên của mảng:
arrs[0];
//2. In ra phần tử cuối cùng của mảng:
arrs[arrs.length - 1];
//3. Thêm một phần tử mới vào cuối mảng:
arrs.push(102);
//4. Xóa phần tử đầu tiên của mảng:
arrs.shift();
//5. Tìm vị trí của một phần tử trong mảng:
arrs.indexOf(78);
//6. Kiểm tra xem một phần tử có tồn tại trong mảng hay không:
arrs.includes(56);
//7. Sắp xếp các phần tử trong mảng theo thứ tự tăng dần:
arrs.sort((a, b) => a - b);
//8. Sắp xếp các phần tử trong mảng theo thứ tự giảm dần:
arrs.sort((a, b) => b - a);
//10.Sao chép một mảng sang một mảng khác:
const coppyArrs = [...arrs];
//11. Lấy ra mảng con từ một mảng:
arrs.slice(1, 3);
//12. Thêm một mảng vào một mảng khác:
arrs.push(...arrs2);
//13. Xóa một phần tử khỏi mảng dựa trên vị trí:
arrs.splice(2, 1);
//14. Chèn một phần tử vào mảng dựa trên vị trí:
arrs.splice(2, 0, 78);
//15. Lọc các phần tử chẵn trong mảng dựa trên điều kiện:
arrs.filter((arr) => arr % 2 === 0);
//17.  Tính tổng
arrs.reduce((a, b) => a + b, 0);
//18.  Tìm giá trị lớn nhất trong mảng:
Math.max(...arrs);
//19. Tìm giá trị nhỏ nhất trong mảng:
Math.min(...arrs);
//20. Tìm phần tử trung bình của mảng:
const trungBinh = arrs.reduce((a, b) => a + b, 0) / arrs.length;
//21. Ghép nối hai mảng thành một mảng mới
arrs.concat(arrs2);
//22. Tính tổng của các phần tử ở các vị trí chẵn trong mảng:
function tinhTongViTriChan(mang) {
  let tong = 0;
  for (let i = 0; i < mang.length; i += 2) {
    tong += mang[i];
  }
  return tong;
}
//23. Tính tổng của các phần tử ở các vị trí lẻ trong mảng:
function tinhTongViTriLe(mang) {
  let tong = 0;
  for (let i = 1; i < mang.length; i += 2) {
    tong += mang[i];
  }
  return tong;
}

//24. Tính tổng sô dương trong mảng
function tinhTongSoDuong(mang) {
  let tong = 0;
  for (const so of mang) {
    if (so > 0) {
      tong += so;
    }
  }
  return tong;
}
//24. Tính tổng số âm
function tinhTongSoAm(mang) {
  let tong = 0;
  for (const so of mang) {
    if (so < 0) {
      tong += so;
    }
  }
  return tong;
}
// 25. Viết một hàm để tìm số lần xuất hiện của một phần tử trong mảng
function countOccurr(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
// 26. Viết một hàm để loại bỏ các phần tử trùng lặp từ mảng
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
// 27. Viết một hàm để tìm tất cả các số nguyên tố trong mảng.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimes(arr) {
  return arr.filter((num) => isPrime(num));
}
// 28. Viết một hàm để tìm tất cả các số lẻ trong một mảng và trả về một mảng mới chỉ chứa các số lẻ đó.
function findOddNumbers(arr) {
  let oddArrs = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArrs.push(arr[i]);
    }
  }
  return oddArrs;
}
// 29. Viết một hàm để tìm phần tử lớn nhất trong một mảng và trả về chỉ số của phần tử đó.
function findMaxIndex(arr) {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}
// 30. Viết một hàm để chuyển đổi một mảng các số thực thành mảng số nguyên
function convertToIntegerArray(arr) {
  return arr.map(Math.floor);
}
// 31. Viết một hàm để tìm tất cả các cặp phần tử có thương bằng một số xác định
function findPairsWithQuotient(arr, x) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const quotient = arr[i] / arr[j];
      if (quotient === x) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}
// 32. Viết hàm để sắp xếp một mảng số nguyên theo thứ tự tăng dần mà không sử dụng phương thức sort
function sort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
// 33. Viết hàm để loại bỏ các giá trị null, undefined và NaN khỏi một mảng.
function removeNullOrUndefinedNaN(arr) {
  return arr.filter(
    (item) => item !== null && item !== undefined && !Number.isNaN(item)
  );
}
// 34.Viết hàm để kiểm tra xem một mảng có phải là một dãy số tăng dần không.
function isIncreasing(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }
  return true;
}
// 35. Viết hàm để đảo ngược một mảng mà không sử dụng phương thức reverse().
function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

const obj = {
  numbers: [1, 2, 3, 4, 5],
  names: ["Dat", "Thang", "Tuong"],
  ages: [25, 30, 35],
  evenNumbers: [2, 4, 6, 8],
  oddNumbers: [1, 3, 5, 7, 9],
};

// 36. Tính tổng của tất cả các giá trị số trong một object có các thuộc tính là số
function sum(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
}
// 37. Tìm tất cả các khóa (keys) của một object có giá trị là một mảng
function arrayKeys(obj) {
  const keys = [];
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      keys.push(key);
    }
  }
  return keys;
}
// 38. Viết một hàm để tính tổng của tất cả các số trong mảng numbers:
function sumOfNumbers(obj) {
  return obj.numbers.reduce((acc, curr) => acc + curr, 0);
}
// 39. Kiểm tra xem tất cả các phần tử trong mảng evenNumbers có phải là số chẵn không
function allEven(obj) {
  return obj.evenNumbers.every((num) => num % 2 === 0);
}
// 40. Tạo một object mới chứa thông tin về tên và tuổi của mỗi người từ mảng names và ages:
function createPersonObjects(obj) {
  const people = [];
  for (let i = 0; i < obj.names.length; i++) {
    const person = {
      name: obj.names[i],
      age: obj.ages[i],
    };
    people.push(person);
  }
  return people;
}
