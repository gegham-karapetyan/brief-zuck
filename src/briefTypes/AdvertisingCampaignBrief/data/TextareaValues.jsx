import isEmpty from "../../../utils/isEmpty";

const TextareValues = [
  {
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
  },
  {
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
      am: "Աշխհարագրություն, հետաքրքրություններ, մասնագիտություն, սովորույթներ և այլն։",
    },
  },
  {
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
  },

  {
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
  },
  {
    key: 14,
    title: {
      am: (
        <>
          Սպառողների ցանկալի վարքագիծ{" "}
          <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
            (արշավի իրականացումից հետո)
          </span>{" "}
        </>
      ),
      en: (
        <>
          Desired Consumer Behaviour{" "}
          <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
            (after campaign implementation)
          </span>
        </>
      ),
      ru: (
        <>
          Желаемое поведение потребителей{" "}
          <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
            (после реализации кампании)
          </span>
        </>
      ),
    },
    name: {
      am: "Սպառողների ցանկալի վարքագիծ (արշավի իրականացումից հետո)",
      en: "Desired Consumer Behavior (after the completion of the campaign)",
      ru: "Желаемое поведение потребителей (после реализации кампании)",
    },
    required: true,
    isValid: isEmpty,
    hint: false,
  },
  {
    key: 15,
    title: {
      am: (
        <>
          Սպառողների ցանկալի կարծիք
          <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
            (արշավի իրականացումից հետո)
          </span>
        </>
      ),
      en: (
        <>
          Expected Consumer Feedback{" "}
          <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
            (after campaign implementation)
          </span>
        </>
      ),
      ru: (
        <>
          Желаемое мнение потребителей{" "}
          <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
            (после реализации кампании)
          </span>
        </>
      ),
    },
    name: {
      am: "Սպառողների ցանկալի կարծիք (արշավի իրականացումից հետո)",
      en: "Expected Consumer Feedback (after the completion of the campaign)",
      ru: "Желаемое мнение потребителей (после реализации кампании)",
    },
    required: true,
    isValid: isEmpty,
    hint: false,
  },
  {
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
          Уникальное торговое предложение бренда/продукта/услуги, обещание
          бренда
          <br />
          <b>Пример:</b> «Мы доставим вашу пиццу за 15 минут, если мы опоздаем,
          вы получите ее бесплатно».
        </>
      ),
    },
  },
  {
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
          ապրանքի փաթեթավորումը, մենք ստեղծել ենք նոր փաթեթավորում, որն ավելի
          հեշտ է բացվում»։
        </>
      ),
      en: (
        <>
          An in-depth belief around which an advertising campaign can be built
          <br />
          <b>Insight example:</b> People are always looking for an opportunity
          to take a break from work.
          <br />
          <b>Consumer Insight example:</b> Research has shown that our product’s
          packaging is hard to open, hence we have created a new packaging that
          is much easier to handle.
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
            потребителю сложно открыть упаковку нашего продукта, мы создали
            новую упаковку, которая открывается легче.
          </span>
        </>
      ),
    },
  },

  {
    key: 18,
    title: {
      am: (
        <>
          Գովազդային արշավի հիմնական ուղերձ{" "}
          <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
            (մեսիջ)
          </span>
        </>
      ),
      en: "The main message of the advertising campaign",
      ru: (
        <>
          Основной посыл рекламной кампании{" "}
          <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
            (месседж)
          </span>
        </>
      ),
    },
    name: {
      am: "Գովազդային արշավի հիմնական ուղերձ (մեսիջ)",
      en: "The main message of the advertising campaign",
      ru: "Основной посыл рекламной кампании (месседж)",
    },
    required: true,
    isValid: isEmpty,
    hint: false,
  },
  {
    key: 19,
    title: {
      am: (
        <>
          Գովազդային արշավի երկրորդային ուղերձ{" "}
          <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
            (մեսիջ)
          </span>
        </>
      ),
      en: "The secondary message of the advertising campaign",
      ru: (
        <>
          Второстепенный посыл рекламной кампании{" "}
          <span style={{ fontFamily: "mardoto-regular, sans-serif" }}>
            (месседж)
          </span>
        </>
      ),
    },
    name: {
      am: "Գովազդային արշավի երկրորդային ուղերձ (մեսիջ)",
      en: "The secondary message of the advertising campaign",
      ru: "Второстепенный посыл рекламной кампании (месседж)",
    },
    required: true,
    isValid: isEmpty,
    hint: false,
  },
  {
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
          экологическим стандартам, так как в радиусе 230 км от наших ферм нет
          ни заводов, ни крупных городов».
        </>
      ),
    },
  },
  {
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
  },
  {
    key: 22,
    title: {
      am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք պարտադիր են ",
      en: "Essential advertising campaign/communication elements",
      ru: "Обязательные элементы рекламной кампании/коммуникации",
    },
    name: {
      am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք պարտադիր են ",
      en: "Essential advertising campaign/communication elements",
      ru: "Обязательные элементы рекламной кампании/коммуникации",
    },
    required: true,
    isValid: isEmpty,
    hint: true,
    hintText: {
      am: (
        <>
          <b>Օրինակ`</b> կազմակերպության/հովանավորների տարբերանշաններ, իրավական
          զգուշացումներ, բրենդինգի տարրեր, օրենսդրական նկարագրեր ևն:
        </>
      ),
      en: (
        <>
          <b>For example:</b> company/sponsor logos, legal warnings, branding
          elements, legislative descriptions, etc.
        </>
      ),
      ru: (
        <>
          <b>Пример:</b> логотипы организации/спонсоров, юридические
          предупреждения, элементы брендинга, законодательные описания и т.п.
        </>
      ),
    },
  },
  {
    key: 23,
    title: {
      am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք բացառվում են ",
      en: "Excluded advertising campaign/communication elements",
      ru: "Исключаемые элементы рекламной кампании/коммуникации",
    },
    name: {
      am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք բացառվում են ",
      en: "Excluded advertising campaign/communication elements",
      ru: "Исключаемые элементы рекламной кампании/коммуникации",
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
  },

  {
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
  },
  {
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
          How will the success of the ad campaign be measured? What kind of
          tools will be used? <br />
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
  },
];

export default TextareValues;
