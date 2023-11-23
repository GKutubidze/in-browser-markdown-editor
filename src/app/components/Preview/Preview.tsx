import React from "react";
import styles from "./Preview.module.scss";
import viewShow from "../../../../public/assets/icon-show-preview.svg";
import viewHide from "../../../../public/assets/icon-hide-preview.svg";
import Image from "next/image";
interface Props{
    isPreview:boolean;
    setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;

}
const Preview = (props:Props) => {
  const {isPreview,setIsPreview}=props;
  return (
    <div className={styles.preview}>
      <div className={styles.markdown}>
        {isPreview ? <p>PREVIEW</p>:<p>MARKDOWN</p>}
        
      </div>
      <div className={styles.view} onClick={()=>{
        setIsPreview(!isPreview);
      }}>
        {isPreview ? <Image src={viewShow} alt="" />:  <Image src={viewHide} alt=""/>}
        
      
      </div>
    </div>
  );
};

export default Preview;
