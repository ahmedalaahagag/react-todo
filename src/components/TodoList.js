import React, {Component} from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        const TodoItems = this.props.todos.map((item, index) =>
            <TodoItem
                key={
                    item.id
                }
                todo={
                    item
                }
                filters={
                    this.props.filters
                }
                handleChange={
                    () => this.props.toggleCompleted(index)
                }
                handleDelete={
                    () => this.props.deleteTask(index)
                }
            />);

        return (
            <ul className="todo-list">
                {TodoItems}
            </ul>
        );
    }
}

export default TodoList;
