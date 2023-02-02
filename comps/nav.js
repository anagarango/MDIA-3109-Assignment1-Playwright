import styles from '@/styles/Home.module.css'

export default function NavBar({
    onClick = () => {},
}){
    return(
        <nav className={styles.nav}>
            <img src="/menu-icon.png" style={{width:"50px"}} onClick={onClick}></img>
            <img src="/favicon.png" style={{width:"50px"}}></img>
        </nav>
    )
}