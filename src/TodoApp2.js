import React, { Component } from 'react'
import TodoListTemplate from './TodoComponents2/TodoListTemplate';
import Form             from './TodoComponents2/Form';

class TodoApp2 extends Component {
    render() {
        return (
            <TodoListTemplate form={<Form/>}>
                템플릿 완성
            </TodoListTemplate>
        )
    }
}
export default TodoApp2;
