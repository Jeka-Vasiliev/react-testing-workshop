import React from "react";

import { App } from "./App";
import { renderConnected, withTodosAtApi } from "./test-utils/testableStore";

jest.mock("./api");

describe("<App />", () => {
  it("should render loaded todos", async () => {
    const renderResult = renderConnected(
      <App />,
      withTodosAtApi("one", "two", "three")
    );

    await expect(renderResult).toContainElementWithText(/one/);
    await expect(renderResult).toContainElementWithText(/two/);
    await expect(renderResult).toContainElementWithText(/three/);
  });
});
