import React from 'react'
import styles from "./ConditionalNavbar.module.scss"
type Props={
    addFile: () => void;

}
const DocumentTitle = (props:Props) => {
    const {addFile}=props;
  return (
    <div className={styles.document}>
        <div>
          <p>MY DOCUMENT</p>
        </div>
        <button onClick={addFile}>New Document</button>
      </div>
  )
}

export default DocumentTitle