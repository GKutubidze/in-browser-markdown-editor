import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import menu from "../../../../public/assets/icon-menu.svg";
import SaveDelete from "./SaveDelete";
import Close from "./Close";
import DocumentComponent from "./DocumentComponent";
import type { MarkdownFile, MarkdownFiles } from "../Interfaces";
import {useWindowWidth} from "../../hooks/useWindowWidth"

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  markdownList: MarkdownFiles;
  setMarkdownList: React.Dispatch<React.SetStateAction<MarkdownFiles>>;
  selectId: number;
  markdownText: string;
  setMarkdownText: React.Dispatch<React.SetStateAction<string>>;
  onDelete: (id: number) => void; // Add onDelete prop
 
}
const Header = (props: Props) => {
  const { isOpen, setIsOpen, markdownList, setMarkdownList, selectId,onDelete} = props;
const width=useWindowWidth();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.first}>
        <div className={styles.menu} onClick={toggleSidebar}>
          <Image src={menu} alt="" style={{ cursor: "pointer" }} />
        </div>
        <Close isOpen={isOpen} setIsOpen={setIsOpen} />
        {width>768 && <div className={styles.markdown}>
        <p>MARKDOWN</p>
      </div>
      }
      {width>768 &&         <div className={styles.line}></div>
}
        <DocumentComponent
          markdownList={markdownList}
          setMarkdownList={setMarkdownList}
          selectId={selectId}
        />
      </div>
      <SaveDelete
        isOpen={isOpen}
        markdownList={markdownList}
        setMarkdownList={setMarkdownList}
        selectId={selectId}
        onDelete={onDelete} 
 
      />
    </div>
  );
};

export default Header;
