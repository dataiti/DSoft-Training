let str = "em Dat";
// 1. đếm số lượng ký tự trong một chuỗi
str.length;
// 2. chuyển đổi một chuỗi thành chữ hoa (uppercase) hoặc chữ thường (lowercase)
str.toUpperCase();
str.toLowerCase();
// 3. cắt một phần của chuỗi
str.slice(1, 6);
// 4. thay thế một phần của chuỗi bằng một chuỗi khác
str.replace("Dat", "Datdz");
// 5. kiểm tra xem một chuỗi có bắt đầu hoặc kết thúc bằng một chuỗi khác không
str.startsWith("em");
str.endsWith("Dat");
// 6. tìm vị trí của một chuỗi con trong chuỗi
str.indexOf("Dat");
// 7. chuyển đổi một chuỗi thành một mảng các từ
str.split(" ");
// 8. loại bỏ các khoảng trắng từ đầu và cuối chuỗi
str.trim();
// 9. lặp lại một chuỗi nhiều lần
str.repeat(3);
// 10. kiểm tra xem một chuỗi có chứa một chuỗi con hay không
str.includes("Dat");
// 11. chuyển đổi một số thành một chuỗi có định dạng số
let number = 123;
number.toString();
// 12. chuyển đổi một chuỗi thành một mảng các ký tự
str.split("");
// 13. lặp qua từng ký tự trong một chuỗi
for (let char of str) {
  console.log(char);
}
// 14. tạo một chuỗi từ một mảng các ký tự
let charArrayy = ["D", "a", "t", "d", "z"];
charArrayy.join("");

// 15. Viết hàm đếm số lần xuất hiện của một từ trong một chuỗi
function countWordInString(str, word) {
  const words = str.split(" ");
  let count = 0;
  words.forEach((w) => {
    if (w.toLowerCase() === word.toLowerCase()) count++;
  });
  return count;
}
// 16. Viết một hàm để đảo ngược một chuỗi
function reverseString(str) {
  return str.split("").reverse().join("");
}
// 17. Viết một hàm để kiểm tra xem một chuỗi có phải là chuỗi đối xứng hay không
function checkSymmetry(str) {
  reverseString = str.split("").reverse().join("");
  return str === reverseString;
}
// 18. Loại bỏ khoảng trắng ở đầu và cuối của một chuỗi:
str.trim();
// 19. kiểm tra xem một chuỗi có chứa một chuỗi con đã cho hay không
let substr = "Dat";
str.includes(substr);
