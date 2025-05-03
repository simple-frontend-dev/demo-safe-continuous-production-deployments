import "./style.css";

const environment = import.meta.env.PUBLIC_ENV;
const sha = import.meta.env.PUBLIC_SHA;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Safe Continuous Production Deployments</h1>
    <h2>Simple Frontend demo</h2>
    <h3 class="highlight">
      <span class="description">Environment:</span><span>${environment}</span>
    </h3>
    <h3 class="highlight">
      <span class="description">Deployed commit:</span><span class="commit-sha">${sha}</span>
    </h3>
  </div>
`;
