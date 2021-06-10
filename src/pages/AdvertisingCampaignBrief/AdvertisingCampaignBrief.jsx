import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";
import InputText from "../../components/InputText";
import InputSocial from "../../components/InputSocial";
import CheckboxesGroup from "../../components/CheckboxesGroup";
import TargetGroup from "../../components/TargetGroup";
import HyperactiveBuyers from "../../components/HyperactiveBuyers";
import Textarea from "../../components/Textarea";
import CampaignScalability from "../../components/CampaignScalability";
import DatePicker from "../../components/DatePicker";

import CampaignBudget from "../../components/CampaignBudget";
import "./style.scss";
import FilesBox from "../../components/FilesBox";

const AdvertisingCampaignBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Advertising Campaign Brief"));
  });

  return (
    <div>
      <InputText name="Բրենդ " required={true} hint={false} lg="am" />
      <InputText name="Անուն Ազգանուն " required={true} hint={false} lg="am" />
      <InputText name="Էլ. հասցե " required={true} hint={false} lg="am" />
      <InputText name="Հաստիք " required={true} hint={false} lg="am" />
      <InputSocial
        name="Կայք, Ֆեյսբուք, Ինստագրամ, և այլն  *"
        required={true}
        hint={false}
        lg="am"
      />
      <Textarea
        name="Ամփոփ նկարագիր "
        required={false}
        hintText={
          "բիզնես նպատակ, արշավի իրականացման նպատակ, տեղեկատվություն բրենդի և/կամ ծառայության, պրոդուկտի մասին"
        }
        hint={true}
        lg="am"
      />
      <CheckboxesGroup
        name={"Արշավի տեսակ * "}
        data={[
          "Brand awareness campaign",
          "Brand launch campaign",
          "Product/service launch campaign",
          "Rebranding campaign",
          "Seasonal push campaign",
          "Corporate social responsibility (CSR) campaign",
          "Contest marketing campaign",
          "Ecommerce campaign",
          "Lead generation campaign",
          "Teaser campaign",

          "Other",
        ]}
      />
      <TargetGroup />
      <HyperactiveBuyers />
      <Textarea
        name="Հավելյալ տեղեկատվություն թիրախի մասին "
        required={false}
        hint={true}
        hintText={
          "Աշխհարագրություն, հետաքրքրություններ, մասնագիտություն, սովորույթներ և այլն։"
        }
        lg="am"
      />
      <Textarea
        name="Սպառողների ներկայիս վարքագիծ "
        required={false}
        hint={false}
        lg="am"
      />
      <Textarea
        name="Սպառողների ներկայիս կարծիք "
        required={false}
        hint={false}
        lg="am"
      />
      <Textarea
        name="Սպառողների ցանկալի վարքագիծ (արշավի իրականացումից հետո) "
        required={false}
        hint={false}
        lg="am"
      />
      <Textarea
        name="USP (unique selling proposition) /Brand promise  "
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
        lg="am"
      />
      <Textarea
        name="Insight/Consumer Insight  "
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
        lg="am"
      />
      <Textarea
        name="Գովազդային արշավի հիմնական ուղերձ (մեսիջ) "
        required={true}
        hint={false}
        lg="am"
      />
      <Textarea
        name="Գովազդային արշավի երկրորդային ուղերձ (մեսիջ)  "
        required={true}
        hint={false}
        lg="am"
      />
      <Textarea
        name="RTB (reason to believe)   "
        required={false}
        hint={true}
        lg="am"
      />
      <Textarea name="Barrier  " required={false} hint={true} lg="am" />
      <Textarea
        name="Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք պարտադիր են   "
        required={true}
        hint={true}
        lg="am"
      />
      <Textarea
        name="Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք բացառվում են  "
        required={true}
        hint={true}
        lg="am"
      />
      <CampaignScalability />
      <InputSocial
        name="Պատկերացումներ մրցակիցների մասին  (հղումներ)"
        required={false}
        hint={false}
        lg="am"
      />
      <Textarea
        name="Գործակալության առաջադրանքը"
        required={false}
        hint={false}
        lg="am"
      />
      <Textarea
        name="KPIs (Key Performance Indicators)"
        required={false}
        hint={true}
        lg="am"
      />
      <DatePicker name="Գովազդային արշավի իրականացման ժամկետներ *" />
      <CampaignBudget />
      <InputSocial
        name="Նմանատիպ աշխատանք, որը դուր է գալիս (հղումներ) "
        required={false}
        hint={true}
        lg="am"
      />
      <InputSocial
        name="Նմանատիպ աշխատանք, որը դուր չի գալիս  (հղումներ) "
        required={false}
        hint={true}
        lg="am"
      />
      <FilesBox name="Հավելյալ տեղեկատվություն" lg="am" />
    </div>
  );
};

export default AdvertisingCampaignBrief;
