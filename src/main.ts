import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Safe Continuous Production Deployments</h1>
    <h2>Simple Frontend demo</h2>
    <p class="highlight">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
