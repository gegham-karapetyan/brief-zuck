import React from "react";

const VideoTypes = [
  {
    name: "Spot Video",
    innerText: {
      am: "Spot Video",
      en: "Spot Video",
      ru: "Spot Video",
    },
    hintText: {
      am: (
        <>
          հիմնականում 15, 30 կամ 45 վրկ տևողությամբ խաղարկային, անիմացիոն
          տեսահոլովակ, որում ներկայացվում է ապրանքի/ծառայության հիմնական
          առավելությունը/ները. շատ է օգտագործվում հեռուստագովազդի համար
        </>
      ),
      en: (
        <>
          mostly 15, 30 or 45 second wagering, animated video that presents the
          key advantages of the product/service: widely used for TV commercials
        </>
      ),
      ru: (
        <>
          игровой, анимированный ролик, в основном, продолжительностью 15, 30
          или 45 секунд, в котором представлено главное преимущество
          продукта/услуги: часто используется для рекламы на телевидении
        </>
      ),
    },
  },
  {
    name: "Product Demonstration Video",
    innerText: {
      am: "Product Demonstration Video",
      en: "Product Demonstration Video",
      ru: "Product Demonstration Video",
    },
    hintText: {
      am: (
        <>
          տարբերվում է Spot տեսակից մեկ կարևոր առանձնահատկությամբ. դեմոնստրատիվ
          տեսահոլովակներում մաքսիմալ խորն է ներկայացվում ապրանքի/ծառայության
          հիմնական առավելությունը/ները նրանց համար, ովքեր իրապես հետաքրքրված են
          դրանց ձեռքբերմամբ
        </>
      ),
      en: (
        <>
          differs from Spot type by one important feature: in demonstration
          videos the key advantages of the product/service are presented as
          in-depth as possible for those who are actually interested in
          purchasing them
        </>
      ),
      ru: (
        <>
          отличается от типа Spot одной важной особенностью: демонстрационные
          видеоролики максимально подробно представляют главное преимущество
          продукта/услуги для тех, кто действительно заинтересован в их
          приобретении
        </>
      ),
    },
  },
  {
    name: "Product/Service Launch Video",
    innerText: {
      am: "Product/Service Launch Video",
      en: "Product/Service Launch Video",
      ru: "Product/Service Launch Video",
    },
    hintText: {
      am: <>նոր պրոդուկտը, ծառայությունն առաջխաղացնող, իրազեկող տեսահոլովակ</>,
      en: <>new product/service promoting and awareness-raising video</>,
      ru: <>осведомительный видеоролик, продвигающий новый продукт/услугу</>,
    },
  },
  {
    name: "Branded/Manifesto Video",
    innerText: {
      am: "Branded/Manifesto Video",
      en: "Branded/Manifesto Video",
      ru: "Branded/Manifesto Video",
    },
    hintText: {
      am: (
        <>
          տեսահոլովակ, որում բրենդը երկրորդային դերում է, ոչ ուղիղ
          հաղորդակցություն. հոլովակի ուղերձը բրենդի մասին չէ, այլ՝ արժեքի/ների,
          որի/որոնց հետ ասոցացվում է տվյալ բրենդը
        </>
      ),
      en: (
        <>
          video in which the brand plays a secondary role, indirect
          communication, the video’s message isn’t about the brand per se, but
          about the value/s associated with the brand
        </>
      ),
      ru: (
        <>
          видеоролик, в котором бренд играет второстепенную роль, косвенная
          коммуникация: посыл видео не о бренде, а о ценности/ях, с которой
          ассоциируется этот бренд
        </>
      ),
    },
  },
  {
    name: "Explainer Video",
    innerText: {
      am: "Explainer Video",
      en: "Explainer Video",
      ru: "Explainer Video",
    },
    hintText: {
      am: (
        <>
          դժվարընկալելի պրոդուկտն/ծառայությունն առավել մատչելի ձևով բացատրող
          տեսահոլովակ. այս տեսակ հոլովակները հիմնականում լինում են հաղորդավարի
          ձայնի ուղեկցությամբ և սովորականից երկար խրոնոմետրաժով
        </>
      ),
      en: (
        <>
          video that explains in a more accessible way a difficult-to-understand
          product/service. These types of videos are mostly accompanied by the
          host’s voice and are longer that the usual timing
        </>
      ),
      ru: (
        <>
          видеоролик, рассказывающий о трудном для понимания продукте/услуге
          более доступным способом: эти типы видео в основном сопровождаются
          голосом ведущего и имеют хронометраж больше обычного
        </>
      ),
    },
  },
  {
    name: "Branded Short Film",
    innerText: {
      am: "Branded Short Film",
      en: "Branded Short Film",
      ru: "Branded Short Film",
    },
    hintText: {
      am: (
        <>
          ամբողջական պատմություն, կերպարներ/հերոսներ պարունակող կարճամետրաժ ֆիլմ
          պրոդուկտի/ծառայության/բրենդի ուղիղ կամ ոչ ուղիղ ինտեգրմամբ
        </>
      ),
      en: (
        <>
          complete story, short film with characters/heroes with a direct or
          indirect integration of the product/service/brand
        </>
      ),
      ru: (
        <>
          короткометражный фильм с полноценной историей, персонажами/героями с
          прямой или косвенной интеграцией продукта/услуги/бренда
        </>
      ),
    },
  },
  {
    name: "Branded Mini-Documentary Film",
    innerText: {
      am: "Branded Mini-Documentary Film",
      en: "Branded Mini-Documentary Film",
      ru: "Branded Mini-Documentary Film",
    },
    hintText: {
      am: (
        <>
          կարճամետրաժ դոկումենտալ ֆիլմ, որը պատմում է տվյալ բրենդի X
          ժամանակահատվածի մասին՝ ներառելով մարդկանց, մոտեցումներ, տեխնոլոգիաներ,
          փաստեր, ձեռքբերումներ և այլն
        </>
      ),
      en: (
        <>
          short documentary about the X period of a given brand, including
          people, approaches, technologies, facts, achievements, etc.
        </>
      ),
      ru: (
        <>
          короткометражный документальный фильм о периоде X данного бренда,
          включающий людей, подходы, технологии, факты, достижения и т. д.
        </>
      ),
    },
  },
  {
    name: "Customer Testimonial Video",
    innerText: {
      am: "Customer Testimonial Video",
      en: "Customer Testimonial Video",
      ru: "Customer Testimonial Video",
    },
    hintText: {
      am: (
        <>
          պոտենցիալ հաճախորդները տեսնում են՝ որքան ոգևորված և գոհ են ներկայիս
          հաճախորդները բրենդից, և պատկերացնում, որ իրենք նույնպես կզգան այդ
          նույնը, եթե օգտվեն տվյալ բրենդի ծառայությունից/պրոդուկտից
        </>
      ),
      en: (
        <>
          potential customers see the excitement and the satisfaction of the
          current customers and imagine they will feel the same way if they use
          the given brand’s service/product
        </>
      ),
      ru: (
        <>
          потенциальные клиенты видят, насколько воодушевлены и довольны брендом
          текущие клиенты, и предстваляют, что они будут чувствовать то же
          самое, если воспользуются услугой/продуктом бренда
        </>
      ),
    },
  },
  {
    name: "Company Culture Video",
    innerText: {
      am: "Company Culture Video",
      en: "Company Culture Video",
      ru: "Company Culture Video",
    },
    hintText: {
      am: (
        <>
          տվյալ տեսակն ունի երկու նպատակ. առաջինը՝ ներկայացնել կազմակերպության
          մշակույթն ու մոտեցումները պոտենցիալ հաճախորդներին, և երկրորդը՝
          ներգրավել նոր տաղանդների/աշխատակիցների
        </>
      ),
      en: (
        <>
          this type has two purposes: the first is to introduce the company’s
          culture and approaches towards potential customers, the second is to
          attract new talents/employees
        </>
      ),
      ru: (
        <>
          у данного типа 2 цели: первая – представить потенциальным клиентам
          культуру и подходы организации, и вторая – привлечь новые
          таланты/сотрудников
        </>
      ),
    },
  },
  {
    name: "Behind-The-Scenes Video",
    innerText: {
      am: "Behind-The-Scenes Video",
      en: "Behind-The-Scenes Video",
      ru: "Behind-The-Scenes Video",
    },
    hintText: {
      am: (
        <>
          ապրանքի/ծառայության ստեղծման, մշակման, մատուցման գործընթացը ցույց տվող
          ու դրա մասին պատմող հոլովակ
        </>
      ),
      en: (
        <>
          video about the process of creating, developing the product/service
          and showing its delivery process
        </>
      ),
      ru: (
        <>
          ролик, показывающий процесс создания, разработки, представления
          продукта/услуги и рассказывающий об этом
        </>
      ),
    },
  },
  {
    name: "Corporate Social Responsibility Video (CSR)",
    innerText: {
      am: "Corporate Social Responsibility Video (CSR)",
      en: "Corporate Social Responsibility Video (CSR)",
      ru: "Corporate Social Responsibility Video (CSR)",
    },
    hintText: {
      am: (
        <>
          կորպորատիվ սոցիալական պատասխանատվություն. տեսահոլովակ, որում բրենդն
          արձանագրում է՝ ինչն է իր համար ճիշտ կամ սխալ այս աշխարհում, ինչպես է
          տեսնում գլոբալ խնդիրները և դրանց լուծումները. օրինակ՝ շրջակա միջավայրի
          պահպանություն, սննդի ոչ համաչափ բաշխվածություն, համավարակներ և այլն
        </>
      ),
      en: (
        <>
          video in which the brand records what it stands for in the world and
          what is against its core values: the way it sees global issues along
          with their solutions, such as environmental protection, uneven food
          distribution, epidemics, etc.
        </>
      ),
      ru: (
        <>
          корпоративная социальная ответственность: видеоролик, в котором бренд
          подчеркивает, что для него правильно или неправильно в этом мире, как
          он видит глобальные проблемы и их решения. например, охрана окружающей
          среды, неравномерное распределение продуктов питания, эпидемии и т. д.
        </>
      ),
    },
  },
  {
    name: "Digital Signage, DOOH Video",
    innerText: {
      am: "Digital Signage, DOOH Video",
      en: "Digital Signage, DOOH Video",
      ru: "Digital Signage, DOOH Video",
    },
    hintText: {
      am: (
        <>
          առավելագույնը 15 վրկ տևողությամբ՝ իմիջային, մասամբ՝ տեղեկատվական,
          գրավիչ, պարզ հաղորդագրությամբ տեսահոլովակ էկրանների և թվային
          բիլբորդերի համար
        </>
      ),
      en: (
        <>
          video corresponding the brand’s image that lasts up to 15 seconds,
          partly informative, engaging, with a simple message for screens and
          digital billboards
        </>
      ),
      ru: (
        <>
          имиджевый, частично информативный, увлекательный, видеоролик с простым
          посылом для экранов и цифровых рекламных щитов продолжительностью
          максимум 15 секунд
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

export default VideoTypes;
