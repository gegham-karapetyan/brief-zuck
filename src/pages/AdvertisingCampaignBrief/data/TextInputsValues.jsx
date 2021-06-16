import { isEmail } from "validator";
import isEmpty from "../../../utils/isEmpty";
import isPhone from "../../../utils/isPhone";

const TextInputsValues = [
  {
    title: { am: "Բրենդ *", en: "Brand *", ru: "Бренд *" },
    name: "Brand",
    required: true,
    hint: false,
    key: 1,
    isValid: isEmpty,
  },
  {
    title: { am: "Անուն Ազգանուն *", en: "Name, Surname *", ru: "ФИО *" },
    required: true,
    name: "Name, Surname",
    hint: false,
    key: 2,
    isValid: isEmpty,
  },
  {
    title: {
      am: "Էլ. հասցե *",
      en: "E-mail *",
      ru: "Адрес эл.почты, номер телефона *",
    },
    name: "E-mail",
    required: true,
    hint: false,
    key: 3,
    isValid: isEmail,
  },
  {
    title: { am: "Հաստիք *", en: "Position *", ru: "Должность *" },
    name: "Position",
    required: true,
    hint: false,
    key: 4,
    isValid: isEmpty,
  },

  {
    title: {
      am: "Հեռախոսահամար *",
      en: "Telephone *",
      ru: "Номер телефона *",
    },
    name: "Telephone",
    required: true,
    hint: false,
    key: 5,
    isValid: isPhone,
  },
];
export default TextInputsValues;
