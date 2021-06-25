const InputSocialValues = [
  {
    key: 6,
    title: {
      am: "Կայք, Ֆեյսբուք, Ինստագրամ, և այլն  *",
      en: "Website, Facebook, Instagram, etc. *",
      ru: "Website, Facebook, Instagram и т.п. * ",
    },
    name: {
      am: "Կայք, Ֆեյսբուք, Ինստագրամ, և այլն  *",
      en: "Website, Facebook, Instagram, etc. *",
      ru: "Website, Facebook, Instagram и т.п. * ",
    },
    required: true,
    hint: false,
  },
  {
    key: 25,
    title: {
      am: (
        <>
          Պատկերացումներ մրցակիցների մասին{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>(հղումներ)</span>{" "}
        </>
      ),
      en: "Notes about the competitors",
      ru: "Представления о конкурентах *",
    },
    name: {
      am: "Պատկերացումներ մրցակիցների մասին (հղումներ)",
      en: "Notes about the competitors",
      ru: "Представления о конкурентах *",
    },
    required: false,
    hint: false,
  },
  {
    key: 31,
    title: {
      am: (
        <>
          Նմանատիպ աշխատանք, որը դուր է գալիս{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>(հղումներ)</span>{" "}
        </>
      ),
      en: "Similar work that you like",
      ru: "Подобная работа, которая нравится",
    },
    name: {
      am: "Նմանատիպ աշխատանք, որը դուր է գալիս (հղումներ)",
      en: "Similar work that you like",
      ru: "Подобная работа, которая нравится",
    },
    required: false,
    hint: true,
    hintText: {
      am: "",
      en: "",
      ru: "Собственный или международный опыт, конкуренты и т.п.",
    },
  },
  {
    key: 32,
    title: {
      am: (
        <>
          Նմանատիպ աշխատանք, որը դուր չի գալիս{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>(հղումներ)</span>{" "}
        </>
      ),
      en: "Similar work that you don’t like",
      ru: "Подобная работа, которая не нравится",
    },
    name: {
      am: "Նմանատիպ աշխատանք, որը դուր չի գալիս (հղումներ)",
      en: "Similar work that you don’t like",
      ru: "Подобная работа, которая не нравится",
    },
    hintText: {
      am: "",
      en: "",
      ru: "Собственный или международный опыт, конкуренты и т.п.",
    },
    required: false,
    hint: true,
  },
];
export default InputSocialValues;
