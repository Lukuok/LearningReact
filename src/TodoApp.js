import React, { Component } from 'react';
import TodoListTemplate from './TodoComponents/TodoListTemplate';
import Form from './TodoComponents/Form';

class TodoApp extends Component {
    render() {
        return (
            <TodoListTemplate form={<Form/>}>
                ToDo App
            </TodoListTemplate>
        );
    }
}

export default TodoApp;
