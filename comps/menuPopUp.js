import styles from '@/styles/Home.module.css'

export default function MenuProp({
    onClick = () => {}
}){
    return(
        <div className={styles.menu}>
          <h1 className={styles.vertical} onClick={onClick}>X</h1>
          <ul className={styles.vertical} style={{padding:"0 0 0 20px"}}>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
          </ul>
          </div>
    )
}