import Header from "../Header/Header";
import ImageMain from '../../images/main.png'
import styles from './MainImage.module.css'
const MainImage= ()=>{
 
    return(
        <div>
            <img src={ImageMain} className={styles.ImageMain}/>
        </div>
    )
}

export default MainImage
