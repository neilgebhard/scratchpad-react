import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import guide from "./guide.txt";

const ScratchPad = ({ isEditing }) => {
  const [text, setText] = useState("");

  const fetchData = async () => {
    let res = await fetch(guide);
    res = await res.text();
    setText(res);
  };

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem("text"));
    if (!value) {
      fetchData();
    } else {
      setText(value);
    }
  }, []);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setText(value);
    localStorage.setItem("text", JSON.stringify(value));
  };

  if (isEditing) {
    return <textarea value={text} onChange={onChangeHandler} />;
  } else {
    return <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />;
  }
};

export default ScratchPad;
