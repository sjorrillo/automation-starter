export const buildStepPath = appName => fileName => `./app/${appName}/steps/${fileName}`;

export const getStepsByAppNames = appNames => appNames.reduce((acc, appName) => {
  const { steps } = require(`../${appName}`); // eslint-disable-line
  return acc.concat(steps);
}, []);
