// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// //import { newField, updateForm } from "../../features/createSliceForm";
// import "./Input.scss";

// const Input = ({ name }) => {
//   const dispatch = useDispatch();

//   const [translate, setTranslate] = useState("");

//   useEffect(() => {
//     setTranslate("translate");
//     console.log("useEffect parent");
//     dispatch(newField({ keyName: name, value: { text: "" } }));
//     return () => setTranslate("");
//   }, [dispatch, name]);
//   return (
//     <label>
//       {name}
//       <InputText translate={translate} name={name} />
//     </label>
//   );
// };

// const InputText = ({ name, translate }) => {
//   const dispatch = useDispatch();

//   const onChange = (e) => {};
//   useEffect(() => {});
//   return (
//     <label>
//       <input onChange={onChange} className={`pp ${translate}`} type="text" />
//     </label>
//   );
// };

// export default Input;
