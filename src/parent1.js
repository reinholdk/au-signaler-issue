import { BindingSignaler } from 'aurelia-templating-resources';

export class Parent1 {
  static inject = [BindingSignaler];

  constructor(signaler) {
    this.signaler = signaler;
  }

  toggle() {
    this.signaler.signal('my-signal');
  }

}
