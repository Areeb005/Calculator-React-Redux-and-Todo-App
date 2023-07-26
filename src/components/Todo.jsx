import React from 'react';
import { useState } from "react"

const Todo = (props) => {
    const [input, setInput] = useState('');
    const [Arr, setArr] = useState([]);
    const [editvalue, setEditvalue] = useState(false)
    const [currentParam, setParam] = useState(false);
    const [key, setKey] = useState(0);

    const setlocalStorage = (__todo) => {
        return localStorage.setItem('todo', JSON.stringify(__todo))
    }

    const getlocalStorage = () => {
        return JSON.parse(localStorage.getItem('todo'));
    }

    const change = (event) => {
        setInput(event.target.value);
    }

    let todo = getlocalStorage();
    if (todo === null) todo = [];

    const add = () => {
        if (input === '') {
            alert('Please Write Something!');
        } else {
            todo.push(input);
            setKey(parseInt(key)+1)
            setlocalStorage(todo);
            setInput('');
        }
    }

    const remove = (param) => {

        todo.forEach((element, index) => {
            if (param === index) {
                todo.splice(index, 1)
            }
        });
        
        setKey(parseInt(key)-1);
        setlocalStorage(todo);
        setArr(todo);
        setEditvalue(false);
        setParam(false);
        setInput('');
    }


    const edit = (param) => {
        setEditvalue(true);
        setParam(param);

        todo.map((element, index) => {
            if (param === index) setInput(element);
        })


    }

    const cancel = () => {
        setEditvalue(false);
        setParam(false);
        setInput('');
    }

    const update = (param) => {
        if (input === '') {
            alert('Please Write Something!');
        } else {
            todo[param] = input;
            setlocalStorage(todo);
            setEditvalue(false);
            setParam(false);
            setInput('');
        }
    }


    return <>
        <div className="main">
            <div className="todo-div">
                <div className="input-div">
                    <input type="text" onChange={(e) => change(e)} value={input} />
                    {
                        !editvalue ?
                            <button onClick={() => add()} className={props.white}>Add</button>
                            :
                            <button onClick={() => update(currentParam)} className={props.white}>Update</button>
                    }
                </div>
                <div className="list-div">
                    <ul id="myUl">
                        {

                            todo.map((element, index) => {
                                return <li id={index} key={index}> <span className="text"> {element} </span>
                                    {
                                        currentParam !== Number ?
                                            <>
                                                {
                                                    currentParam !== index ?
                                                        <button onClick={() => edit(index)} className="edit-btn">Edit</button>
                                                        :
                                                        <button onClick={() => cancel(index)} className="edit-btn">Cancel</button>
                                                }
                                            </>
                                            :
                                            <button onClick={() => edit(index)} className="edit-btn">Edit</button>
                                    }

                                    <button onClick={() => remove(index)} className={`remove-btn ${props.white}`}>Remove</button> </li>;
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Todo;