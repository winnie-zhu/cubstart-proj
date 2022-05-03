import { Task } from '../task/Task';
import { Icon } from '@iconify/react';

export function List(todoList, handleToggle, handleFilter) {
    console.log("todolist type " + typeof(todoList));
    return (
        <div>
            {Object.keys(todoList).map((id) => {
                var todo = todoList[id];
                return (
                    <Task todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                );
            })}
            <button className='trash' onClick={handleFilter}><Icon icon="bx:trash" color="#545454" height="42"/></button>
        </div>
    );
}