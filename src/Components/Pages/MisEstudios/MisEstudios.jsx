import SideBar from "../../SideBar/SideBar"
import styles from './MisEstudios.module.css'
export default function MisEstudios (){


    
    return (
        <div className={styles.flex}>
        <SideBar/>
        <div className={styles.info}>Mis estudios</div>
        </div>
    )
}