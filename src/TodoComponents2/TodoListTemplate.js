import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = (props, {form}) => {
    return (
        <main className="todo-list-template">
        <div className="title">
          오늘 할 일
        </div>
        <section className="form-wrapper">
          { props.form }
          { form}
        </section>
        <section className="todos-wrapper">
          { props.children }
        </section>
      </main>
    );
}

export default TodoListTemplate;