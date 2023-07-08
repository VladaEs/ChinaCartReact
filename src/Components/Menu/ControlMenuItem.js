import styles from './ControlMenuItem.module.css';
import { useState, useEffect, useContext} from 'react';
import BusketAmount from '../Header/busket-contet';
const ControlMenuItem=(props)=>{
    
    const ctx= useContext(BusketAmount);
    
    const [ChechInputAmount, SetChengeInputAmount]=useState(true);
    const [AmountDishes, SetAmountDishes]=useState(1);
    useEffect(()=>{
        let a = 0;
        ctx.OrderedItems.forEach(item=>{
            a +=item['amount'];
        }) 
        ctx.AmountItemsChange(a);
        console.log(a);
    },[ctx.OrderedItems]);
    const ChangeAmountDishesHandler=()=>{       
        if(ChechInputAmount== true){
            let value= false;
            let obj = 
            {name: ctx.MenuItems[props.IdOrder]["name"], 
            price:Number(ctx.MenuItems[props.IdOrder]["price"]),
            amount: Number(AmountDishes),
            };
           
            
            ctx.OrderedItems.forEach(item =>{
                if(item['name']== obj['name']){
                    item["amount"]=Number( item["amount"])+ Number(obj['amount']);
                    ctx.AddOrderedItems([...ctx.OrderedItems]);    
                    value = true;
                    return;
                }
            })
            
            if(value == false){
                ctx.AddOrderedItems([obj,...ctx.OrderedItems]);
                console.log(ctx.OrderedItems);
                return;
            }
            
        }

    }

    useEffect(()=>{
        const timer= setTimeout(()=>{
            SetChengeInputAmount(!isNaN(AmountDishes));
            
        },1000);
        return ()=>{
            
            clearTimeout(timer);
        }
    }, [AmountDishes])
   
    const AmountChangeHandler=(event)=>{
        SetAmountDishes(event.target.value);
    }

    return(
        <div className={styles.ControlButtonsAll}>
            <div className={styles.RowInpLabel}>
                <label className={styles.labelAmount}>Amount</label>
                <input type="text" className={ `${styles.InputInRow} ${!ChechInputAmount? styles.error: ''} ` } defaultValue={AmountDishes} onChange={AmountChangeHandler} />
            </div>
            <button className={styles.buttonConfirm} onClick={ChangeAmountDishesHandler}  disabled={!ChechInputAmount} >Confirm</button>
        </div>
    )
}

export default ControlMenuItem;