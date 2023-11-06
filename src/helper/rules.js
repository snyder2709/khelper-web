import { reactive } from "vue";

export const customRules = reactive({
  required: {
    $validator: (value) => !!value,
    $message: "Обязательное поле",
  },

  checkEmail: {
    $validator: (value) => {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    $message: `Не верный формат E-mail`,
  },
  minLength: {
    $validator: (value) => value.length >= 4,
    $message: "Минимальная длина 8 символов",
  },
});
