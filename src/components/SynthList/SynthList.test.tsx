import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import SynthList from "./SynthList";
import { getSynthsDataMock } from "../../mocks/factories/synthFactory/synthFactory";

describe("Given a SynthList component", () => {
  describe("When its rendered with a synth", () => {
    test("Then it should show a heading with the synth name", () => {
      const synth = getSynthsDataMock(1);

      renderWithProviders(<SynthList synths={synth} />);

      const synthHeading = screen.getByRole("heading", {
        name: synth[0].name,
      });

      expect(synthHeading).toBeInTheDocument();
    });
  });
});
