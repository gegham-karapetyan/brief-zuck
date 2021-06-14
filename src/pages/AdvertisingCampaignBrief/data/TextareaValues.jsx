const textareValues = [
  {
    name: "Brief Description *",
    title: {
      am: "Ամփոփ նկարագիր *",
      en: "Brief Description *",
      ru: "",
    },
    required: false,
    hintText: {
      am: "բիզնես նպատակ, արշավի իրականացման նպատակ, տեղեկատվություն բրենդի և/կամ ծառայության, պրոդուկտի մասին",
    },
    hint: true,
  },
  {
    title: {
      am: "Հավելյալ տեղեկատվություն թիրախի մասին",
      en: "Additional information about the target",
      ru: "",
    },
    name: "Additional information about the target",
    required: false,
    hint: true,
    hintText: {
      am: "Աշխհարագրություն, հետաքրքրություններ, մասնագիտություն, սովորույթներ և այլն։",
    },
  },
  {
    name: "Current Consumer Behaviour ",
    title: {
      am: "Հավելյալ տեղեկատվություն թիրախի մասին",
      en: "Current Consumer Behaviour",
      ru: "",
    },
    required: false,
    hint: false,
  },

  {
    name: "Current Consumer Opinion ",
    title: {
      am: "Հավելյալ տեղեկատվություն թիրախի մասին",
      en: "Current Consumer Opinion",
      ru: "",
    },
    required: false,
    hint: false,
  },
  {
    title: {
      am: (
        <>
          Սպառողների ցանկալի վարքագիծ{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
            (արշավի իրականացումից հետո)
          </span>{" "}
        </>
      ),
      en: (
        <>
          Desired Consumer Opinion{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
            (after campaign implementation)
          </span>
        </>
      ),
      ru: "",
    },
    name: "Desired Consumer Opinion (after campaign implementation) ",
    required: false,
    hint: false,
  },
];
