import { useEffect, useState } from "react";
import "./Input.scss";

const Input = () => {
  const [translate, setTranslate] = useState("");

  useEffect(() => {
    setTranslate("translate");
    return () => setTranslate("");
  }, []);
  return <input className={`pp ${translate}`} type="text" />;
};

export default Input;
