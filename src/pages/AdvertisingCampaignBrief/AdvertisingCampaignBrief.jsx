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
        name={{ am: "Բրենդ *", en: "", ru: "Бренд *" }}
        required={true}
        hint={false}
        lg={lg}
      />
      <InputText
        name={{ am: "Անուն Ազգանուն *", en: "", ru: "ФИО *" }}
        required={true}
        hint={false}
        lg={lg}
      />
      <InputText
        name={{
          am: "Էլ. հասցե *",
          en: "",
          ru: "Адрес эл.почты, номер телефона *",
        }}
        required={true}
        hint={false}
        lg={lg}
      />
      <InputText
        name={{ am: "Հաստիք *", en: "", ru: "Должность *" }}
        required={true}
        hint={false}
        lg={lg}
      />
      <InputText
        name={{ am: "Հեռախոսահամար *", en: "", ru: "Номер телефона *" }}
        required={true}
        hint={false}
        lg={lg}
      />
      <InputSocial
        name="Կայք, Ֆեյսբուք, Ինստագրամ, և այլն  *"
        required={true}
        hint={false}
        lg={lg}
      />
      <Textarea
        name="Ամփոփ նկարագիր "
        required={false}
        hintText={
          "բիզնես նպատակ, արշավի իրականացման նպատակ, տեղեկատվություն բրենդի և/կամ ծառայության, պրոդուկտի մասին"
        }
        hint={true}
        lg={lg}
      />
      <CheckboxesGroup title={"Արշավի տեսակ * "} lg={lg} data={campaignTypes} />
      <TargetGroup />
      <HyperactiveBuyers />
      <Textarea
        name="Հավելյալ տեղեկատվություն թիրախի մասին "
        required={false}
        hint={true}
        hintText={
          "Աշխհարագրություն, հետաքրքրություններ, մասնագիտություն, սովորույթներ և այլն։"
        }
        lg={lg}
      />
      <Textarea
        name="Սպառողների ներկայիս վարքագիծ "
        required={false}
        hint={false}
        lg={lg}
      />
      <Textarea
        name="Սպառողների ներկայիս կարծիք "
        required={false}
        hint={false}
        lg={lg}
      />
      <Textarea
        name="Սպառողների ցանկալի վարքագիծ (արշավի իրականացումից հետո) "
        required={false}
        hint={false}
        lg={lg}
      />
      <Textarea
        name="USP (unique selling proposition) /Brand promise * "
        required={true}
        hint={true}
        hintText={
          <>
            <div>
              բրենդը/պրոդուկտը/ծառայությունը վաճառող եզակիություն, բրենդի
              խոստում
            </div>
            <br></br>
            <b>Օրինակ`</b> «Մենք կառաքենք ձեր պիցցան 15 րոպեում, եթե ուշացնենք,
            կստանաք այն անվճար»։
          </>
        }
        lg={lg}
      />
      <Textarea
        name="Insight/Consumer Insight * "
        required={true}
        hint={true}
        hintText={
          <>
            խորքային համոզմունք, որի առանցքի շուրջ կարելի է ստեղծել կոմունիկացիա
            <p>Insight</p> <b>Օրինակ՝</b> Մարդիկ միշտ փնտրում են հարմար առիթ
            կտրվել աշխատանքից և ընդմիջում անել: <p>Consumer Insight</p>{" "}
            <b>Օրինակ՝ </b>
            հետազոտությունը ցույց է տվել, որ սպառողը դժվարությամբ է բացում մեր
            ապրանքի փաթեթավորումը, մենք ստեղծել ենք նոր փաթեթավորում, որը ավելի
            հեշտ է բացվում։
          </>
        }
        lg={lg}
      />
      <Textarea
        name="Գովազդային արշավի հիմնական ուղերձ (մեսիջ) "
        required={true}
        hint={false}
        lg={lg}
      />
      <Textarea
        name="Գովազդային արշավի երկրորդային ուղերձ (մեսիջ)  "
        required={true}
        hint={false}
        lg={lg}
      />
      <Textarea
        name="RTB (reason to believe)   "
        required={false}
        hint={true}
        hintText={
          <>
            ինչու պետք է հավատան մեսիջին/առաջարկին <br />
            <br />
            <b>Օրինակ`</b> «Մեր կաթնամթերքը համապատասխանում է ամենախիստ էկո
            ստանդարտներին, քանի որ մեր ֆերմաներից ու արտադրամասից 230 կմ
            շառավղով հեռավորության վրա չկան ո՛չ գործարաններ, ո՛չ էլ խոշոր
            քաղաքներ»։
          </>
        }
        lg={lg}
      />
      <Textarea
        name="Barrier  "
        required={false}
        hint={true}
        lg={lg}
        hintText={
          <>
            բրենդին/սպառողին խանգարող ցանկացած հանգամանք/ներ
            <br />
            <br />
            <b>Օրինակ`</b> ընկալում կամ համոզմունք, որ պրոդուկտը կամ մատուցվող
            ծառայությունն ունեն ուռճացված գին:
          </>
        }
      />
      <Textarea
        name="Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք պարտադիր են   "
        required={true}
        hint={true}
        hintText={
          <>
            <b>Օրինակ`</b> կազմակերպության/ հովանավորների տարբերանշաններ,
            իրավական զգուշացումներ, բրենդինգի տարրեր, օրենսդրական նկարագրեր և
            այլն:
          </>
        }
        lg={lg}
      />
      <Textarea
        name="Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք բացառվում են  "
        required={true}
        hint={true}
        hintText={
          <>
            <b>Օրինակ`</b> օրենսդրական սահմանափակումներ, որոշակի գույների կամ
            արտահայտությունների օգտագործում, երեխաների առկայություն գովազդային
            կոմունիկացիայում, ծխախոտի/ալկոհոլի առկայություն և այլն:
          </>
        }
        lg={lg}
      />
      <MassMedia title="Մեդիաներ *" data={massMedia} lg={lg} />
      <InputSocial
        name="Պատկերացումներ մրցակիցների մասին  (հղումներ)"
        required={false}
        hint={false}
        lg={lg}
      />
      <Textarea
        name="Գործակալության առաջադրանքը"
        required={false}
        hint={false}
        lg={lg}
      />
      <Textarea
        name="KPIs (Key Performance Indicators)"
        required={false}
        hint={true}
        hintText={
          <>
            ինչպե՞ս է գնահատվելու գովազդային արշավի հաջողությունը, ո՞ր
            ցուցանիշներն են դրա համար լինելու չափորոշիչային
          </>
        }
        lg={lg}
      />
      <DatePicker name="Գովազդային արշավի իրականացման ժամկետներ *" />
      <CampaignBudget />
      <InputSocial
        name="Նմանատիպ աշխատանք, որը դուր է գալիս (հղումներ) "
        required={false}
        hint={true}
        lg={lg}
      />
      <InputSocial
        name="Նմանատիպ աշխատանք, որը դուր չի գալիս  (հղումներ) "
        required={false}
        hint={true}
        lg={lg}
      />
      <FilesBox name="Հավելյալ տեղեկատվություն" lg={lg} />
    </div>
  );
};

export default AdvertisingCampaignBrief;
