import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { GetRandomValue } from "./getRandomValue/getRandomValue";
import { GetRandomValueError } from "./getRandomValue/getRandomValueError";
import { GetSizeRelationshipError } from "./getRandomValue/getSizeRelationshipError";

describe("App", () => {
  it("shoule render without errors and shoule clicking the button", () => {
    render(<App />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
  });

  it("should get a random value from the minimum and maximum values", () => {
    const randomizer = new GetRandomValue(0, 100);
    const randomValue = randomizer.getRandom();
    expect(randomValue).toBeGreaterThanOrEqual(0);
    expect(randomValue).toBeLessThanOrEqual(100);
  });

  it("should display an error message when minValue or maxValue is not a number", () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const randomizer1 = new GetRandomValue(NaN, 100);
    expect(() => randomizer1.getRandom()).toThrow(GetRandomValueError);

    const randomizer2 = new GetRandomValue(0, NaN);
    expect(() => randomizer2.getRandom()).toThrow(GetRandomValueError);

    consoleErrorSpy.mockRestore();
  });

  it("should display an error message when minValue is greater than maxValue", () => {
    const randomizer = new GetRandomValue(100, 0);
    expect(() => randomizer.getRandom()).toThrow(GetSizeRelationshipError);
  });
});
