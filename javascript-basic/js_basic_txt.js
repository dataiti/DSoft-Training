// 1. Khời tạo 1 array có 2000 phần tử có các key như sau (id, name, address, gender, phoneNumber, description, source) sao cho
// name & source không trùng nhau
// - Viết 1 function (searchItemBynameOrSource) để tìm kiếm 1 item dựa trên source hoặc name trong array trên (có thể làm nhiều cách)
// - Tạo 1 form input để show lên màn hình.
// - Cho bối cảnh như sau: giả sử người dùng sẽ dùng hàm này nhiều lần hoặc rất nhiều lần cùng 1 thời điểm, làm thế nào để tối ưu
// hiệu suất của function trên, viết lại function có tên "improveSearchItemBynameOrSource" nếu có.
let arrs = [];

for (let index = 0; index <= 5; index++) {
  arrs.push({
    id: index,
    name: `name-${index}`,
    address: "address",
    gender: "gender",
    phoneNumber: "phoneNumber",
    description: "description",
    source: `source-${index}`,
  });
}

const input = document.querySelector(".searchText");
const container = document.querySelector(".result-container");

const renderList = ({ arrsRender = arrs }) => {
  container.innerHTML = "";

  arrsRender.forEach((arr) => {
    const divElement = document.createElement("div");
    divElement.textContent = arr.name;
    container.appendChild(divElement);
  });
};

const searchItemBynameOrSource = ({ searchText = "" }) => {
  let filterArrs = arrs;

  if (searchText) {
    const search = searchText.toString().toLowerCase();

    filterArrs = arrs.filter(
      ({ name, source }) =>
        name.toString().toLowerCase() === search ||
        source.toString().toLowerCase() === search
    );
  }

  renderList({ arrsRender: filterArrs });
};

// searchItemBynameOrSource({ searchText: "source-1" });

const debounce = (fn, delay) => {
  let timerId = null;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
};

const improveSearchItemBynameOrSource = ({ searchText }) => {
  debounce(searchItemBynameOrSource({ searchText }), 5000);
};

input.addEventListener("input", (e) => {
  improveSearchItemBynameOrSource({ searchText: e.target.value });
});

renderList({ arrsRender: arrs });

// 2. Tạo 1 form input để nhập số (là số ngày đi làm tiếp theo, không tính t7, CN), hãy viết function trả về kết quả ngày đó là thứ mấy trong tuần.
// ex: nhập 3 sẽ trả về "thứ 5"
const DAY_IN_WEEK = [
  { id: 0, value: "Thứ hai" },
  { id: 1, value: "Thứ ba" },
  { id: 2, value: "Thứ tư" },
  { id: 3, value: "Thứ năm" },
  { id: 4, value: "Thứ sáu" },
  { id: 5, value: "Thứ bảy" },
  { id: 6, value: "Chủ nhất" },
];

const inputNumber = document.querySelector(".inputNumber");
const result = document.querySelector(".result");

const getNextDay = ({ dayNumber }) => {
  let nextDayValue;

  if (!dayNumber) {
    result.innerText = "Ngay khong dc bo trong";
    return;
  }

  const currenDate = new Date();
  const nextDayIndex = (currenDate.getDay() - 1 + Number(dayNumber)) % 7;

  let nextDay = DAY_IN_WEEK.find((day) => day.id === nextDayIndex);

  if (nextDay.id >= 5) nextDayValue = DAY_IN_WEEK[0].value;
  else nextDayValue = nextDay.value;

  return nextDayValue;
};

inputNumber.addEventListener("input", (e) => {
  const nextDayValue = getNextDay({ dayNumber: e.target.value });
  if (nextDayValue) result.innerText = nextDayValue;
});

// 3. Viết 1 hàm tính toán số lớn bằng js, với các phép tính(+,-,*,/). Yêu cầu
// - Có 2 tham số (đều lớn hơn 10 chữ số)
// - Kết quả không có sai số
// - Clean code
// - Có comment, giải thích
// - Tạo 1 form UI đơn giản để show lên màn hình.
// Có thể tham khảo https://www.calculator.net/big-number-calculator.html để tham khảo UI & kết quả tính toán
const number1 = document.querySelector(".inputNumber1");
const number2 = document.querySelector(".inputNumber2");

const additionBtnElement = document.querySelector(".addition-btn");
const subtractionBtnElement = document.querySelector(".subtraction-btn");
const multiplicationBtnElement = document.querySelector(".multiplication-btn");
const divisionBtnElement = document.querySelector(".division-btn");

const calculateResultElement = document.querySelector(".calculate-result");

additionBtnElement.addEventListener("click", (e) => {
  e.preventDefault();
  calculateResultElement.innerText =
    Number(number1.value) + Number(number2.value);
});

subtractionBtnElement.addEventListener("click", (e) => {
  e.preventDefault();

  calculateResultElement.innerText =
    Number(number1.value) - Number(number2.value);
});

multiplicationBtnElement.addEventListener("click", (e) => {
  e.preventDefault();

  calculateResultElement.innerText =
    Number(number1.value) * Number(number2.value);
});

divisionBtnElement.addEventListener("click", (e) => {
  e.preventDefault();
  if (Number(number2.value) === 0)
    calculateResultElement.innerText = "Không thể chia cho 0";
  try {
    calculateResultElement.innerText =
      Number(number1.value) / Number(number2.value);
  } catch (error) {}
});
