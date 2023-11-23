import React from 'react'
import ReactMarkdown from "react-markdown";
import styles from "./PreviewText.module.scss"
 
type Props={
    markdownText: string;

}
const PreviewText = (props:Props ) => {
    const {markdownText}=props;
   
  return (
    <div className={styles.main}>
    <ReactMarkdown>
         {markdownText}
    </ReactMarkdown>
    </div>
  )
}

export default PreviewText