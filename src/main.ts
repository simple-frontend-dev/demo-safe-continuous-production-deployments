import "./style.css";

const environment = import.meta.env.PUBLIC_ENV;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Safe Continuous Production Deployments</h1>
    <h2>Simple Frontend demo</h2>
    <h3 class="highlight">
      Environment: ${environment}
    </h3>
  </div>
`;
