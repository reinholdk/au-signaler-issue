export class Alternate1ValueConverter {
    static count = 0;

    static reset() {
        Alternate1ValueConverter.count = 0;
    }

    static toggle() {
        Alternate1ValueConverter.count = ++Alternate1ValueConverter.count % 2;
        return Alternate1ValueConverter.count;
    }

    toView(value) {
        return value + Alternate1ValueConverter.toggle();
    }
}
