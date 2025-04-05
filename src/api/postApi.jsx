import axios from "axios";

const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/8e7e098bbe244d6e1f2f89e6",
});

export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
