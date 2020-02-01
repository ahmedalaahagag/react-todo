import React, {Component} from 'react';
import TodoList from './TodoList';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {empty: false};
    }

    addTask = (e) => {
        if (e.key === 'Enter') {
            if (e.target.value !== undefined && e.target.value !== "") {
                this.setState({
                    empty: false,
                });
                this.props.addTask(e.target.value);
                e.target.value = "";
            } else {
                this.setState({
                    empty: true,
                });
            }
        }
    }

    render() {
        return (
            <section className="main">
                <input className={`new-todo ${this.state.empty ? 'error' : ''}`} placeholder="What needs to be done?"
    autofocus onKeyDown={(e) => this.addTask(e)}/>
                <div className="todo-list">
                    <TodoList
                              todos={
                                  this.props.todos
                              }
                              filters={
                                  this.props.filters
                              }
                              toggleCompleted={
                                  this.props.toggleCompleted
                              }
                              deleteTask={
                                  this.props.deleteTask
                              }
                    />
                </div>
            </section>
        );
    }
}

export default Content;
