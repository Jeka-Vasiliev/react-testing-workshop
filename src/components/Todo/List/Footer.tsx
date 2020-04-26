import Button from 'antd/lib/button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateFilter } from '../../../store/actions';
import { getFilter, getTodos } from '../../../store/selectors';

export const Footer: React.FC = () => {
  const todos = useSelector(getTodos);
  const currentFilter = useSelector(getFilter);

  const dispatch = useDispatch();

  const outstanding = todos.filter((todo) => !todo.completed).length;
  const getButtonType = (type: string) =>
    currentFilter === type ? 'primary' : undefined;

  return (
    <div>
      <div style={{ width: '60%', display: 'inline-block' }}>
        {outstanding} items outstanding
      </div>
      <div
        style={{ width: '40%', display: 'inline-block', textAlign: 'right' }}
      >
        <Button
          type={getButtonType('ALL')}
          style={{ marginRight: '10px' }}
          onClick={() => dispatch(updateFilter('ALL'))}
        >
          All
        </Button>

        <Button
          type={getButtonType('ACTIVE')}
          style={{ marginRight: '10px' }}
          onClick={() => dispatch(updateFilter('ACTIVE'))}
        >
          Active
        </Button>

        <Button
          type={getButtonType('COMPLETED')}
          onClick={() => dispatch(updateFilter('COMPLETED'))}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};
