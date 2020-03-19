import React, { Component } from 'react';
import TodoListTemplate from './TodoComponents/TodoListTemplate';
import Form from './TodoComponents/Form';
import TodoItemList from './TodoComponents/TodoItemList'

class TodoApp extends Component {
    render() {
        return (
            <TodoListTemplate form={<Form/>}>
                <TodoItemList/>
            </TodoListTemplate>
        );
    }
}

export default TodoApp;
