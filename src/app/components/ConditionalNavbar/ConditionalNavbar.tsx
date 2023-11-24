import React, { useState } from "react";
import styles from "./ConditionalNavbar.module.scss";
import MarkdownFileComponent from "../MarkdownFileComponent/MarkdownFileComponent";
import type { MarkdownFile, MarkdownFiles } from "../Interfaces"
import {useWindowWidth} from "../../hooks/useWindowWidth"

type Props={
  isOpen:boolean;
  markdownList: MarkdownFiles;
  setMarkdownList: React.Dispatch<React.SetStateAction<MarkdownFiles>>;
  selectId: number;
  setSelectId: React.Dispatch<React.SetStateAction<number>>;
  markdownText: string;
  setMarkdownText: React.Dispatch<React.SetStateAction<string>>;
  setFileName: React.Dispatch<React.SetStateAction<string>>


}
export default function ConditionalNavbar(props:Props) {
  const {isOpen,markdownList,setMarkdownList,selectId,setSelectId,markdownText,setMarkdownText,setFileName}=props;
   
  function addFile() {
    const newFile: MarkdownFile = { id: Date.now(), name: "Untitled Document", content: "" };
    setMarkdownList((prevList) => [...prevList, newFile]);
    setSelectId(newFile.id);
    setMarkdownText(""); // Clear text content for the new file
    setFileName("Untitled Document"); // Set the file name for the new file
  }
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isSelected,setIsSelected]=useState<boolean>(false);
  const width=useWindowWidth();
  const handleItemClick = (item: MarkdownFile) => {
    setSelectId(item.id);
    setMarkdownText(item.content);
    setFileName(item.name);

    if (selectedItem === item.id) {
      setSelectedItem(null); // Clear selection if clicking the same item
    } else {
      setSelectedItem(item.id); // Set selected item
    }
  };



  return isOpen&&(
    <div className={styles.navbar}>
        {width<768 && <div className={styles.markdown}>
        <p>MARKDOWN</p>
      </div>}
      <div className={styles.document}>
        <div>
          <p>MY DOCUMENT</p>
        </div>
        <button onClick={addFile}>New Document</button>
      </div>
      <div className={styles.container}>
      {markdownList.map((item, index) => (
       <MarkdownFileComponent
       key={index}
       name={item.name}
       onClick={() => handleItemClick(item)}
       isSelected={selectedItem === item.id} // Pass isSelected prop
     />
       
         ))}
        {/* <MarkdownFileComponent name={"welcome"}/>
        <MarkdownFileComponent name={"welcome"}/> */}

      </div>
    </div>
  );
}


