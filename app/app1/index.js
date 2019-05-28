import { buildStepPath } from '../common/utils';
import { appilcationNames } from '../common/constants';

const buildPath = buildStepPath(appilcationNames.APP1);

export const steps = [
  buildPath('demo.js'),
  buildPath('login.js'),
];
