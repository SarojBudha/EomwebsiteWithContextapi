const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-NE", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigit: 2,
  }).format(price / 100); //api ma vako price is in paisa so to convert in rs
};

export default FormatPrice;
