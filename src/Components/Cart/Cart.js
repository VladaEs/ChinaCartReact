import styles from './Cart.module.css';
import CartItem from './CartElementDescription';
import TotalOrder from './TotalOrder';
import ReactDOM  from 'react-dom';
import { useContext,useEffect ,useState} from 'react';
import BusketAmount from '../Header/busket-contet';
const Cart=(props)=>{
  const ctx= useContext(BusketAmount);
  const [PriceAll, SetPriceAll]=useState(0);
  
  useEffect(()=>{
    let CostAll=0;
    ctx.OrderedItems.forEach(item => {
      CostAll += item["amount"]*item['price'];
    });
    SetPriceAll(CostAll);
    console.log(PriceAll);
  },[ctx.OrderedItems]);
  if(!props.IsOpen) return null;

  const HideCartHandler=()=>{
    ctx.SetVisibleBusket(false);
  }
  const SetEverethingNullHandler=()=>{
    ctx.AmountItemsChange(0);
    ctx.AddOrderedItems([]);
    ctx.SetVisibleBusket(false);
  }
let ButtonsOrder =''
  if(!ctx.AmountItems==0){
    ButtonsOrder=
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={HideCartHandler}>Close</button>
      <button className={styles.button} onClick={SetEverethingNullHandler}>Order</button>
    </div>;
  }
  else{
    ButtonsOrder=
  <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={HideCartHandler}>Close</button>
  </div>;
  }

  return ReactDOM.createPortal(
        <div className={styles.BackCovering} >
          <div className={styles.CartWrapper}>
              {ctx.OrderedItems.map((item,index) =><CartItem key={index} ind={index} name={item.name}  price={item.price} amount={item.amount}  />)}
                <TotalOrder CostAll={PriceAll}>{(ctx.AmountItems==0)?"Make your first order": "Total:" }</TotalOrder>
                {ButtonsOrder}
              </div>
        </div>, document.getElementById('popUpCart'))
    

}
export default Cart;