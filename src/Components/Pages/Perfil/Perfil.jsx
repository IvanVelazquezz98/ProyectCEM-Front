import SideBar from "../../SideBar/SideBar"
import styles from './Perfil.module.css'

export default function Perfil (){



    return (
        <div className={styles.flex}>
            <SideBar/>
          <div className={styles.info}>perfil</div>  
        </div>
        
    )
}