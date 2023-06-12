import { screen } from "@testing-library/react";
import { getSynthDataMock } from "../../mocks/factories/synthFactory/synthFactory";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SynthCard from "./SynthCard";

describe("Given a SynthCard component", () => {
  describe("When it receives a synth with a heading", () => {
    test("Then it should show the synth heading", () => {
      const synth = getSynthDataMock();

      renderWithProviders(
        wrapWithRouter(<SynthCard isLazy="lazy" synth={synth} />)
      );

      const synthHeading = screen.getByRole("heading", { name: synth.name });

      expect(synthHeading).toBeInTheDocument();
    });
  });
});
