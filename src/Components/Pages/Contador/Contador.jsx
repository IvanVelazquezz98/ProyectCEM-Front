import SideBar from "../../SideBar/SideBar"
import styles from "./Contador.module.css"
export default function Contador (){


    
    return (
        <div className={styles.flex} >
        <SideBar/><div className={styles.info}>Contador</div>
        
        </div>
    )
}