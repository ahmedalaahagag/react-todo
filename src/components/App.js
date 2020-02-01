import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import todos from '../data/TodoData';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { todos ,filterBy:null };
    }

    toggleCompleted = (index) => {
        const { todos } = this.state.todos;
        todos[index].completed = !todos[index].completed
        this.setState(() => ({
            todos: todos
        }));
    };

    deleteTask = (index) => {
        this.setState(() => ({
            todos: this.state.todos.splice(index, 1),
        }));
    };

    addTask = (Task) => {
        let { todos } = this.state;
        todos.unshift({
            id: Math.random(),
            text: Task,
            completed: false,
        });
        this.setState(() => ({
            todos:todos
        }));
    };

    filterTasks = (completed) => {
        this.setState(() => ({
            filterBy: completed,
        }));
    };

    clearCompleted = () => {
        this.setState(() => ({
            todos: this.state.todos.filter(function (todo) {
                return todo.completed !== true;
            }),
        }));
    };

    markAllAsCompleted = () => {
        let { todos } = this.state;
        todos.forEach(function (todo) {
            todo.completed = true;
        });
        this.setState(() => ({
            todos: todos
        }));
    };

    render() {
        return (
            <div className="todoapp">
                <Header/>
                <Content
                    todos={this.state.todos}
                    filters={this.state.filterBy}
                    toggleCompleted={this.toggleCompleted}
                    deleteTask={this.deleteTask}
                    addTask={this.addTask}
                />
                <Footer
                    todos={this.state.todos}
                    filters={this.state.filterBy}
                    filterTasks={this.filterTasks}
                    clearCompleted={this.clearCompleted}
                    markAllAsCompleted={this.markAllAsCompleted}
                />
            </div>
        );
    }
}

export default App;
