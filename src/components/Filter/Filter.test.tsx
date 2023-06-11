import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Filter from "./Filter";
import { vi } from "vitest";

describe("Given a Filter component", () => {
  describe("When its rendered", () => {
    test("Then it should been an aria label text 'filter by type'", () => {
      const expectedAriaLabelText = "filter by type";
      const setFilterData = vi.fn();
      const filterData = { type: "" };

      renderWithProviders(
        <Filter filterData={filterData} setFilterData={setFilterData} />
      );

      const filter = screen.getByLabelText(expectedAriaLabelText);

      expect(filter).toBeInTheDocument();
    });
  });
});
