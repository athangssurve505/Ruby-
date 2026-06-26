import React from 'react'

export default function Button({type, text , className}) {
    const styles = {
        btnPrimary:"bg-[#FFD700] rounded-lg  cursor-pointer text-black"
    }

  return (
    <button type={type} className={`${styles.btnPrimary} ${className} `}>{text}</button>
  )
}
