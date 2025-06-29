import TodoItem from "./Todoitem";
import styles from './todolist.module.css';
export default function TodoList({todos,setTodos}){
    const sortedtodo=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
    return <div className={styles.list}>
        {sortedtodo.map((item)=>
            <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>)}
    </div>
}