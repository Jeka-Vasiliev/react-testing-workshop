import { Button, Table } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTodo, toggleTodo } from '../../../store/actionCreators';
import AppState from '../../../store/AppState';
import Todo from '../../../types/Todo';
import { Footer } from './Footer';

export const TodoList: React.FC = () => {
  const filter = useSelector((state: AppState) => state.filter);
  const todos = useSelector((state: AppState) => state.todos);
  const loading = useSelector((state: AppState) => state.todosLoading);

  const dispatch = useDispatch();

  const getTodos = () => {
    switch (filter) {
      case 'ACTIVE':
        return todos.filter((todo) => !todo.completed);
      case 'COMPLETED':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const columns = [
    {
      key: 'complete',
      width: '10%',
      render: (text: string, record: Todo) => (
        <input
          type="checkbox"
          defaultChecked={record.completed}
          onClick={() => dispatch(toggleTodo(record))}
        />
      ),
    },
    {
      key: 'title',
      title: 'Thing to do',
      render: (text: string, record: Todo) => (
        <span>
          <span style={{ fontWeight: 'bold' }}>{record.order}.</span>
          <span className={record.completed ? 'completed' : 'active'}>
            {record.title}
          </span>
        </span>
      ),
    },
    {
      key: 'delete',
      width: '10%',
      render: (text: string, record: Todo) => (
        <span
          style={{ width: '100%', textAlign: 'right' }}
          onClick={() => dispatch(deleteTodo(record))}
        >
          <Button>Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <Table
      rowKey={(record: Todo) => record.id.toString()}
      columns={columns}
      dataSource={getTodos()}
      bordered={true}
      pagination={false}
      loading={loading}
      size="middle"
      footer={() => <Footer />}
    />
  );
};
