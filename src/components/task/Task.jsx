
export function Task(todo, handleToggle) {
    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    }
    
    return (
        <div 
            id={todo.id} 
            key={todo.id + todo.task} 
            name="todo"
            value={todo.id}
            onClick={handleClick}
            className={todo.complete ? "strike" : ""} 
        >
            {todo.task}
        </div>
    );
}