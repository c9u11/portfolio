export function fetchPortfolioData() {
  return fetch(`${process.env.PUBLIC_URL}/data.json`).then(res => res.json());
}