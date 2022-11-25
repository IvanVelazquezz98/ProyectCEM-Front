import styles from './Perfil.module.css'
import iconMas from '../../../Assets/iconMas.svg'
export default function Perfil ({user}){



    return (
        <div className={styles.flex}>
          <div className={styles.divIntro}>
          <h4 className={styles.intro}>Este es tu perfil {user.name}</h4> 
          <div className={styles.editInfo}><button className={styles.buttonEditInfo}>✏️</button> </div>
          </div>
          <br></br>
          <div className={styles.divInfo}>
          <div className={styles.divEmail}> <h6 className={styles.emailText}>Email:     {' ' + user.email} </h6></div>
          <div className={styles.divEmail}> <h6 className={styles.emailText}>Sede: {' '} {user.sede} </h6></div>
          </div>
          <div className={styles.divEmail}> <img className={styles.iconMas} src={iconMas}/></div>
        </div>
        
    )
}