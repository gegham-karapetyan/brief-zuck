const MEDIA_TYPES = [
  {
    innerText: {
      am: "TV",
      en: "TV",
      ru: "TV",
    },
    name: "TV",
    hintText: false,
  },
  {
    innerText: {
      am: "OOH",
      en: "OOH",
      ru: "OOH",
    },
    name: "OOH",
    hintText: {
      am: <>արտաքին գովազդ` billboard, scroller, poster ևն</>,
      en: <>outdoor advertising: billboard, scroller, poster, etc.</>,
      ru: <>наружная реклама: billboard, scroller, poster и т.п.</>,
    },
  },
  {
    innerText: {
      am: "Social Media",
      en: "Social Media",
      ru: "Social Media",
    },
    name: "Social Media",
    hintText: {
      am: <>Facebook, Instagram, YouTube, TikTok, LinkedIn ևն</>,
      en: <>Facebook, Instagram, YouTube, TikTok, LinkedIn, etc.</>,
      ru: <>Facebook, Instagram, YouTube, TikTok, LinkedIn и т.п.</>,
    },
  },
  {
    innerText: {
      am: "Digital",
      en: "Digital",
      ru: "Digital",
    },
    name: "Digital",
    hintText: {
      am: (
        <>
          Google, Yandex display ads, native, in-stream (pre-roll, mid-roll,
          post-roll) video ads ևն
        </>
      ),
      en: (
        <>
          Google, Yandex display ads, native, in-stream (pre-roll, mid-roll,
          post-roll) video ads, etc.
        </>
      ),
      ru: (
        <>
          Google, Yandex display ads, native, in-stream (pre-roll, mid-roll,
          post-roll) video ads и т.п.
        </>
      ),
    },
  },
  {
    innerText: {
      am: "Print & Publishing",
      en: "Print & Publishing",
      ru: "Print & Publishing",
    },
    name: "Print & Publishing",
    hintText: {
      am: (
        <>
          գովազդ ամսագրերում, գրքերում, թվային ամսագրերում և գրքերում, պաստառներ
          ևն
        </>
      ),
      en: <>advertising in magazines, books, digital magazines, etc.</>,
      ru: (
        <>реклама в журналах, книгах, цифровых журналах, книгах, на плакатах</>
      ),
    },
  },
  {
    innerText: {
      am: "Guerrilla",
      en: "Guerrilla",
      ru: "Guerrilla",
    },
    name: "Guerrilla",
    hintText: {
      am: (
        <>
          ոչ ստանդարտ/ավանդական մեդիաների/լուծումների օգտագործմամբ գովազդային
          արշավ
        </>
      ),
      en: <>use of non-standard/traditional media/solutions</>,
      ru: <>использование нестандартных/нетрадиционных медиа/решений</>,
    },
  },
  {
    innerText: {
      am: "Influencer/Celebrity/KOL",
      en: "Influencer/Celebrity/KOL",
      ru: "Influencer/Celebrity/KOL",
    },
    name: "Influencer/Celebrity/KOL",
    hintText: {
      am: (
        <>
          ինֆլուենսերների և/կամ հայտնի անձանց անձնական մեդիաների
          օգտագործում/անմիջական ներգրավում
        </>
      ),
      en: (
        <>
          use of influencers and/or popular persons’ media platforms/direct
          involvement
        </>
      ),
      ru: (
        <>
          участие/непосредственное привлечение личных медиа инфлюенсеров и/или
          известных личностей
        </>
      ),
    },
  },
  {
    innerText: {
      am: "Product Placement",
      en: "Product Placement",
      ru: "Product Placement",
    },
    name: "Product Placement",
    hintText: {
      am: (
        <>
          պրոդուկտի/ծառայության/բրենդի ինտեգրում սերիալում/հեռուստասերի ալում,
          երաժշտական հոլովակում, համակարգչային խաղում, կինոնկարում, սպորտում ևն
        </>
      ),
      en: (
        <>
          product/service/brand integration in TV series, music videos, computer
          games, movies, sport events, etc.
        </>
      ),
      ru: (
        <>
          интеграция продукта/услуги/бренда в сериалах/телесериалах, муз.клипах,
          компьютерных играх, фильмах, спорте и т.п.
        </>
      ),
    },
  },
  {
    innerText: {
      am: "Use Of Technology",
      en: "Use Of Technology",
      ru: "Use Of Technology",
    },
    name: "Use Of Technology",
    hintText: {
      am: (
        <>
          VR՝ վիրտուալ իրականաություն, AI՝ արհեստական բանականություն, AR՝
          լրացված իրականություն, ևն
        </>
      ),
      en: (
        <>
          VR-virtual reality, AI-artificial intelligence, AR-augmented reality,
          etc.
        </>
      ),
      ru: (
        <>
          VR-виртуальная реальность, AI-искусственный интеллект, AR-дополненная
          реальность и т.п.
        </>
      ),
    },
  },
  {
    innerText: {
      am: "Other",
      en: "Other",
      ru: "Other",
    },
    name: "Other",
    hintText: false,
  },
];
export default MEDIA_TYPES;
