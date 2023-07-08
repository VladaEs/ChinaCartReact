import HeaderText from "./HeaderText";
import DescriptionCard from "./DescriptionCard";
import styles from "./CardMiddle.module.css";


const CardMiddle=()=>{
    return(
        <div className={styles.CardGreeting}>
            <HeaderText>Online Sushi restaurant Japan Kitchen</HeaderText>
            <DescriptionCard>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</DescriptionCard>
        </div>


        
    )
}

export default CardMiddle;