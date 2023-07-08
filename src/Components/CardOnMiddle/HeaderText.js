import styles from './HeaderText.module.css';

const HeaderText=(props)=>{
    return(
        <h1 className={styles.HeaderTextCard}>{props.children}</h1>
    )

}

export default HeaderText;