import React, { useState } from 'react'
import styles from "./MarkdownFileComponent.tsx.module.scss"
import iconDocument from "../../../../public/assets/icon-document.svg"
import Image from 'next/image';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
type Props={
  name:string;
  onClick: () => void ;
  isSelected: boolean; // Prop to determine if it's selected

}
export default function MarkdownFileComponent(props:Props) {
  const { name, onClick,isSelected } = props;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); 
  const currentDay = currentDate.getDate();
  const [selected, setSelected] = useState(false);



  return (
    <div
    className={isSelected ? `${styles.main} ${styles.selected}` : styles.main}
    onClick={onClick}
  >
    <Image src={iconDocument} alt=''/>
<div className={styles.content}>
  <p>{`${currentDay} ${months[currentMonth]} ${currentYear}`}</p>
  <p className={styles.name}>{`${name}`}</p>
</div>
    </div>
  )
}



 