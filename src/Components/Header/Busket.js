import styles from './busket.module.css';
import { useState, useContext } from 'react';
import './busket-contet';
import BusketAmount from './busket-contet';
import BusketImg from '../../images/Busket.png';
const Busket= ()=>{
    const ctx =useContext(BusketAmount);
    return(
        <>
        <img src={BusketImg} className={styles.BusketImg} />
        <span >Busket</span>
        <span className={styles.AmountNumber}>{ctx.AmountItems}</span>

        </>
    )

}

export default Busket;