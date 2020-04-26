import { Button, Table } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTodo, toggleTodo } from '../../../store/actions';
import { getFilteredTodos, getTodosLoading } from '../../../store/selectors';
import Todo from '../../../types/Todo';
import { Footer } from './Footer';

export const TodoList: React.FC = () => {
  const loading = useSelector(getTodosLoading);
  const filteredTodos = useSelector(getFilteredTodos);

  const dispatch = useDispatch();

  const columns = [
    {
      key: 'complete',
      width: '10%',
      render: (text: string, record: Todo) => (
        <input
          type="checkbox"
          defaultChecked={record.completed}
          onClick={() => dispatch(toggleTodo.request(record))}
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
          onClick={() => dispatch(deleteTodo.request(record))}
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
      dataSource={filteredTodos}
      bordered={true}
      pagination={false}
      loading={loading}
      size="middle"
      footer={() => <Footer />}
    />
  );
};
