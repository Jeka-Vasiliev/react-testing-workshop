import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import api from '../api';
import { addTodo, deleteTodo, loadTodos, toggleTodo } from './actions';

function* listenLoadTodos() {
  yield takeLatest(loadTodos.request, function* () {
    const response = yield call(api.fetch);
    yield put(loadTodos.success(response.data));
  });
}

function* listenAddTodo() {
  yield takeEvery(addTodo.request, function* ({ payload: title }) {
    const response = yield call(api.add, title);
    yield put(addTodo.success(response.data));
  });
}

function* listenToggleTodo() {
  yield takeEvery(toggleTodo.request, function* ({ payload: todo }) {
    const response = yield call(api.update, {
      ...todo,
      completed: !todo.completed,
    });
    yield put(toggleTodo.success(response.data));
  });
}

function* listenDeleteTodo() {
  yield takeEvery(deleteTodo.request, function* ({ payload: todo }) {
    yield call(api.delete, todo);
    yield put(deleteTodo.success(todo));
  });
}

export default function* rootSaga() {
  yield* listenLoadTodos();
  yield* listenAddTodo();
  yield* listenToggleTodo();
  yield* listenDeleteTodo();
}
