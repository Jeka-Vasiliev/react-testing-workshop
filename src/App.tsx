import './App.css';

import { Col, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTodo from './containers/Todo/Add/AddTodoContainer';
import TodoList from './containers/Todo/List/TodoListContainer';
import { loadTodos } from './store/actionCreators';
import AppState from './store/AppState';
import Todo from './types/Todo';

interface AppProps {
  loadTodos: () => void;
  filter: string;
  todos: Todo[];
}

class App extends Component<AppProps, {}> {
  render() {
    return (
      <div>
        <Row justify="center" align="top">
          <Col span={24}>
            <header className="my-2">
              <h1>Things To Do</h1>
            </header>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <AddTodo />
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <TodoList />
          </Col>
        </Row>
      </div>
    );
  }

  async refreshTodos() {
    this.props.loadTodos();
  }

  componentDidMount() {
    this.refreshTodos();
  }
}

const mapStateToProps = ({ todos, filter }: AppState) => {
  return {
    filter,
    todos
  };
};

const mapDispatchToProps = {
  loadTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
