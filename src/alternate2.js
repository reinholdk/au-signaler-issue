export class Alternate2ValueConverter {
    static count = 0;

    static reset() {
        Alternate2ValueConverter.count = 0;
    }

    static toggle() {
        Alternate2ValueConverter.count = ++Alternate2ValueConverter.count % 2;
        return Alternate2ValueConverter.count;
    }

    toView(value) {
        return value + Alternate2ValueConverter.toggle();
    }
}
