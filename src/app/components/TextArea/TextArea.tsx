import React from 'react'
import styles from "./TextArea.module.scss"
import type { MarkdownFile, MarkdownFiles } from "../Interfaces"

interface Props{
    markdownText: string;
    setMarkdownText: React.Dispatch<React.SetStateAction<string>>;
    selectId:number;
    setMarkdownList: React.Dispatch<React.SetStateAction<MarkdownFiles>>

}
const TextArea = (props:Props) => {
    const {markdownText,setMarkdownText,selectId,setMarkdownList}=props;
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newText = event.target.value;
      setMarkdownText(newText);
  
      // Update the content of the MarkdownFile with the corresponding selectId
      setMarkdownList((prevList) =>
        prevList.map((file) =>
          file.id === selectId ? { ...file, content: newText } : file
        )
      );
        
      };
  return (
    <div className={styles.main}>
    <textarea
    onChange={handleChange}
    value={markdownText}
    className={styles.textarea}
    placeholder="Enter text here..."/>
    </div>
  )
}

export default TextArea