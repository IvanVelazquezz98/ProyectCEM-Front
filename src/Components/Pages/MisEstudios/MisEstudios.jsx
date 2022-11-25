
import styles from './MisEstudios.module.css'
export default function MisEstudios ({user}){


    
    return (
        <div className={styles.flex}>
        <div className={styles.info}>Tus estudios {user.name}</div>
        </div>
    )
}