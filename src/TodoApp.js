import React, { Component } from 'react';
import TodoListTemplate from './TodoComponents/TodoListTemplate';
import Form from './TodoComponents/Form';
import TodoItemList from './TodoComponents/TodoItemList'

class TodoApp extends Component {

    id = 3;

    state = {
        input: '',
        todos: [
            {id:0, text: ' 리액트 소개', checked: false},
            {id:1, text: ' 리액트 소개', checked: true},
            {id:2, text: ' 리액트 소개', checked: false}
        ]
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    render() {
        return (
            <TodoListTemplate form={<Form/>}>
                <TodoItemList/>
            </TodoListTemplate>
        );
    }
}

export default TodoApp;
