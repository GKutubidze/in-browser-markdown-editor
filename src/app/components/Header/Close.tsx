import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import closeIcon from "../../../../public/assets/icon-close.svg"

type Props={
    isOpen:boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Close(props:Props) {
    const {isOpen,setIsOpen}=props;
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
       };
  return isOpen&&(
    <div
      className={`${styles.close} ${isOpen ? styles.conditional : ""}`}
      onClick={toggleIsOpen}
    >
      <Image src={closeIcon} alt="" />
    </div>
  );
}
