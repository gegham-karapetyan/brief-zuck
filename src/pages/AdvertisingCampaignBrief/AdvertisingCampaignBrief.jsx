import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";
import InputText from "../../components/InputText";
import InputSocial from "../../components/InputSocial";
import CheckboxesGroup from "../../components/CheckboxesGroup";
import TargetGroup from "../../components/TargetGroup";
import HyperactiveBuyers from "../../components/HyperactiveBuyers";
import Textarea from "../../components/Textarea";
import MassMedia from "../../components/MassMedia";
import DatePicker from "../../components/DatePicker";
import FilesBox from "../../components/FilesBox";
import CampaignBudget from "../../components/CampaignBudget";

import campaignTypes from "./data/CampaignTypes";
import massMedia from "./data/MassMedia";
import "./style.scss";

const AdvertisingCampaignBrief = ({ lg }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Advertising Campaign Brief"));
  });

  return (
    <div>
      <InputText
        title={{ am: "Բրենդ *", en: "Brand *", ru: "Бренд *" }}
        name="Brand *"
        required={true}
        hint={false}
        lg={lg}
      />
      <InputText
        title={{ am: "Անուն Ազգանուն *", en: "Name, Surname *", ru: "ФИО *" }}
        required={true}
        name="Name, Surname *"
        hint={false}
        lg={lg}
      />
      <InputText
        title={{
          am: "Էլ. հասցե *",
          en: "E-mail *",
          ru: "Адрес эл.почты, номер телефона *",
        }}
        name="E-mail *"
        required={true}
        hint={false}
        lg={lg}
      />
      <InputText
        title={{ am: "Հաստիք *", en: "Position *", ru: "Должность *" }}
        name="Position *"
        required={true}
        hint={false}
        lg={lg}
      />
      <InputText
        title={{
          am: "Հեռախոսահամար *",
          en: "Telephone *",
          ru: "Номер телефона *",
        }}
        required={true}
        hint={false}
        lg={lg}
      />
      <InputSocial
        title={{
          am: "Կայք, Ֆեյսբուք, Ինստագրամ, և այլն  *",
          en: "Website, Facebook, Instagram, etc. * ",
          ru: "",
        }}
        name="Website, Facebook, Instagram, etc. *"
        required={true}
        hint={false}
        lg={lg}
      />
      <Textarea
        name="Brief Description *"
        title={{
          am: "Ամփոփ նկարագիր *",
          en: "Brief Description *",
          ru: "",
        }}
        required={false}
        hintText={{
          am: "բիզնես նպատակ, արշավի իրականացման նպատակ, տեղեկատվություն բրենդի և/կամ ծառայության, պրոդուկտի մասին",
        }}
        hint={true}
        lg={lg}
      />
      <CheckboxesGroup
        title={{ am: "Արշավի տեսակ * ", en: "Campaign Type *", ru: "" }}
        lg={lg}
        data={campaignTypes}
      />
      <TargetGroup
        title={{
          am: "Թիրախային խումբ *",
          en: "Target Audience * ",
          ru: "",
        }}
        lg={lg}
      />
      <HyperactiveBuyers
        title={{
          am: ["Hyperactive buyer persona", "Տարիք՝", "տ․"],
          en: ["Hyperactive buyer persona", "Age", "age"],
          ru: ["Hyperactive buyer persona", "Age", "age"],
        }}
        lg={lg}
      />
      <Textarea
        title={{
          am: "Հավելյալ տեղեկատվություն թիրախի մասին",
          en: "Additional information about the target",
          ru: "",
        }}
        name="Additional information about the target"
        required={false}
        hint={true}
        hintText={{
          am: "Աշխհարագրություն, հետաքրքրություններ, մասնագիտություն, սովորույթներ և այլն։",
        }}
        lg={lg}
      />
      <Textarea
        name="Current Consumer Behaviour "
        title={{
          am: "Հավելյալ տեղեկատվություն թիրախի մասին",
          en: "Current Consumer Behaviour",
          ru: "",
        }}
        required={false}
        hint={false}
        lg={lg}
      />
      <Textarea
        name="Current Consumer Opinion "
        title={{
          am: "Հավելյալ տեղեկատվություն թիրախի մասին",
          en: "Current Consumer Opinion",
          ru: "",
        }}
        required={false}
        hint={false}
        lg={lg}
      />
      <Textarea
        title={{
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
        }}
        name="Desired Consumer Opinion (after campaign implementation) "
        required={false}
        hint={false}
        lg={lg}
      />
      <Textarea
        name="USP (unique selling proposition) /Brand promise * "
        title={{
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
        }}
        required={true}
        hint={true}
        hintText={{
          am: (
            <>
              <div>
                բրենդը/պրոդուկտը/ծառայությունը վաճառող եզակիություն, բրենդի
                խոստում
              </div>
              <br></br>
              <b>Օրինակ`</b> «Մենք կառաքենք ձեր պիցցան 15 րոպեում, եթե
              ուշացնենք, կստանաք այն անվճար»։
            </>
          ),
        }}
        lg={lg}
      />
      <Textarea
        name="Insight/Consumer Insight * "
        title={{
          am: "Insight/Consumer Insight * ",
          en: "Insight/Consumer Insight * ",
          ru: "",
        }}
        required={true}
        hint={true}
        hintText={{
          am: (
            <>
              խորքային համոզմունք, որի առանցքի շուրջ կարելի է ստեղծել
              կոմունիկացիա
              <p>Insight</p> <b>Օրինակ՝</b> Մարդիկ միշտ փնտրում են հարմար առիթ
              կտրվել աշխատանքից և ընդմիջում անել: <p>Consumer Insight</p>{" "}
              <b>Օրինակ՝ </b>
              հետազոտությունը ցույց է տվել, որ սպառողը դժվարությամբ է բացում մեր
              ապրանքի փաթեթավորումը, մենք ստեղծել ենք նոր փաթեթավորում, որը
              ավելի հեշտ է բացվում։
            </>
          ),
        }}
        lg={lg}
      />
      <Textarea
        title={{
          am: (
            <>
              Գովազդային արշավի հիմնական ուղերձ{" "}
              <span style={{ fontFamily: "mardoto-regular" }}>(մեսիջ) *</span>
            </>
          ),
          en: "Primary Message *",
          ru: "",
        }}
        name="Primary Message *"
        required={true}
        hint={false}
        lg={lg}
      />
      <Textarea
        title={{
          am: (
            <>
              Գովազդային արշավի երկրորդային ուղերձ{" "}
              <span style={{ fontFamily: "mardoto-regular" }}>(մեսիջ) *</span>
            </>
          ),
          en: "Secondary Message *",
          ru: "",
        }}
        name="Secondary Message *"
        required={true}
        hint={false}
        lg={lg}
      />
      <Textarea
        title={{
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
        }}
        name="RTB (reason to believe)   "
        required={false}
        hint={true}
        hintText={{
          am: (
            <>
              ինչու պետք է հավատան մեսիջին/առաջարկին <br />
              <br />
              <b>Օրինակ`</b> «Մեր կաթնամթերքը համապատասխանում է ամենախիստ էկո
              ստանդարտներին, քանի որ մեր ֆերմաներից ու արտադրամասից 230 կմ
              շառավղով հեռավորության վրա չկան ո՛չ գործարաններ, ո՛չ էլ խոշոր
              քաղաքներ»։
            </>
          ),
        }}
        lg={lg}
      />
      <Textarea
        name="Barrier  "
        title={{
          am: "Barrier  ",
          en: "Barrier  ",
          ru: "",
        }}
        required={false}
        hint={true}
        lg={lg}
        hintText={{
          am: (
            <>
              բրենդին/սպառողին խանգարող ցանկացած հանգամանք/ներ
              <br />
              <br />
              <b>Օրինակ`</b> ընկալում կամ համոզմունք, որ պրոդուկտը կամ մատուցվող
              ծառայությունն ունեն ուռճացված գին:
            </>
          ),
        }}
      />
      <Textarea
        title={{
          am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք պարտադիր են  * ",
          en: "Advertising campaign / communication elements that are mandatory *",
          ru: "",
        }}
        name="Advertising campaign / communication elements that are mandatory *"
        required={true}
        hint={true}
        hintText={{
          am: (
            <>
              <b>Օրինակ`</b> կազմակերպության/ հովանավորների տարբերանշաններ,
              իրավական զգուշացումներ, բրենդինգի տարրեր, օրենսդրական նկարագրեր և
              այլն:
            </>
          ),
        }}
        lg={lg}
      />
      <Textarea
        title={{
          am: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք բացառվում են  * ",
          en: "Advertising campaign / communication elements that are prohibited *",
          ru: "",
        }}
        name="Advertising campaign / communication elements that are prohibited * "
        required={true}
        hint={true}
        hintText={{
          am: (
            <>
              <b>Օրինակ`</b> օրենսդրական սահմանափակումներ, որոշակի գույների կամ
              արտահայտությունների օգտագործում, երեխաների առկայություն գովազդային
              կոմունիկացիայում, ծխախոտի/ալկոհոլի առկայություն և այլն:
            </>
          ),
        }}
        lg={lg}
      />
      <MassMedia
        title={{
          am: "Արշավի մասշտաբայնություն *",
          en: "Campaign Range * ",
          ru: "",
        }}
        data={massMedia}
        lg={lg}
      />
      <InputSocial
        title={{
          am: (
            <>
              Պատկերացումներ մրցակիցների մասին{" "}
              <span style={{ fontFamily: "mardoto-regular" }}>(հղումներ)</span>{" "}
            </>
          ),
          en: "Notes about the competitors *",
          ru: "",
        }}
        name="Notes about the competitors *"
        required={false}
        hint={false}
        lg={lg}
      />
      <Textarea
        title={{
          am: "Գործակալության առաջադրանքը * ",
          en: "Agency Tasks *",
          ru: "",
        }}
        name="Agency Tasks *"
        required={false}
        hint={false}
        lg={lg}
      />
      <Textarea
        title={{
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
        }}
        name="KPIs (Key Performance Indicators)"
        required={false}
        hint={true}
        hintText={{
          am: (
            <>
              ինչպե՞ս է գնահատվելու գովազդային արշավի հաջողությունը, ո՞ր
              ցուցանիշներն են դրա համար լինելու չափորոշիչային
            </>
          ),
        }}
        lg={lg}
      />
      <DatePicker
        lg={lg}
        title={{
          am: "Գովազդային արշավի իրականացման ժամկետներ *",
          en: "Campaign Implementation Timeframe *",
          ru: "",
        }}
      />
      <CampaignBudget
        title={{
          am: ["Գովազդային արշավի բյուջե", "Ընդհանուր՝"],
          en: ["Campaign Budget", "Amount"],
          ru: ["Գովազդային արշավի բյուջե", "Ընդհանուր՝"],
        }}
        data={[
          {
            am: "USD",
            en: "USD",
            ru: "USD",
          },
          {
            am: "AMD",
            en: "AMD",
            ru: "AMD",
          },
          {
            am: "RUB",
            en: "RUB",
            ru: "RUB",
          },
        ]}
        lg={lg}
      />
      <InputSocial
        title={{
          am: (
            <>
              Նմանատիպ աշխատանք, որը դուր է գալիս{" "}
              <span style={{ fontFamily: "mardoto-regular" }}>(հղումներ)</span>{" "}
            </>
          ),
          en: "Similar work that you like",
          ru: "",
        }}
        name="Similar work that you like"
        required={false}
        hint={true}
        lg={lg}
      />
      <InputSocial
        title={{
          am: (
            <>
              Նմանատիպ աշխատանք, որը դուր չի գալիս{" "}
              <span style={{ fontFamily: "mardoto-regular" }}>(հղումներ)</span>{" "}
            </>
          ),
          en: "Similar work that you don’t like",
          ru: "",
        }}
        name="Similar work that you don’t like"
        required={false}
        hint={true}
        lg={lg}
      />
      <FilesBox
        name="Additional Information "
        title={{
          am: "Հավելյալ տեղեկատվություն",
          en: "Additional Information",
          ru: "",
        }}
        lg={lg}
      />
    </div>
  );
};

export default AdvertisingCampaignBrief;
