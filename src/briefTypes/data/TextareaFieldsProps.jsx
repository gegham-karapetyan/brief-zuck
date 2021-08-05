import isEmpty from "../../utils/isEmpty";

export const Summary = {
  key: 7,
  name: {
    am: "Ամփոփ նկարագիր",
    en: "Summary",
    ru: "Краткое описание",
  },
  title: {
    am: "Ամփոփ նկարագիր",
    en: "Summary",
    ru: "Краткое описание",
  },
  required: true,
  isValid: isEmpty,
  hintText: {
    am: "բիզնես նպատակ, արշավի իրականացման նպատակ, տեղեկատվություն բրենդի և/կամ ծառայության, պրոդուկտի մասին",
    en: "business goal, campaign goal, information about the brand and/or the service/product",
    ru: "бизнес-цель, цель кампании, информация о бренде и/или услуге, продукте",
  },
  hint: true,
};
export const Additional_information_about_the_target = {
  key: 11,
  title: {
    am: "Հավելյալ տեղեկատվություն թիրախի մասին",
    en: "Additional information about the target",
    ru: "Дополнительная информация о цели",
  },
  name: {
    am: "Հավելյալ տեղեկատվություն թիրախի մասին",
    en: "Additional information about the target",
    ru: "Дополнительная информация о цели",
  },
  required: true,
  isValid: isEmpty,

  hint: true,
  hintText: {
    am: "Աշխարhագրություն, հետաքրքրություններ, մասնագիտություն, սովորույթներ և այլն։",
    en: "Interests, profession, customs, and etc.",
    ru: "Интересы, профессия, обычаи и т.д.",
  },
};
export const Scenario_ideas = {
  key: 12,

  title: {
    am: "",
    en: "Scenario ideas",
    ru: "",
  },
  name: {
    am: "",
    en: "Scenario ideas",
    ru: "",
  },
  required: true,
  isValid: isEmpty,
  hint: false,
};
export const Adaptations_of_the_video = {
  key: 13,

  title: {
    am: "",
    en: "Adaptations of the video",
    ru: "",
  },
  name: {
    am: "",
    en: "Adaptations of the video",
    ru: "",
  },
  required: true,
  isValid: isEmpty,
  hint: true,
  hintText: {
    am: "",
    en: "how many adaptations are planned, for what kind of carriers and what’s the duration of each one",
    ru: "",
  },
};

