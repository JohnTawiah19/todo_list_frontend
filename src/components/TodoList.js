import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import {getTodos} from "../api";
function TodoList() {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        const fetchItems = async()=>{
            const todos = await getTodos();
            setItems(todos)
        }
        fetchItems()
        // setItems([
        //     {text:"foo",id:0},
        //     {text:"bar",id:1},
        //     {text:"bazz",id:2}
           
        // ])
    },[])    

    const todoList= items.map(todo=>(
        <tr key={todo._id}>
            <td>{todo.text}</td>
            <td>
               <Link to={`/edit/${todo.id}`}>Edit</Link>
            </td>
            
        </tr>
    ))

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Todo List</h3>
                <table className="table table-striped mt-3">
                    <thead>
                        <th>Text</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                     {
                       todoList     
                     }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default TodoList
