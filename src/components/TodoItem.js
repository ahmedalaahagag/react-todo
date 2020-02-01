import React, {Component} from 'react';

class TodoItem extends Component {
    render = () => {
        let hidden = false;

        if (this.props.filters != null) {
            // Hide Active / Show Comepleted
            if (this.props.filters && !this.props.todo.completed) {
                hidden = true;
            }
            // Hide Comeleted / Show Active
            if (this.props.filters === false && this.props.todo.completed) {
                hidden = true;
            }
        }
        ;

        return (
            <div className={
                `todo-item ${hidden ? "hidden" : "showen"}`
            }>
                < li className={
                    this.props.todo.completed && "completed"
                }>
                    <div className="view">
                        <input className="toggle"
                               type="checkbox"
                               checked={
                                   this.props.todo.completed
                               }
                               onChange={() => this.props.handleChange()}/>
                        <label>{this.props.todo.text}</label>
                        <button className="destroy" onClick={() => this.props.handleDelete()}></button>
                    </div>
                </li>
            </div>
        );
    }
}

export default TodoItem;
