import { Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../../store/actionCreators';

export const AddTodo: React.FC = () => {
  const dispatch = useDispatch();

  const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(addTodo.request(e.currentTarget.value));
      e.currentTarget.value = '';
    }
  };

  return (
    <Input
      autoFocus={true}
      type="text"
      className="form-control"
      placeholder="What needs to be done?"
      onKeyUp={keyHandler}
    />
  );
};
