import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import document from "../../../../public/assets/icon-document.svg";
import type { MarkdownFile, MarkdownFiles } from "../Interfaces";

type Props = {
  markdownList: MarkdownFiles;
  setMarkdownList: React.Dispatch<React.SetStateAction<MarkdownFiles>>;
  selectId: number;
};

export default function DocumentComponent(props: Props) {
  const { markdownList, setMarkdownList, selectId } = props;
  const selectedIndex = markdownList.findIndex((item) => item.id === selectId);
  const selectedMarkdown = markdownList[selectedIndex];

  const [nameValue, setNameValue] = useState(selectedMarkdown?.name || "");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
    // Update the name in the markdownList array if selectedMarkdown exists
    if (selectedMarkdown) {
      const updatedList = [...markdownList];
      updatedList[selectedIndex] = { ...selectedMarkdown, name: e.target.value };
      setMarkdownList(updatedList);
    }
  };

  return (
    <div className={styles.document}>
      <Image src={document} alt="" />
      <input
        type="text"
        value={selectedMarkdown ? selectedMarkdown.name : ""}
        onChange={handleNameChange}
      />
    </div>
  );
}
