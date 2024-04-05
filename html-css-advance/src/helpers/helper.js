export const convertToDolar = (price) => {
  return new Intl.NumberFormat("en-US").format(price);
};
