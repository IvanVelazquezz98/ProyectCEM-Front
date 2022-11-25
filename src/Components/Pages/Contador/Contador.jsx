
import styles from "./Contador.module.css"
export default function Contador ({user}){


    
    return (
        <div className={styles.flex} >
        <div className={styles.info}>Tu contador de estudios {user.name}</div>
        
        </div>
    )
}