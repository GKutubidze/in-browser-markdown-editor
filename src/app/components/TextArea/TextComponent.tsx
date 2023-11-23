import React from "react";
import styles from "./TextComponent.module.scss";
import TextArea from "./TextArea";
import type { MarkdownFile, MarkdownFiles } from "../Interfaces"
import PreviewText from "./PreviewText";

interface Props {
  markdownText: string;
  setMarkdownText: React.Dispatch<React.SetStateAction<string>>;
  isPreview: boolean;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  selectId:number;
 setMarkdownList: React.Dispatch<React.SetStateAction<MarkdownFiles>>

}
const TextComponent = (props: Props) => {
  const { markdownText, setMarkdownText, isPreview,setFileName,selectId,setMarkdownList } = props;

  return (
    <div >
      {isPreview ? (
        <PreviewText markdownText={markdownText} />
      ) : (
        <TextArea
          markdownText={markdownText}
          setMarkdownText={setMarkdownText}
          selectId={ selectId}
          setMarkdownList={setMarkdownList}
        />
      )}
    </div>
  );
};

export default TextComponent;
