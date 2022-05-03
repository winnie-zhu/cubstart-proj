import { useState } from 'react';
import { Nav } from '../../components/nav/Nav';
import { List } from '../../components/list/List';
import data from "./data.json";
import { InputItem } from '../../components/inputItem/InputItem';

export function Todo() {
    const [todoList, setList] = useState(data);

    const addTask = (userInput) => {
        let copy = [...todoList];
        copy = [...copy, 
            {id: todoList.length + 1, task: userInput, complete: false}
        ];
        setList(copy);
    }

    const handleToggle = (id) => {
        let mapped = todoList.map((task, key) => {
            return (
                task.id === id ? {...task, complete: !task.complete} : {...task}
            );
        });
        setList(mapped);
    }

    const handleFilter = () => {
        let filtered = todoList.filter(task => {
            return !task.complete;
        })
        setList(filtered);
    }
    return (
        <>
            <Nav />
            <InputItem addTask={addTask}/>
            {console.log(typeof(todoList))}
            {console.log("hello")}
            <List 
                todoList={todoList} 
                handleToggle={handleToggle} 
                handleFilter={handleFilter}/>
        </>
    );
}