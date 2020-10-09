import { PLATFORM } from 'aurelia-framework';

export const configure = (aurelia) => {
  aurelia.globalResources(PLATFORM.moduleName('parent1'), PLATFORM.moduleName('parent2'));
};
