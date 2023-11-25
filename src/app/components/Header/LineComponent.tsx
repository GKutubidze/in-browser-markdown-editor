import React from 'react'
import styles from "./Header.module.scss"
import {useWindowWidth} from "../../hooks/useWindowWidth"

function LineComponent() {
    const width=useWindowWidth();
    const TabletWidth=768;
    
  return (width>TabletWidth  ?   <div className={styles.line}></div> : null)
}

export default LineComponent