import { BindingSignaler } from 'aurelia-templating-resources';

export class Parent2 {
  static inject = [BindingSignaler];

  constructor(signaler) {
    this.signaler = signaler;
  }

  toggle() {
    this.signaler.signal('another-signal');
  }

}
