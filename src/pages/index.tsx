import React, { useState } from "react";
import RootLayout from "@/app/layout";
import Header from "@/app/components/Header/Header";
import Preview from "@/app/components/Preview/Preview";
import TextComponent from "@/app/components/TextArea/TextComponent";
import data from "../app/data.json";
import ConditionalNavbar from "@/app/components/ConditionalNavbar/ConditionalNavbar";
import type { MarkdownFile, MarkdownFiles } from "../app/components/Interfaces";
import Head from "next/head";
const index = () => {
  const [markdownText, setMarkdownText] = useState<string>(data[1].content);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("Welcome");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [markdownList, setMarkdownList] = useState<MarkdownFiles>([
    { id: Date.now(), name: data[1].name, content: data[1].content },
  ]);
  const [selectId,setSelectId]=useState<number>(  markdownList.length > 0 ? markdownList[0].id : 0
    );
  const handleDelete = (id: number) => {
    const updatedList = markdownList.filter((item) => item.id !== id);
    setMarkdownList(updatedList);
    if (selectId === id) {
      // Clear text and selection if the deleted item was selected
      setMarkdownText('');
      setFileName('');
      setSelectId(0);
    }
  };
  return (
    <RootLayout>
      <Head>
        <title>
          Markdow Editor
        </title>
      </Head>
      <ConditionalNavbar
        isOpen={isOpen}
        markdownList={markdownList}
        setMarkdownList={setMarkdownList}
        selectId={selectId}
        setSelectId={setSelectId}
        markdownText={markdownText}
        setMarkdownText={setMarkdownText}
        setFileName={setFileName} // Pass setFileName here

      />
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        markdownList={markdownList}
        setMarkdownList={setMarkdownList}
        selectId={selectId}
        markdownText={markdownText}
        setMarkdownText={setMarkdownText}
        onDelete={handleDelete} 
       />
      <Preview isPreview={isPreview} setIsPreview={setIsPreview} />
      <TextComponent
        markdownText={markdownText}
        setMarkdownText={setMarkdownText}
        isPreview={isPreview}
        setFileName={setFileName} // Pass setFileName here
        selectId={selectId}
        setMarkdownList={setMarkdownList}
      />
    </RootLayout>
  );
};

export default index;
