export class URLRequest {
  url;
  config;
  constructor(url: string, config = {}) {
    this.url = url;
    this.config = config;
  }
  compareRequest(body: any) {
    return true;
  }
}

export class TripAdvisor extends URLRequest {
  constructor(url: string, config = {}) {
    super(url, config);
  }
  compareRequest(body: any) {
    if (body.message === "Success") {
      if (body.data.data.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
const gHubRepos = new URLRequest("https://api.github.com/orgs/nodejs/repos");
const axolAPI = new URLRequest("https://theaxolotlapi.netlify.app/");
const wikiNJT = new URLRequest(
  "https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=" +
    "nj transit" +
    "&limit=10"
);
const movebankAPI = new URLRequest(
  "https://github.com/movebank/movebank-api-doc"
);
const tripAdvisorAPI = new URLRequest(
  "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=60750",
  {
    headers: {
      "X-RapidAPI-Key": "261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  }
);
export const requests: URLRequest[] = [
  gHubRepos,
  wikiNJT,
  axolAPI,
  movebankAPI,
  tripAdvisorAPI,
];
