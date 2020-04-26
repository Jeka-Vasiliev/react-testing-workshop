import { renderHook, RenderHookResult } from "@testing-library/react-hooks";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import { AllActions } from "../store/actions";

export function renderHookConnectedToStore<P, R>(
  hook: (props: P) => R,
  ...afterRenderedCallbacks: ((rendered: RenderHookResult<P, R>) => void)[]
) {
  const savedActions: AllActions[] = [];
  const renderResult = renderHook(hook, {
    wrapper: ({ children }) => (
      <Provider
        store={createStore(
          (s) => s,
          applyMiddleware((api) => (next) => (action) => {
            savedActions.push(action);
            next(action);
          })
        )}
      >
        {children}
      </Provider>
    ),
  });
  for (const callback of afterRenderedCallbacks) {
    callback(renderResult);
  }
  return { ...renderResult, savedActions };
}
