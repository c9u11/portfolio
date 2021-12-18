export function fetchPortfolioData() {
  return fetch(`/data.json`).then(res => res.json());
}