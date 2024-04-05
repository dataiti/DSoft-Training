let obj = {
  name: "Dat",
  age: 22,
  address: "Quang Nam",
};
// 1. Thêm một thuộc tính mới vào một object
obj.school = "Duy Tan";
// 2. Truy cập vào giá trị
obj.name;
obj["name"];
// 3. duyệt qua các thuộc tính của một object
for (let key in obj) {
  console.log(key + ": " + obj[key]);
}
// 4. Kiểm tra xem một object có chứa một thuộc tính
obj.hasOwnProperty("name");
// 5. Xóa một thuộc tính khỏi một object
delete obj.address;
// 6. Sao chép một object
let copiedObj1 = Object.assign({}, obj);
let copiedObj2 = { ...obj };
// 7. Biến đổi một object thành một mảng
Object.entries(obj);
// 8. lấy ra tất cả các khóa (keys) của một object
Object.keys(obj);
// 9. lấy ra tất cả các giá trị của một object
Object.values(obj);
// lấy kích thước của một object
Object.keys(obj).length;
// 10. kiểm tra xem một object có phải là một object rỗng không
Object.keys(obj).length === 0;
// 11. kiểm tra xem một object có phải là một mảng không
Array.isArray(obj);
// 12. chuyển đổi một object thành một chuỗi JSON
JSON.stringify(obj);
// 13. chuyển đổi một chuỗi JSON thành một object
JSON.parse(jsonString);
