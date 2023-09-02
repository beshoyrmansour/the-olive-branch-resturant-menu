import React, { useState } from 'react'
import styles from "@/styles/Allargy.module.css";

type Props = {
  value: number,
  lang: 'en' | 'cz',
}

const AllargyItem = (props: Props) => {
  const { value, lang } = props;
  const [viewText, setViewText] = useState(false)
  return (
    <span className={styles.allergy_item} onClick={() => setViewText(prev => !prev)}>{viewText ? AllargiesText[value][lang] : value}</span>
  )
}

export default AllargyItem


const AllargiesText: Record<number, Record<'en' | 'cz', string>> = {
  1: { en: 'somthing else', cz: 'name' },
  11: { en: 'Allargy', cz: 'other thing ' },
}