export const Current_Consumer_Feedback = {
  key: 13,

  title: {
    am: "Սպառողների ներկայիս կարծիք",
    en: "Current Consumer Feedback",
    ru: "Текущее мнение потребителей",
  },
  name: {
    am: "Սպառողների ներկայիս կարծիք",
    en: "Current Consumer Feedback",
    ru: "Текущее мнение потребителей",
  },
  required: true,
  isValid: isEmpty,
  hint: false,
};
export const Current_Consumer_Behavior = {
  key: 12,

  title: {
    am: "Սպառողների ներկայիս վարքագիծ",
    en: "Current Consumer Behaviour",
    ru: "Текущее поведение потребителей",
  },
  name: {
    am: "Սպառողների ներկայիս վարքագիծ",
    en: "Current Consumer Behaviour",
    ru: "Текущее поведение потребителей",
  },
  required: true,
  isValid: isEmpty,
  hint: false,
};
export const Desired_Consumer_Behavior_Video = {
  key: 14,
  title: {
    am: (
      <>
        Սպառողների ցանկալի վարքագիծ{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          {/* (արշավի իրականացումից հետո) */}
        </span>{" "}
      </>
    ),
    en: (
      <>
        Desired Consumer Behaviour{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (after watching the video)
        </span>
      </>
    ),
    ru: (
      <>
        Желаемое поведение потребителей{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          {/* (после реализации кампании) */}
        </span>
      </>
    ),
  },
  name: {
    am: "Սպառողների ցանկալի վարքագիծ (*********)",
    en: "Desired Consumer Behavior (after watching the video)",
    ru: "Желаемое поведение потребителей (***********)",
  },
  required: true,
  isValid: isEmpty,
  hint: false,
};
export const Expected_Consumer_Feedback_Video = {
  key: 15,
  title: {
    am: (
      <>
        Սպառողների ցանկալի կարծիք
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          {/* (արշավի իրականացումից հետո) */}
        </span>
      </>
    ),
    en: (
      <>
        Expected Consumer Feedback{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (after watching the video)
        </span>
      </>
    ),
    ru: (
      <>
        Желаемое мнение потребителей{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          {/* (после реализации кампании) */}
        </span>
      </>
    ),
  },
  name: {
    am: "Սպառողների ցանկալի կարծիք (************)",
    en: "Expected Consumer Feedback (after watching the video)",
    ru: "Желаемое мнение потребителей (***************)",
  },
  required: true,
  isValid: isEmpty,
  hint: false,
};
export const USP_Brand_promise = {
  key: 16,
  title: {
    am: (
      <>
        USP{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (unique selling proposition)
        </span>
        /Brand promise{" "}
      </>
    ),
    en: (
      <>
        USP{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (unique selling proposition)
        </span>
        /Brand promise{" "}
      </>
    ),
    ru: (
      <>
        USP{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (unique selling proposition)
        </span>
        /Brand promise{" "}
      </>
    ),
  },
  name: {
    am: "USP (unique selling proposition)/Brand promise",
    en: "USP (unique selling proposition)/Brand promise",
    ru: "USP (unique selling proposition)/Brand promise",
  },
  required: true,
  isValid: isEmpty,
  hint: true,
  hintText: {
    am: (
      <>
        <span>
          Բրենդը/պրոդուկտը/ծառայությունը վաճառող եզակիություն, բրենդի խոստում
        </span>
        <br />
        <br />
        <b>Օրինակ`</b> «Մենք կառաքենք ձեր պիցցան 15 րոպեում, եթե ուշացնենք,
        կստանաք այն անվճար»։
      </>
    ),
    en: (
      <>
        The uniqueness selling the brand/product/service, brand’s promise
        <br />
        <br />
        <b>For example:</b> "We will deliver your pizza in 15 minutes. In case
        of a late delivery, you will get it for free."
      </>
    ),
    ru: (
      <>
        Уникальное торговое предложение бренда/продукта/услуги, обещание бренда
        <br />
        <b>Пример:</b> «Мы доставим вашу пиццу за 15 минут, если мы опоздаем, вы
        получите ее бесплатно».
      </>
    ),
  },
};
export const Insight = {
  key: 17,
  name: {
    am: "Insight/Consumer Insight",
    en: "Insight/Consumer Insight",
    ru: "Insight/Consumer Insight",
  },
  title: {
    am: "Insight/Consumer Insight",
    en: "Insight/Consumer Insight",
    ru: "Insight/Consumer Insight",
  },
  required: true,
  isValid: isEmpty,
  hint: true,
  hintText: {
    am: (
      <>
        Խորքային համոզմունք, որի առանցքի շուրջ կարելի է ստեղծել գովազդային
        արշավը
        <br />
        <br />
        <br /> <b>Insight - Օրինակ՝</b> «Մարդիկ միշտ փնտրում են հարմար առիթ
        կտրվելու աշխատանքից և ընդմիջում անելու»:
        <br />
        <br />
        <br /> <b>Consumer Insight - Օրինակ՝ </b>
        «Հետազոտությունը ցույց է տվել, որ սպառողը դժվարությամբ է բացում մեր
        ապրանքի փաթեթավորումը, մենք ստեղծել ենք նոր փաթեթավորում, որն ավելի հեշտ
        է բացվում»։
      </>
    ),
    en: (
      <>
        An in-depth belief around which an advertising campaign can be built
        <br />
        <b>Insight example:</b> People are always looking for an opportunity to
        take a break from work.
        <br />
        <b>Consumer Insight example:</b> Research has shown that our product’s
        packaging is hard to open, hence we have created a new packaging that is
        much easier to handle.
      </>
    ),
    ru: (
      <>
        Глубокая убежденность, вокруг которой может быть создана рекламная
        кампания
        <br />
        <br />
        <span>
          <b>Insight - Пример:</b>Люди всегда ищут удобный момент, чтобы
          отвлечься от работы и сделать перерыв.
        </span>
        <br />
        <br />
        <span>
          <b>Consumer Insight - Пример: </b>Исследования показали, что
          потребителю сложно открыть упаковку нашего продукта, мы создали новую
          упаковку, которая открывается легче.
        </span>
      </>
    ),
  },
};

export const Main_message_of_the_video = {
  key: 18,
  title: {
    am: (
      <>
        *******************{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (մեսիջ)
        </span>
      </>
    ),
    en: "Main message of the video",
    ru: (
      <>
        ***********************{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (месседж)
        </span>
      </>
    ),
  },
  name: {
    am: "**************************",
    en: "Main message of the video",
    ru: "**************************",
  },
  required: true,
  isValid: isEmpty,
  hint: false,
};
export const Secondary_message_of_the_video = {
  key: 19,
  title: {
    am: (
      <>
        ****************{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (մեսիջ)
        </span>
      </>
    ),
    en: "Secondary message of the video",
    ru: (
      <>
        ***********************{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (месседж)
        </span>
      </>
    ),
  },
  name: {
    am: "****************",
    en: "Secondary message of the video",
    ru: "**********************",
  },
  required: true,
  isValid: isEmpty,
  hint: false,
};
export const RTB = {
  key: 20,
  title: {
    am: (
      <>
        RTB{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (reason to believe){" "}
        </span>{" "}
      </>
    ),
    en: (
      <>
        RTB{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (reason to believe){" "}
        </span>{" "}
      </>
    ),
    ru: (
      <>
        RTB{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (reason to believe){" "}
        </span>{" "}
      </>
    ),
  },
  name: {
    am: "RTB (reason to believe)",
    en: "RTB (reason to believe)",
    ru: "RTB (reason to believe)",
  },
  required: true,
  isValid: isEmpty,
  hint: true,
  hintText: {
    am: (
      <>
        Ինչու պետք է հավատան մեսիջին/առաջարկին <br />
        <br />
        <b>Օրինակ`</b> «Մեր կաթնամթերքը համապատասխանում է ամենախիստ էկո
        ստանդարտներին, քանի որ մեր ֆերմաներից ու արտադրամասից 230 կմ շառավղով
        հեռավորության վրա չկան ո՛չ գործարաններ, ո՛չ էլ խոշոր քաղաքներ»։
      </>
    ),
    en: (
      <>
        Why should they believe the message/offer?
        <br />
        <br />
        <b>Example:</b>"Our dairy products meet the highest eco-standards, as
        there are no factories or large cities within a radius of 230 km from
        our farms and workshops."
      </>
    ),
    ru: (
      <>
        Почему должны поверить месседжу/предложению? <br />
        <br />
        <b>Пример:</b> «Наши молочные продукты соответствуют самым строгим
        экологическим стандартам, так как в радиусе 230 км от наших ферм нет ни
        заводов, ни крупных городов».
      </>
    ),
  },
};
export const Barrier = {
  key: 21,
  title: {
    am: "Barrier",
    en: "Barrier",
    ru: "Barrier",
  },
  name: {
    am: "Barrier",
    en: "Barrier",
    ru: "Barrier",
  },
  required: true,
  isValid: isEmpty,
  hint: true,

  hintText: {
    am: (
      <>
        Բրենդին/սպառողին խանգարող ցանկացած հանգամանք/ներ
        <br />
        <br />
        <b>Օրինակ`</b> ընկալում կամ համոզմունք, որ պրոդուկտը կամ մատուցվող
        ծառայությունն ունեն ուռճացված գին:
      </>
    ),
    en: (
      <>
        Any circumstances disturbing the brand/consumer
        <br />
        <br />
        <b>For example:</b>a perception or belief that the product/service is
        inflated
      </>
    ),
    ru: (
      <>
        Любые обстоятельства, мешающие бренду/потребителю
        <br />
        <br />
        <b>Пример: </b> восприятие или убеждение в том, что цена на товар или
        услугу завышена.
      </>
    ),
  },
};
export const Essential_elements = {
  key: 22,
  title: {
    am: "********************",
    en: "Essential elements",
    ru: "*******************",
  },
  name: {
    am: "********************",
    en: "Essential elements",
    ru: "*******************",
  },
  required: true,
  isValid: isEmpty,
  hint: true,
  hintText: {
    am: (
      <>
        <b>Օրինակ`</b> **********
      </>
    ),
    en: (
      <>
        <b>For example:</b> Presence of specific scenes, functional part of the
        product, location, action, specific service, etc., short editing
        versions, presence of subtitles, desired music genre, adaptations for
        various media, etc.
      </>
    ),
    ru: (
      <>
        <b>Пример:</b> **************
      </>
    ),
  },
};
export const Excluded_elements = {
  key: 23,
  title: {
    am: "*",
    en: "Excluded elements",
    ru: "Исключаемые элементы рекламной кампании/коммуникации",
  },
  name: {
    am: "*",
    en: "Excluded elements",
    ru: "*",
  },
  required: true,
  isValid: isEmpty,
  hint: true,
  hintText: {
    am: (
      <>
        <b>Օրինակ`</b> օրենսդրական սահմանափակումներ, որոշակի գույների կամ
        արտահայտությունների օգտագործում, երեխաների ներկայություն,
        ծխախոտի/ալկոհոլի առկայություն ևն
      </>
    ),
    en: (
      <>
        <b>For example:</b>legal restrictions, use of certain colors or
        expressions, presence of children, exposure to tobacco/alcohol, etc.
      </>
    ),
    ru: (
      <>
        <b>Пример:</b> законодательные ограничения, использование определенных
        цветов или выражений, присутствие детей, использование табачных
        изделий/алкоголя и т.п.
      </>
    ),
  },
};

export const Agencys_Task = {
  key: 27,
  title: {
    am: "Գործակալության առաջադրանքը",
    en: "Agency’s Task",
    ru: "Задача агентства",
  },
  name: {
    am: "Գործակալության առաջադրանքը",
    en: "Agency’s Task",
    ru: "Задача агентства",
  },
  required: true,
  isValid: isEmpty,
  hint: false,
};
export const Preferred_director = {
  key: 27,
  title: {
    am: "*",
    en: "Preferred director, cameraman, production agency/artist",
    ru: "*",
  },
  name: {
    am: "*",
    en: "Preferred director, cameraman, production agency/artist",
    ru: "*",
  },
  required: true,
  isValid: isEmpty,
  hint: false,
};
export const Packshot = {
  key: 27,
  title: {
    am: "*",
    en: "Packshot (last shot of the video, informative part)",
    ru: "*",
  },
  name: {
    am: "*",
    en: "Packshot (last shot of the video, informative part)",
    ru: "*",
  },
  required: true,
  isValid: isEmpty,
  hint: true,
  hintText: {
    am: "",
    en: `Information on the company's logo, motto, legal warnings, contact number and other attributes`,
    ru: "",
  },
};
export const KPIs = {
  key: 28,
  title: {
    am: (
      <>
        KPIs{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (Key Performance Indicators)
        </span>{" "}
      </>
    ),
    en: (
      <>
        KPIs{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (Key Performance Indicators)
        </span>{" "}
      </>
    ),
    ru: (
      <>
        KPIs{" "}
        <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
          (Key Performance Indicators)
        </span>{" "}
      </>
    ),
  },
  name: {
    am: "KPIs (Key Performance Indicators)",
    en: "KPIs (Key Performance Indicators)",
    ru: "KPIs (Key Performance Indicators)",
  },
  required: true,
  isValid: isEmpty,
  hint: true,
  hintText: {
    am: (
      <>
        ինչպե՞ս է գնահատվելու գովազդային արշավի հաջողությունը, ի՞նչ
        գործիքակազմով, ո՞ր ցուցանիշներն են դրա համար լինելու որոշիչ
      </>
    ),
    en: (
      <>
        How will the success of the ad campaign be measured? What kind of tools
        will be used? <br />
        What indicators will be crucial?
      </>
    ),
    ru: (
      <>
        как будет оцениваться успешность рекламной кампании, с помощью каких
        инструментов, какие показатели будут для этого решающими?
      </>
    ),
  },
};
