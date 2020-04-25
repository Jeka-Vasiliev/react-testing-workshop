import './App.css';

import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AddTodo from './containers/Todo/Add/AddTodoContainer';
import TodoList from './containers/Todo/List/TodoListContainer';
import { loadTodos } from './store/actionCreators';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

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
};

export default App;
