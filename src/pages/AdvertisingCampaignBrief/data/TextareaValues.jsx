import isEmpty from "../../../utils/isEmpty";

const TextareValues = [
  {
    key: 7,
    name: "Brief Description",
    title: {
      am: "Ամփոփ նկարագիր *",
      en: "Brief Description *",
      ru: "",
    },
    required: true,
    isValid: isEmpty,
    hintText: {
      am: "բիզնես նպատակ, արշավի իրականացման նպատակ, տեղեկատվություն բրենդի և/կամ ծառայության, պրոդուկտի մասին",
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
    name: "Additional information about the target",
    required: false,

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
      ru: "",
    },
    name: "Current Consumer Behaviour",
    required: false,
    hint: false,
  },

  {
    key: 13,

    title: {
      am: "Սպառողների ներկայիս կարծիք",
      en: "Current Consumer Opinion",
      ru: "",
    },
    name: "Current Consumer Opinion",
    required: false,
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
          Desired Consumer Opinion{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>
            (after campaign implementation)
          </span>
        </>
      ),
      ru: "",
    },
    name: "Desired Consumer Opinion (after campaign implementation)",
    required: false,
    hint: false,
  },
  {
    key: 15,
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
      ru: "",
    },
    name: "USP (unique selling proposition) /Brand promise",
    required: true,
    isValid: isEmpty,
    hint: true,
    hintText: {
      am: (
        <>
          <div>
            բրենդը/պրոդուկտը/ծառայությունը վաճառող եզակիություն, բրենդի խոստում
          </div>
          <br></br>
          <b>Օրինակ`</b> «Մենք կառաքենք ձեր պիցցան 15 րոպեում, եթե ուշացնենք,
          կստանաք այն անվճար»։
        </>
      ),
    },
  },
  {
    key: 16,
    name: "Insight/Consumer Insight",
    title: {
      am: "Insight/Consumer Insight * ",
      en: "Insight/Consumer Insight * ",
      ru: "",
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
    },
  },

  {
    key: 17,
    title: {
      am: (
        <>
          Գովազդային արշավի հիմնական ուղերձ{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>(մեսիջ) *</span>
        </>
      ),
      en: "Primary Message *",
      ru: "",
    },
    name: "Primary Message",
    required: true,
    isValid: isEmpty,
    hint: false,
  },
  {
    key: 18,
    title: {
      am: (
        <>
          Գովազդային արշավի երկրորդային ուղերձ{" "}
          <span style={{ fontFamily: "mardoto-regular" }}>(մեսիջ) *</span>
        </>
      ),
      en: "Secondary Message *",
      ru: "",
    },
    name: "Secondary Message",
    required: true,
    isValid: isEmpty,
    hint: false,
  },
  {
    key: 19,
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
      ru: "",
    },
    name: "RTB (reason to believe)",
    required: false,
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
    },
  },
  {
    key: 20,
    title: {
      am: "Barrier  ",
      en: "Barrier  ",
      ru: "",
    },
    name: "Barrier",
    required: false,
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
    },
  },
  {
    key: 21,
    title: {
      am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք պարտադիր են  * ",
      en: "Advertising campaign / communication elements that are mandatory *",
      ru: "",
    },
    name: "Advertising campaign / communication elements that are mandatory",
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
    },
  },
  {
    key: 22,
    title: {
      am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք բացառվում են  * ",
      en: "Advertising campaign / communication elements that are prohibited *",
      ru: "",
    },
    name: "Advertising campaign / communication elements that are prohibited",
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
    },
  },

  {
    key: 26,
    title: {
      am: "Գործակալության առաջադրանքը * ",
      en: "Agency Tasks *",
      ru: "",
    },
    name: "Agency Tasks",
    required: false,
    isValid: isEmpty,
    hint: false,
  },
  {
    key: 27,
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
      ru: "",
    },
    name: "KPIs (Key Performance Indicators)",
    required: false,
    hint: true,
    hintText: {
      am: (
        <>
          ինչպե՞ս է գնահատվելու գովազդային արշավի հաջողությունը, ո՞ր
          ցուցանիշներն են դրա համար լինելու չափորոշիչային
        </>
      ),
    },
  },
];

export default TextareValues;
