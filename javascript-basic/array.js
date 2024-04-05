const arrs = [1, 2, 3, 4, 5, 6];
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
