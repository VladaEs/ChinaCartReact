import styles from './header.module.css'
import Busket from './Busket';
import BusketAmount from './busket-contet';
import { useContext, useState } from 'react';

const Header= (props)=>{
    const ctx= useContext(BusketAmount);
    const VisibleCartHandler=()=>{
        ctx.SetVisibleBusket(true);
    }

    return(
        <div className={styles.HeaderBG}>
            <div className={styles.CafeName}>Japan kitchen</div>
            <div className={styles.BusketWrap} onClick={VisibleCartHandler}><Busket></Busket></div>
        </div>
    )

}
export default Header;
