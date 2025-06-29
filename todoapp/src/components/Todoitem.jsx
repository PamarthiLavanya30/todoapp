import styles from "./todoitem.module.css";
export default function TodoItem({item,todos,setTodos}){
    function handleDelete(item){
        console.log("delete for item ",item);
        setTodos(todos.filter((todo)=>todo !== item));
    }
    function handleClick(item){
        
       const newarray= todos.map((todo)=>(todo.name==item)?{...todo,done:!todo.done}:{...todo});
       setTodos(newarray);
    console.log(todos);
    }
    const x=item.done?styles.completed:"";
    return <div className={styles.item}>
    <div className={styles.itemName}><span onClick={()=>{handleClick(item.name)}} className={x}>{item.name}</span><span className={styles.span}>
        <button onClick={()=>{handleDelete(item)}} className={styles.deletebutton}>x</button>
    </span></div>
    
    <hr className={styles.line}/>
    </div>
}