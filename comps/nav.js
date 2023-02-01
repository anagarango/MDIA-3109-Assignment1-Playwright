export default function NavBar({
    onClick = () => {}
}){
    return(
        <nav style={{marginBottom: "90px"}}>
            <img src="/menu-icon.png" style={{width:"50px"}} onClick={onClick}></img>
            <img src="/favicon.png" style={{width:"50px"}}></img>
        </nav>
    )
}