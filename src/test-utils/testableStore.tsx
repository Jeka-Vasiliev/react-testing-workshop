import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import api from "../api";
import { AllActions, loadTodos } from "../store/actions";
import { rootReducer } from "../store/reducers";
import sagas from "../store/sagas";
import { asJestMock } from "./asJestMock";
import { create, TodoTuble } from "./create";

export function createTestableStore(...builderSteps: StoreBuilderStep[]) {
  const actions: AllActions[] = [];
  for (const step of builderSteps) {
    step(actions);
  }

  const initialState = actions.reduce(rootReducer, undefined);
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(sagas);
  return store;
}

export function renderConnected(
  el: any,
  ...storeBuilderSteps: StoreBuilderStep[]
) {
  return render(el, {
    wrapper: ({ children }) => (
      <Provider store={createTestableStore(...storeBuilderSteps)}>
        {children}
      </Provider>
    ),
  });
}

export interface StoreBuilderStep {
  (actions: AllActions[]): void;
}

export function withTodosAtApi(...todoTitles: string[]): StoreBuilderStep {
  const todos = create.todos(...todoTitles);
  return () => {
    asJestMock(api.fetch).mockImplementationOnce(async () => todos);
  };
}

export function withTodos(...todoTitles: string[]): StoreBuilderStep {
  return (actions) => {
    actions.push(loadTodos.success(create.todos(...todoTitles)));
  };
}

export function withEnabledTodos(...todos: TodoTuble[]): StoreBuilderStep {
  return (actions) => {
    actions.push(loadTodos.success(create.todoWithEnabled(...todos)));
  };
}

export function withAddApiReturnAddedTodo(): StoreBuilderStep {
  return () => {
    asJestMock(api.add).mockImplementationOnce(async (title: string) =>
      create.todo(title)
    );
  };
}
