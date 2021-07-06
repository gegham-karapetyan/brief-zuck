import isEmpty from "../../../utils/isEmpty";

const TextareValues = [
  {
    key: 7,
    name: {
      am: "Ամփոփ նկարագիր *",
      en: "Brief Description *",
      ru: "Краткое описание *",
    },
    title: {
      am: "Ամփոփ նկարագիր *",
      en: "Brief Description *",
      ru: "Краткое описание *",
    },
    required: true,
    isValid: isEmpty,
    hintText: {
      am: "բիզնես նպատակ, արշավի իրականացման նպատակ, տեղեկատվություն բրենդի և/կամ ծառայության, պրոդուկտի մասին",
      en: "",
      ru: "бизнес-цель, цель кампании, информация о бренде и/или услуге, продукте",
    },
    hint: true,
  },
  {
    key: 11,
    title: {
      am: "Հավելյալ տեղեկատվություն թիրախի մասին",
      en: "Additional information about the target",
      ru: "",
    },
    name: {
      am: "Հավելյալ տեղեկատվություն թիրախի մասին",
      en: "Additional information about the target",
      ru: "",
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
      en: "Current Consumer Opinion",
      ru: "Текущее мнение потребителей",
    },
    name: {
      am: "Սպառողների ներկայիս կարծիք",
      en: "Current Consumer Opinion",
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
          <span style={{ fontFamily: "mardoto-regular" }}>
            (արշավի իրականացումից հետո)
          </span>{" "}
        </>
      ),
      en: (
        <>
          Desired Consumer Behaviour{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
            (after campaign implementation)
          </span>
        </>
      ),
      ru: (
        <>
          Желаемое поведение потребителей{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
            (после реализации кампании)
          </span>
        </>
      ),
    },
    name: {
      am: "Սպառողների ցանկալի վարքագիծ (արշավի իրականացումից հետո)",
      en: "Desired Consumer Behaviour (after campaign implementation)",
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
          Սպառողների ցանկալի կարծիք{" "}
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
      ru: (
        <>
          Желаемое мнение потребителей{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
            (после реализации кампании)
          </span>
        </>
      ),
    },
    name: {
      am: "Սպառողների ցանկալի կարծիք (արշավի իրականացումից հետո)",
      en: "Desired Consumer Opinion (after campaign implementation)",
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
          <span style={{ fontFamily: "mardoto-regular" }}>
            (unique selling proposition)
          </span>
          /Brand promise *{" "}
        </>
      ),
      en: (
        <>
          USP{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
            (unique selling proposition)
          </span>
          /Brand promise *{" "}
        </>
      ),
      ru: (
        <>
          USP{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
            (unique selling proposition)
          </span>
          /Brand promise *{" "}
        </>
      ),
    },
    name: {
      am: "USP (unique selling proposition)/Brand promise *",
      en: "USP (unique selling proposition)/Brand promise *",
      ru: "USP (unique selling proposition)/Brand promise *",
    },
    required: true,
    isValid: isEmpty,
    hint: true,
    hintText: {
      am: (
        <>
          <div>
            բրենդը/պրոդուկտը/ծառայությունը վաճառող եզակիություն, բրենդի խոստում
          </div>
          <br />
          <b>Օրինակ`</b> «Մենք կառաքենք ձեր պիցցան 15 րոպեում, եթե ուշացնենք,
          կստանաք այն անվճար»։
        </>
      ),
      en: "",
      ru: (
        <>
          <div>
            Уникальное торговое предложение бренда/продукта/услуги, обещание
            бренда{" "}
          </div>
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
      am: "Insight/Consumer Insight *",
      en: "Insight/Consumer Insight *",
      ru: "Insight/Consumer Insight *",
    },
    title: {
      am: "Insight/Consumer Insight *",
      en: "Insight/Consumer Insight *",
      ru: "Insight/Consumer Insight *",
    },
    required: true,
    isValid: isEmpty,
    hint: true,
    hintText: {
      am: (
        <>
          խորքային համոզմունք, որի առանցքի շուրջ կարելի է ստեղծել կոմունիկացիա
          <p>Insight</p> <b>Օրինակ՝</b> Մարդիկ միշտ փնտրում են հարմար առիթ
          կտրվել աշխատանքից և ընդմիջում անել: <p>Consumer Insight</p>{" "}
          <b>Օրինակ՝ </b>
          հետազոտությունը ցույց է տվել, որ սպառողը դժվարությամբ է բացում մեր
          ապրանքի փաթեթավորումը, մենք ստեղծել ենք նոր փաթեթավորում, որը ավելի
          հեշտ է բացվում։
        </>
      ),
      en: "",
      ru: (
        <>
          Глубокая убежденность, вокруг которой может быть создана рекламная
          кампания
          <p>
            <b>Insight - Пример:</b>Люди всегда ищут удобный момент, чтобы
            отвлечься от работы и сделать перерыв.
          </p>
          <p>
            <b>Consumer Insight - Пример: </b>Исследования показали, что
            потребителю сложно открыть упаковку нашего продукта, мы создали
            новую упаковку, которая открывается легче.
          </p>
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
          <span style={{ fontFamily: "mardoto-regular" }}>(մեսիջ) *</span>
        </>
      ),
      en: "Primary Message *",
      ru: (
        <>
          Основной посыл рекламной кампании{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>(месседж) *</span>
        </>
      ),
    },
    name: {
      am: "Գովազդային արշավի հիմնական ուղերձ (մեսիջ) *",
      en: "Primary Message *",
      ru: "Основной посыл рекламной кампании (месседж) *",
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
          <span style={{ fontFamily: "mardoto-regular" }}>(մեսիջ) *</span>
        </>
      ),
      en: "Secondary Message *",
      ru: (
        <>
          Второстепенный посыл рекламной кампании{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>(месседж)</span>
        </>
      ),
    },
    name: {
      am: "Գովազդային արշավի երկրորդային ուղերձ (մեսիջ) *",
      en: "Secondary Message *",
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
          <span style={{ fontFamily: "mardoto-regular" }}>
            (reason to believe){" "}
          </span>{" "}
        </>
      ),
      en: (
        <>
          RTB{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
            (reason to believe){" "}
          </span>{" "}
        </>
      ),
      ru: (
        <>
          RTB{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
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
          ինչու պետք է հավատան մեսիջին/առաջարկին <br />
          <br />
          <b>Օրինակ`</b> «Մեր կաթնամթերքը համապատասխանում է ամենախիստ էկո
          ստանդարտներին, քանի որ մեր ֆերմաներից ու արտադրամասից 230 կմ շառավղով
          հեռավորության վրա չկան ո՛չ գործարաններ, ո՛չ էլ խոշոր քաղաքներ»։
        </>
      ),
      en: "",
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
          բրենդին/սպառողին խանգարող ցանկացած հանգամանք/ներ
          <br />
          <br />
          <b>Օրինակ`</b> ընկալում կամ համոզմունք, որ պրոդուկտը կամ մատուցվող
          ծառայությունն ունեն ուռճացված գին:
        </>
      ),
      en: "",
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
      am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք պարտադիր են  *",
      en: "Advertising campaign / communication elements that are mandatory *",
      ru: "Обязательные элементы рекламной кампании/коммуникации *",
    },
    name: {
      am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք պարտադիր են  *",
      en: "Advertising campaign / communication elements that are mandatory *",
      ru: "Обязательные элементы рекламной кампании/коммуникации *",
    },
    required: true,
    isValid: isEmpty,
    hint: true,
    hintText: {
      am: (
        <>
          <b>Օրինակ`</b> կազմակերպության/ հովանավորների տարբերանշաններ, իրավական
          զգուշացումներ, բրենդինգի տարրեր, օրենսդրական նկարագրեր և այլն:
        </>
      ),
      en: "",
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
      am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք բացառվում են  *",
      en: "Advertising campaign / communication elements that are prohibited *",
      ru: "Исключаемые элементы рекламной кампании/коммуникации *",
    },
    name: {
      am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք բացառվում են  *",
      en: "Advertising campaign / communication elements that are prohibited *",
      ru: "Исключаемые элементы рекламной кампании/коммуникации *",
    },
    required: true,
    isValid: isEmpty,
    hint: true,
    hintText: {
      am: (
        <>
          <b>Օրինակ`</b> օրենսդրական սահմանափակումներ, որոշակի գույների կամ
          արտահայտությունների օգտագործում, երեխաների առկայություն գովազդային
          կոմունիկացիայում, ծխախոտի/ալկոհոլի առկայություն և այլն:
        </>
      ),
      en: "",
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
      am: "Գործակալության առաջադրանքը *",
      en: "Agency Tasks *",
      ru: "Задача агентства *",
    },
    name: {
      am: "Գործակալության առաջադրանքը *",
      en: "Agency Tasks *",
      ru: "Задача агентства *",
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
          <span style={{ fontFamily: "mardoto-regular" }}>
            (Key Performance Indicators)
          </span>{" "}
          *
        </>
      ),
      en: (
        <>
          KPIs{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
            (Key Performance Indicators)
          </span>{" "}
          *
        </>
      ),
      ru: (
        <>
          KPIs{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
            (Key Performance Indicators)
          </span>{" "}
          *
        </>
      ),
    },
    name: {
      am: "KPIs (Key Performance Indicators) *",
      en: "KPIs (Key Performance Indicators) *",
      ru: "KPIs (Key Performance Indicators) *",
    },
    required: true,
    isValid: isEmpty,
    hint: true,
    hintText: {
      am: (
        <>
          ինչպե՞ս է գնահատվելու գովազդային արշավի հաջողությունը, ո՞ր
          ցուցանիշներն են դրա համար լինելու չափորոշիչային
        </>
      ),
      en: "",
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
