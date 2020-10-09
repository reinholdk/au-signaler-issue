import { bootstrap } from 'aurelia-bootstrapper';
import { StageComponent } from 'aurelia-testing';
import { PLATFORM } from 'aurelia-pal';
import { Alternate1ValueConverter } from '../../src/alternate1';
import { Alternate2ValueConverter } from '../../src/alternate2';
import { configure as configureLib } from '../../src/index';

function configure(config) {
  return config.use
    .standardConfiguration()
    .feature(configureLib);
}

describe('Stage Component', function () {
  let component;

  async function checkMessage(expected) {
    const msgElement = component.element.querySelector('#message');
    try {
      await component.waitForElement(`#message.${expected}`, { present: true, timeout: 1000 });
    } finally {
      expect([...msgElement.classList]).toEqual(expect.arrayContaining([expected]));
    }
  }

  describe('comp1', function () {
    beforeEach(async function () {
      Alternate1ValueConverter.reset();
      component = StageComponent
        .withResources(PLATFORM.moduleName('parent1'))
        .inView('<parent1></parent1>');
      component.bootstrap(configure);
      await component.create(bootstrap);
    });

    afterEach(() => component.dispose());

    it('should render message', async function () {
      await checkMessage('msg-text1');
      component.viewModel.toggle();
      await checkMessage('msg-text0');
    });
  });

  describe('comp2', function () {
    beforeEach(async function () {
      Alternate2ValueConverter.reset();
      component = StageComponent
        .withResources(PLATFORM.moduleName('parent2'))
        .inView('<parent2></parent2>');
      component.bootstrap(configure);
      await component.create(bootstrap);
    });

    afterEach(() => component.dispose());

    it('should render message', async function () {
      await checkMessage('msg-text1');
      component.viewModel.toggle();
      await checkMessage('msg-text0');
    });
  });
});
