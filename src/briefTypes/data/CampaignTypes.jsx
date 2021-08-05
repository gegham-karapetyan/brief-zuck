import React from "react";

const CampaignTypes = [
  {
    name: "Brand awareness campaign",
    innerText: {
      am: "Brand awareness campaign",
      en: "Brand awareness campaign",
      ru: "Brand awareness campaign",
    },
    hintText: {
      am: <>Բրենդի ճանաչելիությունը բարձրացնող գովազդային արշավ</>,
      en: <>An advertising campaign to increase brand awareness</>,
      ru: <>Рекламная кампания по повышению узнаваемости бренда</>,
    },
  },
  {
    name: "Brand launch campaign",
    innerText: {
      am: "Brand launch campaign",
      en: "Brand launch campaign",
      ru: "Brand launch campaign",
    },
    hintText: {
      am: (
        <>
          Բոլորովին նոր կամ արդեն գոյություն ունեցող բրենդի կողմից նորաստեղծ
          բրենդի մուտքը շուկա լուսաբանող գովազդային արշավ
        </>
      ),
      en: (
        <>
          An advertising campaign covering a completely new brand’s or already
          existing brand’s newly created sub-brand’s entry into the market{" "}
        </>
      ),
      ru: (
        <>
          Рекламная кампания, обеспечивающая выход на рынок полностью нового
          бренда или созданного существующим брендом нового бренда
        </>
      ),
    },
  },
  {
    name: "Product/service launch campaign",
    innerText: {
      am: "Product/service launch campaign",
      en: "Product/service launch campaign",
      ru: "Product/service launch campaign",
    },
    hintText: {
      am: (
        <>
          Նոր պրոդուկտի/ծառայության թողարկման, շուկա մուտքի մասին իրազեկող
          գովազդային արշավ
        </>
      ),
      en: (
        <>
          An advertising campaign informing about the release of a new
          product/service and its market entry
        </>
      ),
      ru: (
        <>
          Рекламная кампания, осведомляющая о выходе на рынок нового
          продукта/услуги
        </>
      ),
    },
  },
  {
    name: "Rebranding campaign",
    innerText: {
      am: "Rebranding campaign",
      en: "Rebranding campaign",
      ru: "Rebranding campaign",
    },
    hintText: {
      am: (
        <>
          Կազմակերպության վերաբրենդավորման, նոր տարբերանշանի, անվանման փոփոխման
          կամ մեկ այլ կազմակերպության հետ միանալու ևն մասին գովազդային արշավ
        </>
      ),
      en: (
        <>An advertising campaign to announce the rebranding of the company․</>
      ),
      ru: (
        <>
          Рекламная кампания о ребрендинге, новом логотипе, смене названия или
          присоединению к другой компании и пр.
        </>
      ),
    },
  },
  {
    name: "Seasonal push campaign",
    innerText: {
      am: "Seasonal push campaign",
      en: "Seasonal push campaign",
      ru: "Seasonal push campaign",
    },
    hintText: {
      am: <>Սեզոնային բնույթի ապրանքներ, ծառայություններ գովազդող արշավ</>,
      en: <>An advertising campaign for seasonal products and services</>,
      ru: <>Рекламная кампания сезонных товаров и услуг</>,
    },
  },
  {
    name: "Corporate social responsibility (CSR) campaign",
    innerText: {
      am: "Corporate social responsibility (CSR) campaign",
      en: "Corporate social responsibility (CSR) campaign",
      ru: "Corporate social responsibility (CSR) campaign",
    },
    hintText: {
      am: (
        <>
          Գովազդային արշավ՝ ուղղված սոցիալական խնդիրներ լուծելու և համամարդկային
          հարցեր բարձրացնելու գործին. գենդերային հավասարություն, շրջակա
          միջավայր, պատերազմներ ևն
        </>
      ),
      en: (
        <>
          An advertising campaign aimed at solving social problems and raising
          such universal issues as gender equality, environment, wars, etc.
        </>
      ),
      ru: (
        <>
          Рекламная кампания, направленная на решение социальных проблем и
          общечеловеческих вопросов: гендерное равенство, окружающая среда,
          войны и т.п.
        </>
      ),
    },
  },
  {
    name: "Contest marketing campaign",
    innerText: {
      am: "Contest marketing campaign",
      en: "Contest marketing campaign",
      ru: "Contest marketing campaign",
    },
    hintText: {
      am: <>Գովազդային արշավ խաղարկությունների միջոցով</>,
      en: <>An advertising campaign through giveaways</>,
      ru: <>Рекламная кампания посредством розыгрышей</>,
    },
  },
  {
    name: "Ecommerce campaign",
    innerText: {
      am: "Ecommerce campaign",
      en: "Ecommerce campaign",
      ru: "Ecommerce campaign",
    },
    hintText: {
      am: (
        <>
          Առցանց տիրույթում գործող բիզնեսի առաջխաղացման, նոր հաճախորդների
          ներգրավման արշավ՝ թվային գործիքների կիրառմամբ
        </>
      ),
      en: (
        <>
          An advertising campaign for online business promotion and new customer
          engagement using digital tools
        </>
      ),
      ru: (
        <>
          Кампания по онлайн-продвижению бизнеса, привлечение новых клиентов с
          помощью цифровых инструментов
        </>
      ),
    },
  },
  {
    name: "Lead generation campaign",
    innerText: {
      am: "Lead generation campaign",
      en: "Lead generation campaign",
      ru: "Lead generation campaign",
    },
    hintText: {
      am: <>Նոր հաճախորդների ներգրավումը բարձրացնող գովազդային արշավ</>,
      en: <>An advertising campaign to increase new customer engagement</>,
      ru: <>Рекламная кампания по привлечению новых клиентов</>,
    },
  },
  {
    name: "Teaser campaign",
    innerText: {
      am: "Teaser campaign",
      en: "Teaser campaign",
      ru: "Teaser campaign",
    },
    hintText: {
      am: (
        <>
          Նախնական փուլում սակավ տեղեկատվություն տվող և դրանով իսկ արշավի
          մեկնարկի համար պլատֆորմ նախապատրաստող, ինչպես նաև դեպի
          պրոդուկտը/բրենդը/ծառայությունը գերհետաքրքրություն առաջացնող գովազդային
          արշավ
        </>
      ),
      en: (
        <>
          An advertising campaign that provides a little information at the
          initial stage, hence preparing the platform for the launch of the
          campaign, as well as an advertising campaign that attracts attention
          to the product/brand/service
        </>
      ),
      ru: (
        <>
          Рекламная кампания, которая предоставляет мало информации на начальном
          этапе, тем самым подготавливая платформу для запуска кампании, а также
          вызывая усиленный интерес к товару/бренду/услуге
        </>
      ),
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

export default CampaignTypes;
