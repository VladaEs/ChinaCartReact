import MenuItem from "./MenuItem";
import styles from './CardMenu.module.css';
import { useContext } from "react";
import BusketAmount from "../Header/busket-contet";
const CardMenu=(props)=>{
    const ctx= useContext(BusketAmount);
    return(
        <div className={styles.CardMenu}>
            {ctx.MenuItems.map((item, index) => <MenuItem name={item.name} description={item.description}  price={item.price}  key ={index} IdOrder={index}/> )}
        
        </div>
    )
}
export default CardMenu