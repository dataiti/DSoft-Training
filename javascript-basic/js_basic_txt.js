// 1. Khời tạo 1 array có 2000 phần tử có các key như sau (id, name, address, gender, phoneNumber, description, source) sao cho
// name & source không trùng nhau
let arrs = [];

for (let index = 0; index < 10; index++) {
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

// - Tạo 1 form input để show lên màn hình.
const input = document.querySelector(".searchText");
const container = document.querySelector(".result-container");

const renderList = (arrsRender) => {
  container.innerHTML = "";

  arrsRender.forEach((arr) => {
    const divElement = document.createElement("div");
    divElement.textContent = arr.name;
    container.appendChild(divElement);
  });
};

// - Viết 1 function (searchItemBynameOrSource) để tìm kiếm 1 item dựa trên source hoặc name trong array trên (có thể làm nhiều cách)
const searchItemBynameOrSource = (searchText) => {
  if (!searchText) {
    renderList(arrs);
    return;
  }

  const search = searchText.toLowerCase().trim();

  const filterArrs = arrs.filter(
    ({ name, source }) =>
      name.toLowerCase().includes(search) ||
      source.toLowerCase().includes(search)
  );

  renderList(filterArrs);
};

// - Cho bối cảnh như sau: giả sử người dùng sẽ dùng hàm này nhiều lần hoặc rất nhiều lần cùng 1 thời điểm, làm thế nào để tối ưu
// hiệu suất của function trên, viết lại function có tên "improveSearchItemBynameOrSource" nếu có.
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const improveSearchItemBynameOrSource = debounce(searchItemBynameOrSource, 700);

input.addEventListener("input", (e) => {
  improveSearchItemBynameOrSource(e.target.value);
});

renderList(arrs);
// 2. Tạo 1 form input để nhập số (là số ngày đi làm tiếp theo, không tính t7, CN), hãy viết function trả về kết quả ngày đó là thứ mấy trong tuần.
// ex: nhập 3 sẽ trả về "thứ 5"

// constant
const DAYS_IN_WEEK = [
  { id: 0, value: "Thứ hai" },
  { id: 1, value: "Thứ ba" },
  { id: 2, value: "Thứ tư" },
  { id: 3, value: "Thứ năm" },
  { id: 4, value: "Thứ sáu" },
  { id: 5, value: "Thứ bảy" },
  { id: 6, value: "Chủ nhất" },
];

// variable
const inputNumber = document.querySelector(".inputNumber");
const result = document.querySelector(".result");

// function
const getNextDay = ({ dayNumber }) => {
  if (!dayNumber) {
    result.innerText = "Ngay khong dc bo trong";
    return;
  }

  const currenDate = new Date();
  const nextDayIndex = (currenDate.getDay() - 1 + Number(dayNumber)) % 7;

  let nextDay = DAYS_IN_WEEK.find((day) => day.id === nextDayIndex);

  let nextDayValue;
  if (nextDay.id >= 5) {
    nextDayValue = DAYS_IN_WEEK[0].value;
  } else {
    nextDayValue = nextDay.value;
  }

  return nextDayValue;
};

// event handler
inputNumber.addEventListener("input", (e) => {
  const nextDayValue = getNextDay({ dayNumber: e.target.value });
  if (nextDayValue) {
    result.innerText = nextDayValue;
  }
});

// 3. Viết 1 hàm tính toán số lớn bằng js, với các phép tính(+,-,*,/). Yêu cầu
// - Có 2 tham số (đều lớn hơn 10 chữ số)
// - Kết quả không có sai số
// - Clean code
// - Có comment, giải thích
// - Tạo 1 form UI đơn giản để show lên màn hình.
// Có thể tham khảo https://www.calculator.net/big-number-calculator.html để tham khảo UI & kết quả tính toán

// variable
const number1Element = document.querySelector(".inputNumber1");
const number2Element = document.querySelector(".inputNumber2");

const additionBtnElement = document.querySelector(".addition-btn");
const subtractionBtnElement = document.querySelector(".subtraction-btn");
const multiplicationBtnElement = document.querySelector(".multiplication-btn");
const divisionBtnElement = document.querySelector(".division-btn");

const calculateResultElement = document.querySelector(".calculate-result");

// function
const calculate = (operator) => {
  if (!number1Element.value || !number2Element.value) {
    calculateResultElement.innerText =
      "number 1 hoặc number 2 khôgng được bỏ trống";
    return;
  }

  try {
    const number1 = Number(BigInt(number1Element.value));
    const number2 = Number(BigInt(number2Element.value));

    let result;
    if (operator === "+") {
      result = number1 + number2;
    } else if (operator === "-") {
      result = number1 - number2;
    } else if (operator === "*") {
      result = number1 * number2;
    } else if (operator === "/") {
      if (number2 === 0) {
        result = "Không thể chia cho 0";
      } else {
        result = number1 / number2;
      }
    }
    console.log(result);

    calculateResultElement.innerText = result.toString();
  } catch (error) {}
};

// event handler
additionBtnElement.addEventListener("click", (e) => {
  e.preventDefault();
  calculate("+");
});

subtractionBtnElement.addEventListener("click", (e) => {
  e.preventDefault();
  calculate("-");
});

multiplicationBtnElement.addEventListener("click", (e) => {
  e.preventDefault();
  calculate("*");
});

divisionBtnElement.addEventListener("click", (e) => {
  e.preventDefault();
  calculate("/");
});
