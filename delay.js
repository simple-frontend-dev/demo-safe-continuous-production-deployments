async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(30 * 1000); // one minute
