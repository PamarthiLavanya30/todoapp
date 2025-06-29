import { useState } from "react";
import styles  from "./form.module.css";
export default function Form({todos,setTodos}){
    const [todo,setTodo]=useState({name:"",done:false});
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);//spread operator
        setTodo({name:"",done:false});
    }
    return (<form onSubmit={handleSubmit} className={styles.todoform}>
        <div className={styles.inputContainer}>
        <input placeholder="Enter Todo Item...." className={styles.modernInput} onChange={(e)=>setTodo({name:e.target.value,done:false})} value={todo.name} type="text" />
        <button type="submit" className={styles.modernButton}>Add</button>
        </div>
         </form>);

}