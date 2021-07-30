import { isEmail } from "validator";
import isEmpty from "../../../utils/isEmpty";
import isPhone from "../../../utils/isPhone";

const TextInputsValues = [
  {
    title: { am: "Բրենդ", en: "Brand", ru: "Бренд" },
    name: { am: "Բրենդ", en: "Brand", ru: "Бренд" },
    required: true,
    hint: false,
    key: 1,
    isValid: isEmpty,
  },
  {
    title: { am: "Անուն Ազգանուն", en: "Name, Surname", ru: "Имя, фамилия" },
    required: true,
    name: { am: "Անուն Ազգանուն", en: "Name, Surname", ru: "Имя, фамилия" },
    hint: false,
    key: 2,
    isValid: isEmpty,
  },
  {
    title: {
      am: "Էլ. հասցե",
      en: "E-mail",
      ru: "Адрес эл.почты",
    },
    name: {
      am: "Էլ. հասցե",
      en: "E-mail",
      ru: "Адрес эл.почты",
    },
    required: true,
    hint: false,
    key: 3,
    isValid: isEmail,
  },
  {
    title: { am: "Հաստիք", en: "Position", ru: "Должность" },
    name: { am: "Հաստիք", en: "Position", ru: "Должность" },
    required: true,
    hint: false,
    key: 4,
    isValid: isEmpty,
  },

  {
    title: {
      am: "Հեռախոսահամար",
      en: "Phone number",
      ru: "Номер телефона",
    },
    name: {
      am: "Հեռախոսահամար",
      en: "Phone number",
      ru: "Номер телефона",
    },
    required: true,
    hint: false,
    key: 5,
    isValid: isPhone,
  },
];
export default TextInputsValues;
