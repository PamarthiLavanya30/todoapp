import styles from "./footer.module.css";
export default function Footer({completedTodos,totalTodos}){
return <div  className={styles.comtodos}>
    <span className={styles.item}>TotalTodos:{totalTodos}</span>
    <span className={styles.item}>CompletedTodos:{completedTodos}</span>
    
</div>
}