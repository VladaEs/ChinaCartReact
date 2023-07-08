import styles from './AddRemove.module.css';
import BusketAmount from '../Header/busket-contet';
import { useContext } from 'react';

const AddRemove=(props)=>{
const ctx = useContext(BusketAmount);
    const AddClickHandler=()=>{
        ctx.OrderedItems[props.index]["amount"]=Number(ctx.OrderedItems[props.index]["amount"])+1;
        
        ctx.AddOrderedItems([...ctx.OrderedItems]);
    }
    const RemoveClickHandler=()=>{
        if(ctx.OrderedItems[props.index]["amount"]==1){
            return;
        }
        ctx.OrderedItems[props.index]["amount"]=Number(ctx.OrderedItems[props.index]["amount"]) -1;
        ctx.AddOrderedItems([...ctx.OrderedItems]);
        console.log(ctx.OrderedItems);
        return;
    }
    
    return(
        <div className={styles.AddRemoveWrapper}>
            <div className={`${styles.ButtonControll} ${styles.Add}`} onClick={AddClickHandler}>+</div>
            <div className={`${styles.ButtonControll}`}onClick={RemoveClickHandler} >-</div>
        </div>

    )
}

export default AddRemove;