const InputSocialValues = [
  {
    key: 6,
    title: {
      am: "Կայք, Ֆեյսբուք, Ինստագրամ, և այլն  *",
      en: "Website, Facebook, Instagram, etc. *",
      ru: "",
    },
    name: {
      am: "Կայք, Ֆեյսբուք, Ինստագրամ, և այլն  *",
      en: "Website, Facebook, Instagram, etc. *",
      ru: "",
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
      ru: "",
    },
    name: {
      am: "Պատկերացումներ մրցակիցների մասին (հղումներ)",
      en: "Notes about the competitors",
      ru: "",
    },
    required: false,
    hint: false,
  },
  {
    key: 30,
    title: {
      am: (
        <>
          Նմանատիպ աշխատանք, որը դուր է գալիս{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>(հղումներ)</span>{" "}
        </>
      ),
      en: "Similar work that you like",
      ru: "",
    },
    name: {
      am: " Նմանատիպ աշխատանք, որը դուր է գալիս (հղումներ)",
      en: "Similar work that you like",
      ru: "",
    },
    required: false,
    hint: true,
  },
  {
    key: 31,
    title: {
      am: (
        <>
          Նմանատիպ աշխատանք, որը դուր չի գալիս{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>(հղումներ)</span>{" "}
        </>
      ),
      en: "Similar work that you don’t like",
      ru: "",
    },
    name: {
      am: "Նմանատիպ աշխատանք, որը դուր չի գալիս (հղումներ)",
      en: "Similar work that you don’t like",
      ru: "",
    },
    required: false,
    hint: true,
  },
];
export default InputSocialValues;
