import styles from './TotalOrder.module.css';
import { useState } from 'react';
const TotalOrder=(props)=>{
    
    
    return(
        <div className={styles.ToPayWrapper}>
                <label className={styles.Total}>{props.children}</label>
                <label className={styles.TotalNumber}>${props.CostAll}</label>
        </div>
    );
}

export default TotalOrder;