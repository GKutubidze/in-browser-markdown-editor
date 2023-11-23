import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import deleteicon from "../../../../public/assets/icon-delete.svg";
import saveicon from "../../../../public/assets/icon-save.svg";
import type { MarkdownFile, MarkdownFiles } from "../Interfaces";

type Props = {
  isOpen: boolean;
  markdownList: MarkdownFiles;
  setMarkdownList: React.Dispatch<React.SetStateAction<MarkdownFiles>>;
  selectId: number;
  onDelete: (id: number) => void; // Add onDelete prop
};

export default function SaveDelete(props: Props) {
  const { isOpen, markdownList, setMarkdownList, selectId, onDelete } = props;
  const handleDelete = () => {
    onDelete(selectId); // Call onDelete when delete icon is clicked
  };
  console.log(markdownList.find((item)=>item.id==selectId));

  function handleSave(){
    downloadMarkdownFile(
      markdownList.find((item) => item.id === selectId)?.content || "",
      markdownList.find((item) => item.id === selectId)?.name ||
        "Untitled"
    )
    console.log(selectId);
    console.log("content");
    console.log(markdownList[selectId])
  }
  return (
    !isOpen && (
      <div className={styles.save}>
        <Image
          src={deleteicon}
          alt=""
          className={styles.deleteicon}
          onClick={handleDelete}
        />
        <div
          className={styles.saveContainer}
          onClick={handleSave}

 
          
        >
          <Image src={saveicon} alt="" className={styles.saveicon} />
        </div>
      </div>
    )
  );
}
function downloadMarkdownFile(content: string, filename: string) {
  const element = document.createElement("a");
  const file = new Blob([content], { type: "text/plain" });

  element.href = URL.createObjectURL(file);
  element.download = `${filename}.md`;
  document.body.appendChild(element); // Required for Firefox
  element.click();
  document.body.removeChild(element);
}
