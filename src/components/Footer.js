import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.todos.filter(function (todo) {
                    return !todo.completed;
                }).length}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className={`${this.props.filters===null?'selected':''}`} href="#/" onClick={() => this.props.filterTasks(null)}>All</a>
                    </li>
                    <li>
                        <a className={`${this.props.filters===false?'selected':''}`}  href="#/active" onClick={() => this.props.filterTasks(false)}> Active </a>
                    </li>
                    <li>
                        <a className={`${this.props.filters===true?'selected':''}`}  href="#/completed" onClick={() => this.props.filterTasks(true)}>Completed</a>
                    </li>
                </ul>
                <div className="operations">
                    <button className="clear-completed" onClick={() => this.props.clearCompleted()}>
                        Clear completed
                    </button>
                    <button className="clear-completed" onClick={() => this.props.markAllAsCompleted()}>
                        Mark all completed
                    </button>
                </div>
            </footer>
        );
    }
}

export default Footer;
