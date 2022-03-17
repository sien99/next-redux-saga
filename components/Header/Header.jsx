import React from 'react'
import Image from 'next/image'
import Logo from '/Logo.svg'
import styles from '../../styles/Home.module.css'

const Header = () => (
  <header className={styles.header}>
    <Image src={Logo} width="120" alt="Bossjob" />
  </header>
)

export default Header