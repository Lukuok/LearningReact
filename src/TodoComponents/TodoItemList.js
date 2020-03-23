import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {

        /*
        
        지금은 이렇게 비어있는 컴포넌트를 만들었습니다. 이 컴포넌트는 3가지의 props 를 받게됩니다.

        todos: todo 객체들이 들어있는 배열
        onToggle: 체크박스를 키고 끄는 함수
        onRemove: 아이템을 삭제시키는 함수
        
        */
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
            <TodoItem
                id = {id}
                text = {text}
                checked = {checked}
                onToggle = {onToggle}
                onRemove = {onRemove}
                key = {id}
            />
            )
        );

        return ( 
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;