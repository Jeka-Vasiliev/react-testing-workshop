import { waitFor } from "@testing-library/react";
import React from "react";

import { App } from "./App";
import { renderConnected, withTodosAtApi } from "./test-utils/testableStore";

jest.mock("./api");

describe("<App />", () => {
  it("should render loaded todos", async () => {
    const { getByText } = renderConnected(
      <App />,
      withTodosAtApi("one", "two", "three")
    );

    const oneEl = await waitFor(() => getByText(/one/));
    const twoEl = await waitFor(() => getByText(/two/));
    const threeEl = await waitFor(() => getByText(/three/));

    expect(oneEl).toBeInTheDocument();
    expect(twoEl).toBeInTheDocument();
    expect(threeEl).toBeInTheDocument();
  });
});
