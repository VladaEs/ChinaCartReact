import styles from './DescriptionCard.module.css';

const DescriptionCard=(props)=>{

   return (
    <span className={styles.Description}>{props.children}</span>
   );

}

export default DescriptionCard;