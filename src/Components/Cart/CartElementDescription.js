import styles from './CartElementDescription.module.css'
import AddRemove from './AddRemove';

const CartItem= (props)=>{


    return(
        <div>
            <div className={styles.BlockInfo} >
                <span className={styles.DishName}>{props.name}</span>
                <div className={styles.RowPriceAmount} >
                    <label className={styles.price}>${props.price}</label>
                    <label className={styles.AmountItems}>{props.amount}</label>
                </div>
                <AddRemove index={props.ind}></AddRemove>
            </div>
            
        </div>
    )
}
export default CartItem;