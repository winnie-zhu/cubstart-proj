import { Task } from '../task/Task';

export function List(todoList, handleToggle, handleFilter) {
    console.log("todolist type" + todoList.type());
    return (
        <div>
            {todoList.map(todo => {
                return (
                    <Task todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                );
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>
                Clear Completed
            </button>
        </div>
    );
}