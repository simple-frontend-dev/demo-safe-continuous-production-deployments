async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(60 * 1000); // one minute
