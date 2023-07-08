import styles from './MenuItem.module.css';
import ControlMenuItem from './ControlMenuItem';
const MenuItem=(props)=>{
   
return(
    <div className={styles.WrapperElementMenu}>
        <div className={styles.DishName}>{props.name}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.Price}>${props.price}</div>
        <ControlMenuItem IdOrder={props.IdOrder}/>
    </div>
)
}
export default MenuItem;