import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "./Pagination";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Given a pagination component", () => {
  const nextButtonText = "Next";
  const backButtonText = "Back";
  const nextPage = vi.fn();
  const backPage = vi.fn();
  describe("When its rendered and the user clicks on the 'Next' button", () => {
    test("Then the function nextPage should be called", async () => {
      renderWithProviders(
        <Pagination
          nextPage={nextPage}
          backPage={backPage}
          limit={2}
          skip={0}
          totalSynths={10}
        />
      );

      const button = screen.getByRole("button", { name: nextButtonText });
      await userEvent.click(button);

      expect(nextPage).toHaveBeenCalled();
    });
  });

  describe("When its rendered and the user clicks on the 'Back' button", () => {
    test("Then the function backPage should be called", async () => {
      renderWithProviders(
        <Pagination
          nextPage={nextPage}
          backPage={backPage}
          limit={2}
          skip={2}
          totalSynths={10}
        />
      );

      const button = screen.getByRole("button", { name: backButtonText });
      await userEvent.click(button);

      expect(backPage).toHaveBeenCalled();
    });
  });
});
