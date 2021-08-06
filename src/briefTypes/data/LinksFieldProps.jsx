const LinksFieldProps = [
  {
    title: {
      am: "Website, Facebook, Instagram, և այլն",
      en: "Website, Facebook, Instagram, etc.",
      ru: "Website, Facebook, Instagram и т.п. ",
    },
    name: {
      am: "Website, Facebook, Instagram, և այլն",
      en: "Website, Facebook, Instagram, etc.",
      ru: "Website, Facebook, Instagram и т.п. ",
    },
    required: true,
    hint: false,
  },
  {
    title: {
      am: (
        <>
          Պատկերացումներ մրցակիցների մասին{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>(հղումներ)</span>{" "}
        </>
      ),
      en: "Thoughts/Opinions about the competitors",
      ru: "Представления о конкурентах",
    },
    name: {
      am: "Պատկերացումներ մրցակիցների մասին (հղումներ)",
      en: "Thoughts/Opinions about the competitors",
      ru: "Представления о конкурентах",
    },
    required: false,
    hint: false,
  },
  {
    title: {
      am: (
        <>
          Նմանատիպ աշխատանք, որը դուր է գալիս{" "}
          <span style={{ fontFamily: "mardoto-regular,sans-serif" }}>
            (հղումներ)
          </span>{" "}
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
      am: "Սեփական և միջազգային փորձ, մրցակիցներ ևն",
      en: "Personal and international experience, competitors, etc.",
      ru: "Собственный или международный опыт, конкуренты и т.п.",
    },
  },
  {
    title: {
      am: (
        <>
          Նմանատիպ աշխատանք, որը դուր չի գալիս{" "}
          <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
            (հղումներ)
          </span>{" "}
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
      am: "Սեփական և միջազգային փորձ, մրցակիցներ ևն",
      en: "Personal and international experience, competitors, etc.",
      ru: "Собственный или международный опыт, конкуренты и т.п.",
    },
    required: false,
    hint: true,
  },
];
export default LinksFieldProps;
