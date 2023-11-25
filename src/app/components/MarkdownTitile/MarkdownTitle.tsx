import React from 'react'
import {useWindowWidth} from "../../hooks/useWindowWidth"
import styles from "./MarkdownTitle.module.scss"
 type Props={
    isHide:boolean
 }
export default function MarkdownTitle(props:Props) {
    const {isHide}=props;
    const width=useWindowWidth();
    const TabletWidth=768;
    const condition =  (isHide && width > TabletWidth) || (!isHide && width < TabletWidth);


    return (
    condition ? 
    <div className={styles.markdown}>
    <p>MARKDOWN</p>
  </div>:null
   )
}
