import React from "react";

const VideoMood = [
  {
    name: "Cheerful",
    innerText: {
      am: "Cheerful",
      en: "Cheerful",
      ru: "Cheerful",
    },
    hintText: {
      am: (
        <>
          ուրախ, տրամադրություն բարձրացնող, հումորի թեթև առկայությամբ, ժպիտ, այլ
          ոչ թե ծիծաղ առաջացնող
        </>
      ),
      en: (
        <>happy, uplifting, with a hint of humor, making smile, but not laugh</>
      ),
      ru: (
        <>
          веселый, поднимающий настроение, с оттенком юмора, вызывающий улыбку,
          а не смех
        </>
      ),
    },
  },
  {
    name: "Reflective",
    innerText: {
      am: "Reflective",
      en: "Reflective",
      ru: "Reflective",
    },
    hintText: {
      am: <>խորն իմաստային, մտածելու տեղիք տվող</>,
      en: <>deeply meaningful,thought-provoking</>,
      ru: <>с глубоким смыслом, дающий пищу для размышлений</>,
    },
  },
  {
    name: "Gloomy",
    innerText: {
      am: "Gloomy",
      en: "Gloomy",
      ru: "Gloomy",
    },
    hintText: {
      am: (
        <>
          մոխրագույն, մուգ, մութ, մռայլ, ինչ-որ չափով դեպրեսիվ գունային
          տոնայնությամբ
        </>
      ),
      en: <>gray, dark, gloomy, somewhat depressing color palette</>,
      ru: <>серый, темный, мрачный, в несколько депрессивных тонах</>,
    },
  },
  {
    name: "Humorous",
    innerText: {
      am: "Humorous",
      en: "Humorous",
      ru: "Humorous",
    },
    hintText: {
      am: <>հումորային, ծիծաղաշարժ, երգիծական</>,
      en: <>humorous, amusing, satirical</>,
      ru: <>юмористический, смешной, сатирический</>,
    },
  },
  {
    name: "Melancholy",
    innerText: {
      am: "Melancholy",
      en: "Melancholy",
      ru: "Melancholy",
    },
    hintText: {
      am: <>մելամաղձություն, թախծություն, տխրություն, ճնշվածություն հաղորդող</>,
      en: <>melancholy, sorrow, sadness, depressive</>,
      ru: <>передающий меланхолию, грусть, печаль, подавленность</>,
    },
  },
  {
    name: "Idyllic",
    innerText: {
      am: "Idyllic",
      en: "Idyllic",
      ru: "Idyllic",
    },
    hintText: {
      am: <>հանգստություն, խաղաղություն ու ներդաշնակություն հաղորդող</>,
      en: <>conveying tranquility, peace and harmony</>,
      ru: <>передающий спокойствие, умиротворение и гармонию</>,
    },
  },
  {
    name: "Whimsical",
    innerText: {
      am: "Whimsical",
      en: "Whimsical",
      ru: "Whimsical",
    },
    hintText: {
      am: (
        <>
          հեքիաթային, որոշակիորեն իրականությունից կտրված, վառ արտահայտված
          գույներով
        </>
      ),
      en: <>fairytale-like, somewhat detached from reality, bright-colored</>,
      ru: (
        <>
          сказочный, несколько оторванный от реальности, с ярко выраженными
          цветами
        </>
      ),
    },
  },
  {
    name: "Romantic",
    innerText: {
      am: "Romantic",
      en: "Romantic",
      ru: "Romantic",
    },
    hintText: {
      am: <>ռոմանտիկ, սիրային պատմության առկայություն</>,
      en: <>romantic, love story</>,
      ru: <>с наличием романтической, любовной истории</>,
    },
  },
  {
    name: "Mysterious",
    innerText: {
      am: "Mysterious",
      en: "Mysterious",
      ru: "Mysterious",
    },
    hintText: {
      am: <>միստիկ, խորհրդավոր, որոշակիորեն անհասկանալի</>,
      en: <>mystical, mysterious, somewhat incomprehensible</>,
      ru: <>мистический, таинственный, несколько непонятный</>,
    },
  },
  {
    name: "Ominous",
    innerText: {
      am: "Ominous",
      en: "Ominous",
      ru: "Ominous",
    },
    hintText: {
      am: <>չարություն պարունակող, աղետավոր տարրերի առկայություն</>,
      en: <>presence of evil and catastrophic elements</>,
      ru: <>с наличием зловещих, предвещающих несчастье элементов</>,
    },
  },
  {
    name: "Lighthearted",
    innerText: {
      am: "Lighthearted",
      en: "Lighthearted",
      ru: "Lighthearted",
    },
    hintText: {
      am: <>կենսուրախ, որոշակիորեն մոտիվացնող, բարի, խորհուրդ տվող</>,
      en: <>cheerful, somewhat motivating, kind, enlightening</>,
      ru: <>веселый, несколько мотивирующий, добрый, дающий совет</>,
    },
  },
  {
    name: "Hopeful",
    innerText: {
      am: "Hopeful",
      en: "Hopeful",
      ru: "Hopeful",
    },
    hintText: {
      am: "հուսադրող, խոստումնալից, «որքան էլ դժվար է՝ կյանքը շարունակվում է» ուղերձով",

      en: "encouraging,promising, with “life goes on no matter what” message",
      ru: "обнадеживающий, многообещающий, с посылом, что «как бы ни было сложно, жизнь продолжается»",
    },
  },
  {
    name: "Motivational",
    innerText: {
      am: "Motivational",
      en: "Motivational",
      ru: "Motivational",
    },
    hintText: {
      am: "մոտիվացիոն, որևէ գործողության մղող, առաջ տանող",
      en: "motivational, action-driven",
      ru: "мотивационный, ориентированный на действие, ведущий вперед",
    },
  },
  {
    name: "Tense",
    innerText: {
      am: "Tense",
      en: "Tense",
      ru: "Tense",
    },
    hintText: {
      am: "լարվածություն առաջացնող, լարվածության մեջ պահող, անհանգիստ",
      en: "stressing, keeping on the edge, hectic",
      ru: "напрягающий, держащий в напряжении, беспокойный",
    },
  },
  {
    name: "Mix of above mentioned options",
    innerText: {
      am: "Mix of above mentioned options",
      en: "Mix of above mentioned options",
      ru: "Mix of above mentioned options",
    },
    hintText: {
      am: "նշվածներից մի քանիսի համախումբ",
      en: "combination of some of the aforementioned",
      ru: "группа нескольких из вышеперечисленных",
    },
  },
  {
    name: "Other",
    innerText: {
      am: "Other",
      en: "Other",
      ru: "Other",
    },
    hintText: false,
  },
];

export default VideoMood;
