import { TripAdvisor } from "./UrlRequest";

describe("TripAdvisor", () => {
  it("has success in the response", () => {
    const mockResponse = {
      message: "Success",
    };
    const tripAdvisor = new TripAdvisor("tripadvisor-url");
    expect(tripAdvisor.compareRequest(mockResponse)).toEqual(true);
  });

  it("it fails in the response", () => {
    const mockResponse = {
      message: "Failed",
    };
    const tripAdvisor = new TripAdvisor("tripadvisor-url");
    expect(tripAdvisor.compareRequest(mockResponse)).toEqual(false);
  });

  it("data array is not empty", () => {
    const mockResponse = {
      message: "Success",
      data: {
        data: [
          {
            restaurantsId:
              "Restaurant_Review-g60750-d8297962-Reviews-Civico_1845-San_Diego_California",
          },
        ],
      },
    };
    const tripAdvisor = new TripAdvisor("tripadvisor-url");
    expect(tripAdvisor.compareRequest(mockResponse)).toEqual(true);
  });
});
