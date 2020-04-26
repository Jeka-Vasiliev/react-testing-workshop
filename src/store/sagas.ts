import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import api from "../api";
import { addTodo, deleteTodo, loadTodos, toggleTodo } from "./actions";

function* listenLoadTodos() {
  yield takeLatest(loadTodos.request, function* () {
    try {
      const todos = yield call(api.fetch);
      yield put(loadTodos.success(todos));
    } catch (error) {
      yield put(loadTodos.failure(error));
    }
  });
}

function* listenAddTodo() {
  yield takeEvery(addTodo.request, function* ({ payload: title }) {
    try {
      const newTodo = yield call(api.add, title);
      yield put(addTodo.success(newTodo));
    } catch (error) {
      yield put(addTodo.failure(error));
    }
  });
}

function* listenToggleTodo() {
  yield takeEvery(toggleTodo.request, function* ({ payload: todo }) {
    try {
      const updatedTodo = yield call(api.update, {
        ...todo,
        completed: !todo.completed,
      });
      yield put(toggleTodo.success(updatedTodo));
    } catch (error) {
      yield put(toggleTodo.failure(error));
    }
  });
}

function* listenDeleteTodo() {
  yield takeEvery(deleteTodo.request, function* ({ payload: todo }) {
    try {
      yield call(api.delete, todo);
      yield put(deleteTodo.success(todo));
    } catch (error) {
      yield put(deleteTodo.failure(error));
    }
  });
}

export default function* rootSaga() {
  yield* listenLoadTodos();
  yield* listenAddTodo();
  yield* listenToggleTodo();
  yield* listenDeleteTodo();
}
