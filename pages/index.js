import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import NavBar from '@/comps/nav'
import MenuProp from '@/comps/menuPopUp'

export default function Home() {
  const [menuPopup, setMenuPopup] = useState(false)

  function MenuPopUp(){
    menuPopup ? setMenuPopup(false) : setMenuPopup(true)
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="MDIA 2109"/>
        <meta property="og:title" content="Assignment #1 - Home Page"/>
        <meta property="og:description" content="BCIT Digital Design and Development Diploma"/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <NavBar onClick={()=>{MenuPopUp(true)}}></NavBar>
        {menuPopup && <MenuProp onClick={()=>{MenuPopUp(false)}}></MenuProp>}
        <div className={styles.flexboxColumn}>
          <h1 className={styles.h1}>An investment in knowledge pays the best interest.</h1>
          <hr noshade="true" className={styles.lineBreak}/>
          <p className={styles.paragraph}>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
          <div className={styles.flexboxRow}>
            <a href='/about'>
              <button className={styles.borderWhiteButton}>More About Us</button>
            </a>
            <a href='/contact'>
              <button className={styles.borderWhiteButton}>Contact Us</button>
            </a>
          </div>
        </div>
        
        <a href='/about'>
          <span>
            <img className={styles.downwardArrow} src="/downwardArrow.png"/>
          </span>
        </a>
        
        
      </main>
    </>
  )
}
